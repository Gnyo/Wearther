# Capstone Design 기획서

## 📌 프로젝트 개요

- **프로젝트명**: 🌤️ Wearther
- **목표**: 사용자의 현재 위치 날씨를 바탕으로 적절한 옷차림을 추천해주는 **웹 서비스** 개발
- **플랫폼**: Web (Vite React)
- **주요 기능**
  - 현재 위치의 날씨 정보 확인
  - 기온에 따른 옷차림 추천
  - 다크모드 / 라이트모드 전환 기능

---

## 🧩 핵심 기능 상세

| 기능명 | 설명 |
|--------|------|
| 위치 기반 날씨 조회 | 브라우저의 Geolocation API를 통해 사용자의 현재 위치를 받아오고, 해당 좌표로 날씨 정보 조회 |
| 기온별 옷차림 추천 | 기온 범위에 따라 알맞은 옷차림 추천 (예: 5℃ 이하 → 패딩, 목도리 등) |
| 반응형 웹 UI | 모바일/태블릿/데스크탑 화면에서 자연스럽게 동작하도록 반응형 디자인 적용 |
| 웹 배포 | Render를 이용해 무료 배포 및 접근 가능하게 구성 |

---

## 🗓️ 주간 일정 계획

| 기간 | 목표 | 세부 작업 |
|------|------|-----------|
| [**1주차**](https://github.com/Gnyo/wearther/blob/main/Capston_Design/1%EC%A3%BC%EC%B0%A8.md) (03.05 ~ 03.11) | 기획 및 기능 정의 | 웹 서비스 방향 설정, 유사 서비스 벤치마킹, 기술 스택 확정 |
| [**2주차**](https://github.com/Gnyo/wearther/blob/main/Capston_Design/2%EC%A3%BC%EC%B0%A8.md) (03.12 ~ 03.18) | 개발 환경 세팅 | React 프로젝트 생성, 날씨 API 테스트, Geolocation 연동  |
| [**3주차**](https://github.com/Gnyo/wearther/blob/main/Capston_Design/3%EC%A3%BC%EC%B0%A8.md) (03.19 ~ 03.25) | 와이어프레임 제작 | Figma 흐름도 제작, UI 구성 |
| [**4주차**](https://github.com/Gnyo/wearther/blob/main/Capston_Design/4%EC%A3%BC%EC%B0%A8.md) (03.26 ~ 04.01) | 프로토타입 제작 + API 수정 | Figma 시안 및 클릭 프로토타입 구성, 날씨 API 수정 및 테스트 |
| [**5주차**](https://github.com/Gnyo/wearther/blob/main/Capston_Design/5%EC%A3%BC%EC%B0%A8.md) (04.02 ~ 04.08) | 메인 기능 개발 | 위치 기반 날씨 조회 구현, 기온 범위별 의류 추천 조건 작성 및 코드 구현 |
| [**6주차**](https://github.com/Gnyo/wearther/blob/main/Capston_Design/6%EC%A3%BC%EC%B0%A8.md) (04.09 ~ 04.15) | 추가 기능 구현 | 카드 UI 작업, 테마 설정 |
| [**7주차**](https://github.com/Gnyo/wearther/blob/main/Capston_Design/7%EC%A3%BC%EC%B0%A8.md) (04.16 ~ 04.22) | 반응형 디자인 + 오류 처리 | 화면 크기 대응, 에러 핸들링, UX 디테일 다듬기 |
| [**8주차**](https://github.com/Gnyo/wearther/blob/main/Capston_Design/8%EC%A3%BC%EC%B0%A8.md) (04.23 ~ 04.29) | 최종 마무리 및 배포 | 웹 호스팅, favicon/SEO 설정, 사용 매뉴얼 작성 |

---

## 🔧 기술 스택

- **프론트엔드**: Vite React
- **날씨 API**: WeatherAPI
- **위치 API**: 브라우저 내장 `navigator.geolocation`(위·경도), KakaoAPI(지역명 변환)
- **디자인**: Figma
- **배포**: github, Render
- **버전 관리**: Git, GitHub

---

## 📎 추후 확장 아이디어

- 민감도 설정에 따른 커스터마이징 추천
- 일주일간 옷차림 미리보기 (날씨 예보 기반)
- 옷장 등록 후 내 옷 기반 추천
- 사용자별 저장소(localStorage, Firebase, supabase 등)
