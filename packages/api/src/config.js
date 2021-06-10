import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://github.com/',
    timeout: 30000,
    headers: {
        'user-agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36',
    },
});

export default { port: process.env.PORT || 8080 };
