import { useEffect, useState } from "react";
import { getAddressFromCoords } from "../api/location"; // Kakao API 함수 가져오기

export const useGeolocation = () => {
  const [coords, setCoords] = useState(null);
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("이 브라우저는 위치 정보를 지원하지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setCoords({ lat, lon });

        // Kakao API를 통해 주소 변환
        const addr = await getAddressFromCoords(lat, lon);
        setAddress(addr);
      },
      () => {
        setError("위치 정보를 가져오는 데 실패했습니다.");
      }
    );
  }, []);

  return { coords, address, error };
};
