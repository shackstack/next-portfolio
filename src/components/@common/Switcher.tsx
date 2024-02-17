'use client';

import {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useState,
} from 'react';

import Sun from '@/assets/icons/sun.svg';
import Moon from '@/assets/icons/moon.svg';

const Switcher = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useInsertionEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
      return;
    }

    setIsDarkMode(false);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    if (!isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  }, [isDarkMode]);

  const onClickDisplayModeHandler = (e: MouseEvent) => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button onClick={onClickDisplayModeHandler}>
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default Switcher;
