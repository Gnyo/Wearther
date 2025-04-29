import { create } from "zustand";
import { getHourlyWeather, getWeeklyWeather } from "../api/weather";

export const useWeatherStore = create((set) => ({
  hourlyWeather: null,
  weeklyWeather: null,
  currentTemp: null,
  feelsLike: null,
  airQuality: null,
  isLoading: false,
  error: null,

  fetchWeather: async (lat, lon) => {
    set({ isLoading: true, error: null });

    try {
      const [{ current, forecast }, weeklyData] = await Promise.all([
        getHourlyWeather(lat, lon),
        getWeeklyWeather(lat, lon),
      ]);

      const currentTemp = current.temp_c;
      const feelsLike = current.feelslike_c;

      const airQuality = {
        pm10: current.air_quality?.pm10 || 0,
        pm25: current.air_quality?.pm2_5 || 0,
        uv: current.uv || 0,
      };

      set({
        hourlyWeather: { current, forecast }, // ✅ 구조 통째로 저장
        weeklyWeather: weeklyData,
        currentTemp,
        feelsLike,
        airQuality,
        isLoading: false,
      });
    } catch (error) {
      console.error("날씨 가져오기 실패:", error);
      set({
        error: error.message || "날씨 정보를 가져오는데 실패했습니다",
        isLoading: false,
      });
    }
  },
}));
