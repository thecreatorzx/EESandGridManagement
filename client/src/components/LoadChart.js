import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const LoadChart = () => {
  const data = [
    {
      name: "21:00",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "00:00",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "03:00",
      uv: -1000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "06:00",
      uv: 500,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "09:00",
      uv: -2000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "12:00",
      uv: -250,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "15:00",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "18:00",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#000"
          fill="url(#splitColor)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LoadChart;
