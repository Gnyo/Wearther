import React from 'react';
import WeatherIcon from '../assets/WeatherIcon';
import './WeatherCard.css';

export default function WeatherCard({ data }) {
  if (!data || !data.current || !data.forecast) {
    return null; // 혹은 <Loading />
  }

  const { current, forecast } = data;

  // 오늘 날짜 기준으로 최고/최저 기온 구하기
  const today = new Date().toISOString().split("T")[0];
  const todayTemps = forecast.filter(hour => hour.time.startsWith(today));
  const maxTemp = Math.max(...todayTemps.map(h => h.temp_c));
  const minTemp = Math.min(...todayTemps.map(h => h.temp_c));

  const getWeatherKorean = (text) => {
    const weatherMap = {
      'Sunny': '맑음',
      'Clear': '맑음',
      'Partly cloudy': '구름 조금',
      'Cloudy': '흐림',
      'Overcast': '매우 흐림',
      'Mist': '옅은 안개',
      'Fog': '안개',
      'Light rain': '약한 비',
      'Moderate rain': '보통 비',
      'Heavy rain': '강한 비',
      'Light snow': '약한 눈',
      'Moderate snow': '보통 눈',
      'Heavy snow': '강한 눈',
      'Light rain shower': '약한 소나기',
      'Moderate or heavy rain shower': '강한 소나기',
      'Thundery outbreaks possible': '천둥번개',
      'Patchy light rain': '약한 비',
      'Patchy light drizzle': '이슬비'
    };
    return weatherMap[text] || text;
  };

  return (
    <section className="weather-card">
      <div className="weather-main">
        <div className="weather-info">
          <div className="weather-card-icon-container">
            <WeatherIcon 
              code={current.condition.code} 
              isDay={current.is_day === 1}
              size="7rem"
            />
          </div>
          <span className="weather-condition">
            {getWeatherKorean(current.condition.text)}
          </span>
        </div>
        <div className="weather-temp">
          <strong>{current.temp_c}°</strong>
          <span> 체감온도 {current.feelslike_c}°</span>
          <span className="ttemp-range">
            최고 {Math.round(maxTemp)}° | 최저 {Math.round(minTemp)}°
          </span>
        </div>
      </div>
    </section>
  );
}