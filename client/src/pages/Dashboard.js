import React from "react";
import { useState, useEffect } from "react";
import EnergyCard from "../components/EnergyCard";
import LoadChart from "../components/LoadChart";

const Dashboard = () => {
  const [value, setValue] = useState(5);
  const prodCardWidth = 280;
  const storCardWidth = 180;
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(Math.floor(Math.random() * 101));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <article>
        <section>
          <div className="production">
            <EnergyCard
              name={"Solar Power"}
              value={value}
              width={prodCardWidth}
            />
            <EnergyCard
              name={"Wind Power"}
              value={value}
              width={prodCardWidth}
            />
            <EnergyCard
              name={"Total Power"}
              value={value}
              width={prodCardWidth}
            />
          </div>
          <section className="load-chart">
            <LoadChart />
          </section>
        </section>
        <section>
          <div className="storage">
            <EnergyCard
              name={"Super Capacitor"}
              value={value}
              width={storCardWidth}
            />
            <EnergyCard
              name={"Thermal Battery"}
              value={value}
              width={storCardWidth}
            />
            <EnergyCard
              name={"Pumped Hydro"}
              value={value}
              width={storCardWidth}
            />
            <EnergyCard
              name={"Crynogenic Battery"}
              value={value}
              width={storCardWidth}
            />
          </div>
        </section>
      </article>
    </div>
  );
};

export default Dashboard;
