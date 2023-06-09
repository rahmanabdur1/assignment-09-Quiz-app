import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    const data = [
        {
            name: "React js",
            marks: 8,
            quiz: 8,
            amt: 2400
        },
        {
            name: "Javescript",
            marks: 5,
            quiz: 9,
            amt: 2210
        },
        {
            name: "Css",
            marks: 7,
            quiz: 8,
            amt: 2290
        },
        {
            name: "Git",
            marks: 5,
            quiz: 11,
            amt: 2000
        },

    ];
    return (
        <div className='p-20'>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="marks" stroke="blue" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistic;