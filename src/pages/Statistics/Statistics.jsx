import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

const Statistics = () => {

  const getCartLength = JSON.parse(localStorage.getItem("ids")) || [];

  const data = [
    {
      "name": "Total Donation",
      "value": 12 - getCartLength.length,
      "color": "rgb(199, 10, 10)"
    },
    {
      "name": "Your Donation",
      "value": getCartLength.length,
      "color": "rgb(10, 116, 10)"
    },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" fontSize={20} fontWeight="bold" textAnchor="middle" dominantBaseline="central">
        {(percent * 100).toFixed(1)}%
      </text>
    );
  };

  return (
    <div className='mt-5 mb-16'>
      <div className='flex justify-center items-center'>
        <PieChart width={400} height={500}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={180}
            fill="#8884d8"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-12 font-semibold'>
        <div className='flex items-center gap-4 lg:gap-3'>
          <h4>Your Donation</h4>
          <div className='w-36 lg:w-24 h-3 bg-green-700 rounded'></div>
        </div>
        <div className='flex items-center gap-3'>
          <h4>Total Donation</h4>
          <div className='w-36 lg:w-24 h-3 bg-red-700 rounded'></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
