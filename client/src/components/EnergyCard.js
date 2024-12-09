import React from "react";
import { RadialBarChart, RadialBar } from "recharts";
const EnergyCard = ({ name, value, width }) => {
  let color = value <= 10 ? "red" : value <= 30 ? "orange" : "#4CAF50";
  const data = [
    {
      name: "Remaining",
      value: 100, // Background part, complementary to the main value
      fill: "transparent", // Light grey for the background
    },
    {
      name: "Value",
      value: value < 5 ? 5 : value,
      fill: color,
    },
  ];
  return (
    <div className="energy-card">
      <div className="chart">
        <RadialBarChart
          width={width}
          height={width}
          innerRadius="60%"
          outerRadius="100%"
          data={data}
          startAngle={-120}
          endAngle={-420}
        >
          <RadialBar
            minAngle={15}
            dataKey="value"
            background={{ fill: "#ddd" }}
            cornerRadius={10}
          />
        </RadialBarChart>
      </div>
      <p
        className="chart-value"
        style={{
          color: `${color}`,
        }}
      >
        {value}%
      </p>
      <h2>{name}</h2>
    </div>
  );
};

export default EnergyCard;
