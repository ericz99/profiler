/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default async (userName) => {
    try {
        const { data } = await axios.post('/', { userName });
        return data;
    } catch (e) {
        if (e) {
            console.log(e);
        }
    }
};
