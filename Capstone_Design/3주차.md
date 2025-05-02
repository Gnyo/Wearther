# Capstone Design 03

## 🎨 디자인 방향성

- 📱 **스마트폰 중심 UI**: 사용자는 빠르게 정보를 확인하고 싶어함
- 🪧 **디자인 제작 전 고려 요소**

| 요소 | 디자인 |
|---|---|
| 화면 크기 | 모바일 기준 (갤럭시 S25 기준 384x844) |
| 네비게이션 | 상단 아이콘 버튼 또는 하단 탭 |
| 버튼 스타일 | 터치하기 쉬운 크기, 원형/둥근 직사각형 |
| 페이지 전환 | SPA 방식, 슬라이드/페이드인 |
| 옷차림 카드 | 날씨·기온별 외투, 상의, 하의, 신발 추천 |

---

## 🗂️ 앱 흐름도 (Flowchart)
### [👉 Mermaid Live Editor에서 보기](https://www.mermaidchart.com/app/projects/aa93f360-7b5e-45d0-af7f-864e0c160773/diagrams/5c838077-041d-47ab-8e6e-f328b3e7c4ca/version/v0.1/edit)

```mermaid
flowchart TD
    A["앱 진입"] --> B{"위치 권한 요청"}
    B -- 거부 --> D["안내 메시지 + 수동 입력"]
    D --> E["홈 화면"]
    B -- 허용 --> C["위치 기반 날씨 조회"]
    C --> M["로딩/오류 처리"]
    M --> N["로딩 애니메이션"]
    M --> O{"위치 조회 성공?"}
    O -- 예 --> E
    O -- 아니오 --> P["위치 실패 팝업"]
    P --> Q["다시 시도"]
    P --> R["수동 위치 입력 화면"]
    R --> S["입력 완료"]
    S --> E
    E --> F["날씨 표시"] & G["옷차림 추천"] & H["설정 버튼"]
    H --> I["설정 화면"]
    I --> J["테마 변경"] & L["뒤로 가기"]
```

#### 1. 앱 진입 & 위치 권한 처리
<table>
  <tr> <th colspan="2">앱 실행 시 <b>위치 권한 요청</b></th>                   </tr>
  <tr> <td>📍 허용 시</td>                <td>❌ 거부 시</td>                </tr>
  <tr> <td>위치 기반 날씨 조회 진행</td>   <td>안내 메시지 + 수동 입력 UI</td> </tr>
  <tr> <td>    </td>                      <td>사용자가 직접 위치 입력 후 → 홈 화면으로 진입</td> </tr>
</table>

#### 2. 위치 기반 날씨 조회 & 로딩 처리
<table>
    <tr> <th colspan="2">위치 기반 날씨 데이터 조회(날씨 API 요청 중에는 로딩 애니메이션 표시)</th> </tr>
    <tr> <td rowspan="2">위치 조회 실패 시:</br>❗위치 실패 팝업 노출</td>  <td>🔁 다시 시도</td> </tr>
    <tr>                                <td>📝 수동 위치 입력 화면 → 입력 완료 시 홈으로 이동</td> </tr>
</table>

#### 3. 홈 화면
<table>
    <tr> <th colspan="2">사용자 위치에 맞는 정보 표시:</th></tr>
    <tr> <td>🧭 날씨 표시</td>           <td>지역명 / 기온 / 날씨 상태 등</td>                </tr>
    <tr> <td>👕 추천 옷차림</td>         <td>기온·날씨에 따라 의상 이미지 or 텍스트 제안</td>  </tr>
    <tr> <td>⚙️ 설정 버튼</td>           <td>→ 설정 화면으로 이동</td>                        </tr>
</table>

#### 4. 설정 화면
<table>
    <tr> <th>⬅️ 뒤로 가기</th>      <th colspan="2">🌙 테마 선택</th> </tr>    
    <tr> <td>← 홈 화면으로 복귀</td> <td>💡LIGHT</td> <td>🌙Dark</td> </tr>
</table>

---
## 🔲 와이어프레임
### 디자인 툴
> Figma

[**Wearther 와이어프레임**](https://www.figma.com/design/Gq3DtzbkcW46vgP00so4ty/Wearther?node-id=0-1&t=F8YgRSC04C4B215K-1)
---|
![Wearther](https://github.com/user-attachments/assets/2dac1fa2-d3db-47af-9d62-15db46358923) |

---
## 🤔 API 피드백

### OpenWeatherMap (무료 버전) - 현재 사용 중인 
- 5일 간의 3시간 간격 예보(Hourly forecast)는 기본 제공되는 무료 API
- 1시간 단위의 예보는 유료 API에서만 제공되므로 무료 버전에서는 3시간 단위로 사용 가능
- 주간 예보는 무료 API에서 제공되는 기능이기 때문에 주간 날씨는 무료로 가능

### 2. WeatherAPI (무료)
- 기능: 1시간 단위 시간별 예보 제공, 7일 주간 예보
- 무료 사용 한도: 1시간 단위 예보 포함, 7일 예보 제공
- 제공 데이터: 시간별 예보, 주간 예보, 기온, 날씨 상태, 습도 등
- 사용법: 기본 무료 티어에서 사용 가능

### 3. Weatherstack (무료)
- 기능: 1시간 단위 시간별 예보 제공, 7일 주간 예보
- 무료 사용 한도: 1시간 단위 예보와 7일 예보
- 제공 데이터: 기온, 날씨 상태, 바람 속도 등

> [!Warning]
> 현재 OpenWeatherMap API를 연동해뒀으나 무료 버전 기능이 생각해둔 기능과 맞지 않음 </br>
> 따라서 **API 변경 필요**
