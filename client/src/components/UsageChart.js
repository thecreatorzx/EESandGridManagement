import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const UsageChart = () => {
  const data = [
    {
      subject: "Super Capacitor",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Thermal Battery",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Pumped Hydro",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Cryogenic Battery",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Power ShutDown",
      A: 85,
      B: 90,
      fullMark: 150,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Usage"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Charging"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default UsageChart;
