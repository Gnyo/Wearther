const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// WeatherAPI로 현재 날씨와 시간별 날씨 가져오기
export const getHourlyWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=3&aqi=yes&alerts=no`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // 3일치 시간별 데이터 펼치기
    const allHourly = data.forecast.forecastday.flatMap(day => day.hour);

    return {
      current: data.current,   // 현재 날씨
      forecast: allHourly      // 시간별 예보
    };

  } catch (error) {
    console.error('Weather API Error:', error);
    throw error;
  }
};

export const getWeeklyWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=3&aqi=no&alerts=no`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      forecastday: data.forecast.forecastday.map(day => ({
        date: day.date,
        day: {
          maxtemp_c: day.day.maxtemp_c,
          mintemp_c: day.day.mintemp_c,
          daily_chance_of_rain: day.day.daily_chance_of_rain,
          condition: {
            text: day.day.condition.text,
            icon: day.day.condition.icon,
            code: day.day.condition.code   // ✅ 코드도 넣어줘야 해 (중요)
          }
        },
        hour: day.hour  // ✅ 여기에 시간별 데이터 전체 추가
      }))
    };
  } catch (error) {
    console.error('Weather API Error:', error);
    throw error;
  }
};

