import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const { data } = useLoaderData()
    console.log(data);
    return (
        <div className='flex items-center h-[90vh]'>
            <ResponsiveContainer width="90%" height="50%">
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;