import React from "react";
import { useDispatch } from "react-redux";
import { setGridLoad } from "../features/energySlice";
import { RadialBarChart, RadialBar } from "recharts";

const EnergyCard = ({
  name,
  value,
  width,
  gridLoad,
  setGridLoad,
  isLoadGreaterThanPower,
  status,
}) => {
  let color = isLoadGreaterThanPower ? "red" : "#4CAF50";
  const data = [
    {
      name: "Remaining",
      value: gridLoad ? 200 : 100,
      fill: "transparent",
    },
    {
      name: "Value",
      value: value < 5 ? 5 : value,
      fill: isLoadGreaterThanPower ? "red" : color,
    },
  ];
  if (gridLoad) {
    // If there's grid load, adjust for it
    data[1] = {
      name: "Value",
      value: gridLoad,
      fill: "indigo", // Color for load
    };
    data[2] = {
      name: "Value",
      value: value < 5 ? 5 : value,
      fill: isLoadGreaterThanPower ? "red" : color, // The color for available power
    };
  }

  return (
    <div className="energy-card">
      <RadialBarChart
        width={width}
        height={width}
        innerRadius={gridLoad ? "50%" : "60%"}
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
      <p
        className="chart-value"
        style={{
          color: `${isLoadGreaterThanPower ? "red" : color}`,
        }}
      >
        {value.toFixed(0)}GW
        {gridLoad ? <h3>Load: {gridLoad}GW</h3> : null}
      </p>
      <h2>{name}</h2>
      {gridLoad ? (
        <div className="slide">
          <input
            type="range"
            name="slider"
            id="slider"
            min="0"
            max="100"
            onChange={(e) => setGridLoad(e.target.value * 2)}
          />
        </div>
      ) : null}
      {status && <p>{status}</p>}
    </div>
  );
};

export default EnergyCard;
