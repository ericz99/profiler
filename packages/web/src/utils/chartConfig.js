/* eslint-disable import/no-anonymous-default-export */
export default (data, type) => {
    if (type === 'bar') {
        return {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        };
    }

    return {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    };
};
