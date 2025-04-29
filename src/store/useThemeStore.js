import { create } from 'zustand';

export const useThemeStore = create((set) => {
  // 사용자 OS 설정이 다크모드인지 확인
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return {
    theme: prefersDark ? 'dark' : 'light', // 다크모드 선호 시 'dark'로 초기화
    toggleTheme: () =>
      set((state) => ({
        theme: state.theme === 'light' ? 'dark' : 'light',
      })),
  };
});
