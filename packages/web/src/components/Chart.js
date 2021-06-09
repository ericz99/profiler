import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

export default function Chart({ activityData, options, type }) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (activityData) {
            const labels = Object.keys(activityData);
            const dataPoint = Object.values(activityData);

            setData({
                labels,
                datasets: [
                    {
                        label: 'Your Contribution 2020 - 2021',
                        data: dataPoint,
                        fill: true,
                        backgroundColor: [
                            'rgba(201, 203, 207, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.4,
                    },
                ],
            });
        }
    }, [activityData]);

    const renderGraph =
        type === 'bar' ? (
            <Bar
                data={data}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            grid: {
                                display: false,
                            },
                        },
                    },
                    ...options,
                }}
            />
        ) : (
            <Line
                data={data}
                options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            grid: {
                                display: false,
                            },
                        },
                        y: {
                            grid: {
                                display: false,
                            },
                        },
                    },
                    ...options,
                }}
            />
        );

    return <>{renderGraph}</>;
}
