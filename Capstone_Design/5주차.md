# Capstone Design 05

## 🎛️ 환경 세팅
### 라우터
`react-router-dom`

### 상태 관리
`zustand`: React에서 전역 상태를 쉽게 관리하는 간단한 도구
- React에서 여러 컴포넌트가 공통으로 데이터를 공유해야 할 때 사용
  + 다크/라이트 테마 상태
  + 사용자의 위치 정보

---
## 📁 프로젝트 페이지 구조
### /start (로딩 페이지)
- 기능: 로고가 천천히 페이드인하면서 앱 초기화.
- 내용: 사용자가 앱을 시작할 때 보게 되는 첫 화면.

### /loading (위치 정보 확인)
- 기능: 위치 권한 요청 및 위치 정보 로딩.
- 내용: navigator.geolocation.getCurrentPosition()을 통해 위치 정보를 확인하고, 위치 정보가 정상적으로 로드되면 /home 페이지로 이동하고, 실패하면 /search 페이지로 이동.

### /search (위치 수동 입력)
- 기능: 위치를 수동으로 검색하여 날씨 정보 로드.
- 내용: 위치를 수동으로 입력하고 해당 위치의 날씨 정보를 보여주는 화면.

### /home (날씨 정보 페이지)
- 기능: 현재 위치의 날씨 정보와 기온에 맞는 옷차림을 추천.
- 내용: 상단에 Header (위치 정보 버튼 및 설정 버튼), 날씨 요약 정보 표시, 하단 Footer(home 버튼, outfit 버튼).

### /outfit (옷차림 추천 페이지)
- 기능: 현재 기온에 맞는 옷차림을 추천.
- 내용: 상단에 Header (위치 정보 버튼 및 설정 버튼), 기온에 맞는 옷차림 표시, 하단 Footer(home 버튼, outfit 버튼).

### /setting (설정 페이지)
기능: 다크 모드 및 기타 설정을 변경.
내용: 다크 모드를 전환하는 기능 제공.

---
## 🖥️ 프로그래밍
### 메인 기능 구현
| 상단 탭 | 하단 탭 |
|---------|---------|
| ![image](https://github.com/user-attachments/assets/74345a43-e850-4814-b02d-03a942c93898) | ![image](https://github.com/user-attachments/assets/db8dd322-f5e4-428d-822d-7188135c9a0b) |
| 위치 정보 및 버튼, 설정 버튼 | HOME 버튼, OUTFIT 버튼 |

| HOME | OUTFIT |
|------|--------|
| ![image](https://github.com/user-attachments/assets/899fd66d-3b5c-4d09-9583-bb38f0cf00d7) | ![image](https://github.com/user-attachments/assets/e076f60b-82e5-47ed-b945-bfe3c4bf4e15) |
| 현재 날씨 + 시간별 날씨 + 주간 날씨 | 기온별 의류 추천 |
