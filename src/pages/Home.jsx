import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWeatherStore } from "../store/useWeatherStore";
import WeatherCard from "../components/WeatherCard";
import WeatherHourlyForecast from "../components/WeatherHourlyForecast";
import WeatherWeeklyForecast from "../components/WeatherWeeklyForecast";
import { useGeolocation } from "../hooks/useGeolocation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Loading from "../components/Loading";
import AirQualityCard from "../components/AirQualityCard";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const { hourlyWeather, weeklyWeather, isLoading, error, fetchWeather } =
    useWeatherStore();

  const { coords, address } = useGeolocation();

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("위치 정보를 지원하지 않는 브라우저입니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.warn("위치 권한 거부됨 ❌", error);
      }
    );
  }, [navigate, fetchWeather]);

  if (isLoading || !hourlyWeather || !weeklyWeather) {
    return <Loading />;
  }

  if (error) {
    return <div className="error-container">오류가 발생했습니다!: {error}</div>;
  }

  return (
    <div className="home-container">
      <Header location={address} />
      <WeatherCard data={hourlyWeather} />
      <Card>
        <WeatherHourlyForecast hourly={hourlyWeather.forecast} />
      </Card>
      <AirQualityCard
        pm10={hourlyWeather.current?.air_quality?.pm10}
        pm25={hourlyWeather.current?.air_quality?.pm2_5}
        uv={hourlyWeather.current?.uv}
      />
      <Card>
        <WeatherWeeklyForecast weekly={weeklyWeather} />
      </Card>
      <Footer />
    </div>
  );
}
