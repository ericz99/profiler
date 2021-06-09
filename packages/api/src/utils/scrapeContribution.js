import cheerio from 'cheerio';
import _ from 'lodash';

import { API } from '../config';

function convertDate(date) {
    return date.split('-');
}

export const scrapeContribution = async (user) => {
    const days = {};

    try {
        const { data } = await API.get(`/${user}`);
        const $ = cheerio.load(data);

        $('rect')
            .get()
            .forEach(function (el) {
                const dataCount = $(el).attr('data-count');
                const dataDate = $(el).attr('data-date');

                if (dataCount) {
                    const temp = convertDate(dataDate);
                    const date = new Date(temp[0], temp[1], temp[2]);
                    const month = date.toLocaleString('default', {
                        month: 'long',
                    });

                    days[month] = (days[month] || 0) + Number(dataCount);
                }
            });

        return days;
    } catch (e) {
        if (e) {
            throw new Error(e);
        }
    }
};
