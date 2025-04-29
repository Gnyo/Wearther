import React from 'react';
import Card from './Card';
import {
  FaRegFaceLaughSquint,
  FaRegFaceSmile,
  FaRegFaceMeh,
  FaRegFaceFrown,
  FaRegFaceTired
} from "react-icons/fa6";
import './AirQualityCard.css';

export default function AirQualityCard({ pm10, pm25, uv }) {
  const getAirQualityStatus = (value, type) => {
    // 미세먼지
    if (type === 'pm10') {
      if (value <= 30) return { text: '매우좋음', icon: <FaRegFaceLaughSquint /> };
      if (value <= 80) return { text: '좋음', icon: <FaRegFaceSmile /> };
      if (value <= 150) return { text: '보통', icon: <FaRegFaceMeh /> };
      if (value <= 600) return { text: '나쁨', icon: <FaRegFaceFrown /> };
      return { text: '매우나쁨', icon: <FaRegFaceTired /> };
    }
    // 초미세먼지
    if (type === 'pm25') {
      if (value <= 15) return { text: '매우좋음', icon: <FaRegFaceLaughSquint /> };
      if (value <= 35) return { text: '좋음', icon: <FaRegFaceSmile /> };
      if (value <= 75) return { text: '보통', icon: <FaRegFaceMeh /> };
      if (value <= 150) return { text: '나쁨', icon: <FaRegFaceFrown /> };
      return { text: '매우나쁨', icon: <FaRegFaceTired /> };
    }
    // 자외선
    if (value <= 2) return { text: '낮음', icon: <FaRegFaceLaughSquint /> };
    if (value <= 5) return { text: '보통', icon: <FaRegFaceMeh /> };
    if (value <= 7) return { text: '높음', icon: <FaRegFaceFrown /> };
    return { text: '매우높음', icon: <FaRegFaceTired /> };
  };

  return (
<div className="air-quality-container">
  <Card className="air-card">
    <div className="quality-item">
      <h3>미세먼지</h3>
      <hr />
      <div className="quality-status">
        <span>{getAirQualityStatus(pm10, 'pm10').text}</span>
        <span className="icon">{getAirQualityStatus(pm10, 'pm10').icon}</span>
      </div>
    </div>
  </Card>

  <Card className="air-card">
    <div className="quality-item">
      <h3>초미세먼지</h3>
      <hr />
      <div className="quality-status">
        <span>{getAirQualityStatus(pm25, 'pm25').text}</span>
        <span className="icon">{getAirQualityStatus(pm25, 'pm25').icon}</span>
      </div>
    </div>
  </Card>

  <Card className="air-card">
    <div className="quality-item">
      <h3>자외선</h3>
      <hr />
      <div className="quality-status">
        <span>{getAirQualityStatus(uv).text}</span>
        <span className="icon">{getAirQualityStatus(uv).icon}</span>
      </div>
    </div>
  </Card>
</div>

  );
}