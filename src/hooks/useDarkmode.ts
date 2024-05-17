import { useEffect, useState } from 'react';

import { ThemeState } from 'types';

export const useDarkMode = (): [ThemeState, () => void] => {
  const [theme, setTheme] = useState<ThemeState>('light');

  const setMode = (mode: ThemeState) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme as ThemeState);
  }, []);

  return [theme, themeToggler];
};
