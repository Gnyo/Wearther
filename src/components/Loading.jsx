import logo from '../assets/images/Logo_Sun.svg';
import './Loading.css';

function Loading() {
  return (
    <div className="loading-container">
      <img src={logo} alt="앱 로고" className="logo" />
      <p className="loading-text">날씨 정보를 불러오는 중...</p>
    </div>
  );
}

export default Loading;