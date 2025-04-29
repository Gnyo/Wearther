import { 
  WiDaySunny, WiNightClear,             // 1000: 맑음
  WiDayCloudy, WiNightCloudy,           // 1003: 약간 흐림
  WiCloud,                               // 1006: 대체로 흐림
  WiCloudy,                             // 1009: 흐림
  WiFog,                                // 1030, 1135, 1147: 안개
  WiDayRain, WiNightRain,              // 1063, 1180~1195: 비
  WiDaySnow, WiNightSnow,              // 1066, 1210~1225: 눈
  WiDayThunderstorm, WiNightThunderstorm, // 1087, 1273~1282: 천둥번개
  WiDaySleet, WiNightSleet,            // 1069, 1204~1252: 진눈깨비
  WiDust,                               // 1114: 눈보라
  WiRain,                               // 1150~1171: 이슬비
  WiDayShowers, WiNightShowers         // 1240~1246: 소나기
} from "react-icons/wi";

export default function WeatherIcon({ code, isDay, size = '100px' }) {
    const iconStyle = {
        fontSize: size,
        color: 'var(--point-color)'
    };

    const getWeatherIcon = (code, isDay) => {
    switch (code) {
      // 맑음
      case 1000:
        return isDay ? <WiDaySunny style={iconStyle} /> : <WiNightClear style={iconStyle} />;
      // 약간 흐림
      case 1003:
        return isDay ? <WiDayCloudy style={iconStyle} /> : <WiNightCloudy style={iconStyle} />;
      // 대체로 흐림
      case 1006:
        return <WiCloud style={iconStyle} />;
      // 흐림
      case 1009:
        return <WiCloudy style={iconStyle} />;
      // 안개
      case 1030:
      case 1135:
      case 1147:
        return <WiFog style={iconStyle} />;
      // 비
      case 1063:
      case 1180:
      case 1183:
      case 1186:
      case 1189:
      case 1192:
      case 1195:
        return isDay ? <WiDayRain style={iconStyle} /> : <WiNightRain style={iconStyle} />;
      // 눈
      case 1066:
      case 1210:
      case 1213:
      case 1216:
      case 1219:
      case 1222:
      case 1225:
        return isDay ? <WiDaySnow style={iconStyle} /> : <WiNightSnow style={iconStyle} />;
      // 진눈깨비
      case 1069:
      case 1204:
      case 1207:
      case 1249:
      case 1252:
        return isDay ? <WiDaySleet style={iconStyle} /> : <WiNightSleet style={iconStyle} />;
      // 이슬비
      case 1150:
      case 1153:
      case 1168:
      case 1171:
        return <WiRain style={iconStyle} />;
      // 소나기
      case 1240:
      case 1243:
      case 1246:
        return isDay ? <WiDayShowers style={iconStyle} /> : <WiNightShowers style={iconStyle} />;
      // 뇌우
      case 1087:
      case 1273:
      case 1276:
      case 1279:
      case 1282:
        return isDay ? <WiDayThunderstorm style={iconStyle} /> : <WiNightThunderstorm style={iconStyle} />;
      // 눈보라/먼지
      case 1114:
      case 1117:
        return <WiDust style={iconStyle} />;
      default:
        return isDay ? <WiDaySunny style={iconStyle} /> : <WiNightClear style={iconStyle} />;
    }
  };

  return getWeatherIcon(code, isDay);
}
