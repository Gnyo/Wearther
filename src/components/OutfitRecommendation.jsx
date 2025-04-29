import Card from './Card'; // Card 컴포넌트 import
import './OutfitRecommendation.css'; // 별도의 CSS 파일 import

export default function OutfitRecommendation({ temp, isRainy, isSnowy }) {
  const getRecommendation = (temp) => {
    let etc = "";

    if (temp >= 28) {
      return {
        outer: "",
        top: "민소매|반팔 티셔츠",
        bottom: "반바지(핫팬츠)|짧은 치마",
        etc: "민소매 원피스|린넨 재질 옷",
      };
    } else if (temp >= 23 && temp < 28) {
      return {
        outer: "",
        top: "반팔 티셔츠|얇은 셔츠|얇은 긴팔 티셔츠",
        bottom: "반바지|면바지",
        etc: "",
      };
    } else if (temp >= 20 && temp < 23) {
      return {
        outer: "얇은 가디건",
        top: "긴팔 티셔츠|셔츠|블라우스|얇은 후드티",
        bottom: "면바지|슬랙스|7부 바지|청바지",
        etc: "",
      };
    } else if (temp >= 17 && temp < 20) {
      return {
        outer: "얇은 니트|얇은 가디건|얇은 재킷|바람막이",
        top: "후드티|맨투맨|긴팔 티셔츠",
        bottom: "긴바지|청바지|슬랙스|스키니진",
        etc: "",
      };
    } else if (temp >= 12 && temp < 17) {
      return {
        outer: "재킷|가디건|야상",
        top: "맨투맨|셔츠|기모 후드티",
        bottom: "청바지|면바지",
        etc: "스타킹|니트",
      };
    } else if (temp >= 9 && temp < 12) {
      return {
        outer: "재킷|야상|점퍼|트렌치 코트",
        top: "니트",
        bottom: "청바지|면바지|검은색 스타킹|기모 바지|레이어드",
        etc: "",
      };
    } else if (temp >= 5 && temp < 9) {
      return {
        outer: "(울)코트|가죽 재킷",
        top: "목폴라 티|기모 맨투맨|기모 후드티|니트",
        bottom: "레깅스|청바지|두꺼운 바지|기모 바지",
        etc: "내복|스카프|플리스",
      };
    } else {
      return {
        outer: "패딩|두꺼운 코트",
        top: "목폴라 티|두꺼운 니트|기모 후드티|기모 맨투맨",
        bottom: "기모 바지",
        etc: "내복|누빔|목도리|장갑|방한용품",
      };
    }
  };

  const { outer, top, bottom, etc } = getRecommendation(temp);

  // 비나 눈이 오는 경우 "우산" 추가
  let additionalEtc = "";
  if (isRainy || isSnowy) {
    additionalEtc += "우산☂️";
  }

  const formatText = (text) => {
    return text.split('|').map((item, index) => (
      <span key={index}>
        {item}
        {index < text.split('|').length - 1 && <span className="separator"> | </span>}
      </span>
    ));
  };

  return (
    <>
      {outer && (
        <Card text="외투🧥">
          <p className="recommendation-text">{formatText(outer)}</p>
        </Card>
      )}
      {top && (
        <Card text="상의👕">
          <p className="recommendation-text">{formatText(top)}</p>
        </Card>
      )}
      {bottom && (
        <Card text="하의👖">
          <p className="recommendation-text">{formatText(bottom)}</p>
        </Card>
      )}
      {(etc) && (
        <Card text="복합/기타">
          <p className="recommendation-text">{formatText(`${etc}${etc && additionalEtc ? "|" : ""}${additionalEtc}`)}</p>
        </Card>
      )}
      {(additionalEtc) && (
        <Card text="챙길 것">
          <p className="recommendation-text">{formatText(`${etc}${etc && additionalEtc ? "|" : ""}${additionalEtc}`)}</p>
        </Card>
      )}
    </>
  );
}
