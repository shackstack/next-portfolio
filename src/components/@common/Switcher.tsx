'use client';

import { ChangeEvent, useEffect, useLayoutEffect, useState } from 'react';

const Switcher = () => {
  const [theme, setTheme] = useState('');

  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      return;
    }

    setTheme('light');
  }, []);

  const onChangeDisplayModeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (value === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
    if (value === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
      setTheme('light');
    }
  };

  return (
    <select name='mode' onChange={onChangeDisplayModeHandler} value={theme}>
      <option value='dark'>dark</option>
      <option value='light'>light</option>
    </select>
  );
};

export default Switcher;
