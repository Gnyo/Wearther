import React from 'react';
import './WeatherWeeklyForecast.css';
import WeatherIcon from "../assets/WeatherIcon";
import { IoWaterSharp } from "react-icons/io5";

export default function WeatherWeeklyForecast({ weekly }) {
  if (!weekly || !weekly.forecastday) {
    return <div>주간 날씨 로딩 중...</div>;
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return days[date.getDay()];
  };

  return (
    <section className="weather-weekly-forecast">
      <ul className="weekly-list">
        {weekly.forecastday.map((day, index) => {
          const hours = day.hour;

          const morning = hours
            .filter(h => new Date(h.time).getHours() < 12)[0];
          
          const afternoon = hours
            .filter(h => new Date(h.time).getHours() >= 12)[0];

          return (
            <li key={day.date} className="weekly-item">
              <div className="date">
                {index === 0 ? '오늘' : formatDate(day.date)+'요일'}
              </div>

              <div className="daily-rain">
                <IoWaterSharp 
                  size="0.8rem" 
                  style={{ marginRight: "0.2rem", color: "var(--supporting-color)" }} 
                />
                {day.day.daily_chance_of_rain}%
              </div>

              <div className="weather-icon dual">
                <WeatherIcon
                  code={morning?.condition.code}
                  isDay={true}
                  size="2rem"
                />
                <WeatherIcon
                  code={afternoon?.condition.code}
                  isDay={true}
                  size="2rem"
                />
              </div>

              <div className="temp-range">
                <span>최고 {Math.round(day.day.mintemp_c)}°</span>
                <span className="temp-divider">|</span>
                <span>최저 {Math.round(day.day.maxtemp_c)}°</span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
