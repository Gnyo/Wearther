import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

// 모든 도메인 허용 (개발 환경에서만 사용)
app.use(cors());

// 특정 도메인만 허용 (필요 시 사용)
app.use(cors({ origin: "http://localhost:5173" }));

const KAKAO_API_KEY = process.env.KAKAO_REST_API_KEY;

// 좌표를 주소로 변환하는 API
app.get("/api/address", async (req, res) => {
  const { lat, lon } = req.query;

  try {
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}`,
      {
        headers: {
          Authorization: `KakaoAK ${KAKAO_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "카카오 API 요청 실패" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("❌ 서버에서 Kakao API 호출 오류:", error);
    res.status(500).json({ error: "카카오 API 요청 실패" });
  }
});

// 키워드 검색 API
app.get("/api/search", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "검색어를 입력해주세요." });
  }

  try {
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(query)}`,
      {
        headers: {
          Authorization: `KakaoAK ${KAKAO_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "카카오 API 요청 실패" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("❌ 서버에서 Kakao API 호출 오류:", error);
    res.status(500).json({ error: "카카오 API 요청 실패" });
  }
});

app.listen(4000, () => {
  console.log("🌐 Proxy server running on http://localhost:4000");
});