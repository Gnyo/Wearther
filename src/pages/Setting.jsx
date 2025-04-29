import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import ThemeToggle from '../components/ThemeToggle';
import Card from '../components/Card';
import './Setting.css';

export default function Setting() {
  const navigate = useNavigate();

  return (
    <div className="setting-container">
      <button 
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        <IoIosArrowBack size={19} />
      </button>

      <div className="setting-options">
        <Card text="테마 변경">
          <ThemeToggle />
        </Card>
      </div>
    </div>
  );
}
