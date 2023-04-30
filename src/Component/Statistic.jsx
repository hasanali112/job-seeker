import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    const data = [
        {
          name: "Assignment-1",
         number: 60
        },
        {
          name: "Assignment-2",
          number: 60
        },
        {
          name: "Assignment-3",
          number: 59
        },
        {
          name: "Assignment-4",
          number: 60
        },
        {
          name: "Assignment-5",
          number: 50
        },
        {
          name: "Assignment-6",
          number: 55
        },
        {
          name: "Assignment-7",
          number: 60
        },
        {
          name: "Assignment-8",
          number:30
        }
      ];
    return (
        <div>
             <AreaChart
            width={1000}
            height={500}
            data={data}
            margin={{
                top: 50,
                right: 30,
                left: 20,
                bottom: 0,
              }}
            >
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="number" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistic;