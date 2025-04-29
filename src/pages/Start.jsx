// src/pages/Start.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/Logo_Sun.svg';
import './Start.css';

export default function Start() {
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);

    const timer = setTimeout(() => {
      navigate('/home');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="start-container">
      <img src={logo} alt="앱 로고" className={`logo ${fadeIn ? 'fade-in' : ''}`} />
    </div>
  );
}
