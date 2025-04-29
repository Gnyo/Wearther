import React from "react";
import "./WeatherHourlyForecast.css";
import WeatherIcon from "../assets/WeatherIcon";
import { IoWaterSharp } from "react-icons/io5";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function WeatherHourlyForecast({ hourly }) {
  if (!hourly || hourly.length === 0) {
    return null;  // 혹은 <Loading />
  }

  const currentTime = new Date();
  currentTime.setMinutes(0, 0, 0);

  const filteredHours = hourly
    .filter((hour) => new Date(hour.time) >= currentTime)
    .slice(0, 24);

  const chartData = filteredHours.map((hour) => ({
    time: `${new Date(hour.time).getHours()}시`,
    temp: hour.temp_c,
  }));

  return (
    <section className="weather-hourly-forecast">
      <div className="scroll-container">
        <ul className="hourly-list">
          {filteredHours.map((hour, index) => (
            <li key={index} className="hourly-item">
              <div className="time">{new Date(hour.time).getHours()}시</div>
              <div className="icon">
                <WeatherIcon
                  code={hour.condition.code}
                  isDay={hour.is_day === 1}
                  size="2rem"
                />
              </div>
              <div className="temp">{Math.round(hour.temp_c)}°</div>
            </li>
          ))}
        </ul>

        <div className="chart-container">
        <ResponsiveContainer width={filteredHours.length * 70} height={60}>
            <LineChart
              data={chartData}
              margin={{ top: 7, bottom: 2, left: 0, right: 0 }}
            >
              <XAxis
                dataKey="time"
                hide
                interval={0}
                tick={false}
                padding={{ left: 35, right: 35 }}
              />
              <YAxis hide domain={["auto", "auto"]} />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="var(--point-color)"
                strokeWidth={1}
                dot={{
                  r: 2.5,
                  stroke: "var(--point-color)",
                  strokeWidth: 2,
                  fill: "var(--point-color)",
                }}
                activeDot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <ul className="hourly-list">
          {filteredHours.map((hour, index) => (
            <li key={index} className="hourly-item">
              <div className="precip">
                <IoWaterSharp size="0.8rem" style={{ marginRight: "0.2rem", color: "var(--supporting-color)" }} />
                {hour.chance_of_rain}%
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
