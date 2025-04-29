import { useEffect } from 'react';
import { useThemeStore } from './store/useThemeStore';
import AppRoutes from './routes'; // 라우팅 정의
import './App.css';

export default function App() {
  const { theme } = useThemeStore();

  // 테마 적용
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <AppRoutes />;
}
