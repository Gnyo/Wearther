import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// 기본 설정
dotenv.config();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CORS 설정
app.use(cors());
app.use(cors({ origin: "http://localhost:5173" })); // 개발용 (필요하면 제거 가능)

// 정적 파일 서빙 (React build 결과)
app.use(express.static(path.join(__dirname, "dist")));

// 카카오 API 키
const KAKAO_API_KEY = process.env.KAKAO_REST_API_KEY;

// 좌표 → 주소 API
app.get("/api/address", async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}`,
      {
        headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
      }
    );
    if (!response.ok) return res.status(response.status).json({ error: "카카오 API 요청 실패" });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("❌ Kakao API 오류:", error);
    res.status(500).json({ error: "카카오 API 요청 실패" });
  }
});

// 키워드 검색 API
app.get("/api/search", async (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ error: "검색어를 입력해주세요." });
  try {
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(query)}`,
      {
        headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
      }
    );
    if (!response.ok) return res.status(response.status).json({ error: "카카오 API 요청 실패" });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("❌ Kakao API 오류:", error);
    res.status(500).json({ error: "카카오 API 요청 실패" });
  }
});

// 리액트 SPA 라우팅 대응
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// 포트 설정 (Render용)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🌐 Proxy server running on http://localhost:${PORT}`);
});
