const getAddressFromCoords = async (lat, lon) => {
  try {
    // 프록시 서버 호출
    const response = await fetch(`http://localhost:4000/api/address?lat=${lat}&lon=${lon}`);

    if (!response.ok) {
      console.error("❌ 프록시 서버 요청 실패:", response.status);
      return "프록시 서버 요청 실패";
    }

    const data = await response.json();

    if (data.documents && data.documents.length > 0) {
      const doc = data.documents[0].address;
      return `${doc.region_1depth_name} ${doc.region_2depth_name}`;
    } else {
      console.warn("No address found for the given coordinates.");
      return "주소 불러오기 실패";
    }
  } catch (error) {
    console.error("❌ 프록시 서버 요청 중 오류 발생:", error);
    return "주소 변환 오류";
  }
};

export { getAddressFromCoords };
