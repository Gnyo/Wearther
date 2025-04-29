import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import OutfitRecommendation from '../components/OutfitRecommendation';
import { useGeolocation } from '../hooks/useGeolocation';
import { useWeatherStore } from '../store/useWeatherStore';
import './Outfit.css';

export default function Outfit() {
  const navigate = useNavigate();
  const { 
    hourlyWeather, 
    isLoading, 
    error,
    fetchWeather 
  } = useWeatherStore();
  
  const { coords, address } = useGeolocation();

  useEffect(() => {
    if (!navigator.geolocation) {
      alert('위치 정보를 지원하지 않는 브라우저입니다.');
      return;
    }
  }, [navigate, fetchWeather]);

  if (isLoading || !hourlyWeather) {
    return <Loading />;
  }

  if (error) {
    return <div className="error-container">오류가 발생했습니다!: {error}</div>;
  }

  // 날씨에 따른 문구 결정
  const getWeatherMessage = (temp, isRainy, isSnowy) => {
    if (isRainy) {
      return "비가 오는 날입니다. 우산을 꼭 챙기세요!";
    } else if (isSnowy) {
      return "눈이 오는 날입니다. 따뜻하게 입고 미끄럼 조심하세요!";
    } else if (temp >= 28) {
      return "너무 더워요! 시원한 옷을 준비하세요.";
    } else if (temp >= 23 && temp < 28) {
      return "따뜻한 날씨네요. 가벼운 옷차림이 좋아요.";
    } else if (temp >= 20 && temp < 23) {
      return "오늘은 선선한 날입니다. 가벼운 외투를 챙기세요.";
    } else if (temp >= 17 && temp < 20) {
      return "약간 쌀쌀합니다. 외투를 준비하세요.";
    } else if (temp >= 12 && temp < 17) {
      return "쌀쌀한 날씨입니다. 따뜻하게 입으세요.";
    } else if (temp >= 9 && temp < 12) {
      return "추운 날씨입니다. 따뜻한 옷을 입으세요.";
    } else if (temp >= 5 && temp < 9) {
      return "매우 추운 날씨입니다. 방한용품을 챙기세요.";
    } else {
      return "너무 추워요! 완전 방한 준비를 하세요.";
    }
  };

  // 비 또는 눈 여부 확인
  const isRainy = hourlyWeather.current.condition.text.includes("rain");
  const isSnowy = hourlyWeather.current.condition.text.includes("snow");

  const weatherMessage = getWeatherMessage(
    hourlyWeather.current.temp_c, 
    isRainy, 
    isSnowy
  );

  return (
    <div className="outfit-container">
      <Header location={address} />
      {weatherMessage && (
        <div className="weather-message">
          <p>{weatherMessage}</p>
          <hr className="divider" />
        </div>
      )}
      <OutfitRecommendation
        temp={hourlyWeather.current.temp_c}
        isRainy={isRainy}
        isSnowy={isSnowy}
      />
      <Footer />
    </div>
  );
}