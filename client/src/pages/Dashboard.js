import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue, setGridLoad } from "../features/energySlice";
import EnergyCard from "../components/EnergyCard";
import LoadChart from "../components/LoadChart";
import UsageChart from "../components/UsageChart";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { value, gridLoad, storage, isLoadGreaterThanPower } = useSelector(
    (state) => state.energy
  );
  const productCardWidth = 274;
  const storageCardWidth = 180;

  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 101);
      dispatch(setValue(randomValue));
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const totalPower = 60 + value / 20 + 50 + value / 5;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <article>
        <section>
          <div className="production">
            <EnergyCard
              name={"Solar Power"}
              value={60 + value / 20}
              width={productCardWidth}
            />
            <EnergyCard
              name={"Wind Power"}
              value={50 + value / 5}
              width={productCardWidth}
            />
            <EnergyCard
              name={"Total Power"}
              value={totalPower}
              width={productCardWidth}
              gridLoad={gridLoad}
              setGridLoad={(load) => dispatch(setGridLoad(load))}
              isLoadGreaterThanPower={isLoadGreaterThanPower}
            />
            <h2>Power Generator</h2>
          </div>
          <section className="load-chart">
            <LoadChart />
            <h2>Power Flow Analysis</h2>
          </section>
        </section>
        <section>
          <div className="storage">
            {storage.map((s, index) => (
              <EnergyCard
                key={index}
                name={`Storage ${index + 1}`}
                value={s}
                width={storageCardWidth}
                status={isLoadGreaterThanPower ? "Unutilized" : "Charging"}
                isLoadGreaterThanPower={isLoadGreaterThanPower}
              />
            ))}
            <div className="charging">
              <p
                style={{
                  color: isLoadGreaterThanPower ? "red" : "green",
                }}
              >
                {isLoadGreaterThanPower ? "Discharging" : "Charging"}
              </p>
              <h2>Energy Storage</h2>
            </div>
          </div>
          <div className="life-cycle">
            <UsageChart />
            <h2>Storage Performance Overview</h2>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Dashboard;
