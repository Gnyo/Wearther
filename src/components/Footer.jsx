import { useNavigate, useLocation } from 'react-router-dom';
import { PiHouse, PiHouseFill, PiCoatHanger, PiCoatHangerBold } from 'react-icons/pi';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 경로 확인
  const isHome = location.pathname === '/home';
  const isOutfit = location.pathname === '/outfit';

  return (
    <div className="footer-container">
      {/* 홈 버튼 */}
      <button 
        className={`footer-btn ${isHome ? 'active' : ''}`} 
        onClick={() => navigate('/home')}
      >
        {isHome ? (
          <PiHouseFill className="footer-icon" />
        ) : (
          <>
            <PiHouse className="footer-icon" />
            <PiHouseFill className="footer-icon-hover" />
          </>
        )}
      </button>

      {/* 옷차림 버튼 */}
      <button 
        className={`footer-btn ${isOutfit ? 'active' : ''}`} 
        onClick={() => navigate('/outfit')}
      >
        {isOutfit ? (
          <PiCoatHangerBold className="footer-icon" />
        ) : (
          <>
            <PiCoatHanger className="footer-icon" />
            <PiCoatHangerBold className="footer-icon-hover" />
          </>
        )}
      </button>
    </div>
  );
}
