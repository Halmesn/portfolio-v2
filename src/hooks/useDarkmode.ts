import { useEffect, useState } from 'react';

import { ThemeState } from 'types';

export const useDarkMode = (): [ThemeState, () => void] => {
  const [theme, setTheme] = useState<ThemeState>(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      return localTheme as ThemeState;
    }
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    return prefersDarkMode ? 'dark' : 'light';
  });

  const setMode = (mode: ThemeState) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme as ThemeState);
    } else {
      const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      setTheme(prefersDarkMode ? 'dark' : 'light');
      setMode(prefersDarkMode ? 'dark' : 'light');
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localTheme) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return [theme, themeToggler];
};
