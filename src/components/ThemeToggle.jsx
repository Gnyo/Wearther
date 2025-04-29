import { useThemeStore } from '../store/useThemeStore';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="theme-toggle-container">
      <div className="theme-options">
        <label className={`theme-option ${theme === 'light' ? 'active' : ''}`}>
          라이트 모드
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === 'light'}
            onChange={toggleTheme}
          />
        </label>
        <label className={`theme-option ${theme === 'dark' ? 'active' : ''}`}>
          다크 모드
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === 'dark'}
            onChange={toggleTheme}
          />
        </label>
      </div>
    </div>
  );
}
