import http from 'http';
import os from 'os';
import cluster from 'cluster';
import express from 'express';
import cors from 'cors';
import path from 'path';

import { scrapeContribution } from './utils';
import config from './config';

if (cluster.isMaster) {
    console.warn(`Node cluster master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.error(
            `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
        );
    });
} else {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(
        express.static(path.resolve(__dirname, '..', '..', '/web', '/build'))
    );

    app.get('*', (req, res, next) => {
        res.sendFile(
            path.resolve(__dirname, '..', '..', '/web', '/build', 'index.html')
        );
    });

    app.post('/', async (req, res, next) => {
        const userName = req.body.userName;
        const data = await scrapeContribution(userName);

        res.status(200).json({
            success: true,
            data,
        });
    });
    const server = http.createServer(app);

    server.listen(config.port, () => {
        console.log('running on port 8080');
    });
}
