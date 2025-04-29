import { useNavigate } from 'react-router-dom';
import { IoMdPin } from 'react-icons/io'; // 위치 아이콘
import { IoIosSettings } from 'react-icons/io'; // 설정 아이콘
import './Header.css'; // CSS 파일 import

export default function Header({ location }) {
  const navigate = useNavigate();

  return (
    <div className="weather-header">
      <span className="weather-location" >
        <IoMdPin style={{ fontSize: '1.5rem' }} />
        {location}
      </span>
      
      {/* 설정 클릭 시 Setting 페이지로 이동 */}
      <button className="settings-btn" onClick={() => navigate('/setting')}>
        <IoIosSettings style={{ fontSize: '1.5rem' }} />
      </button>
    </div>
  );
}
