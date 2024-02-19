"use client";
import { useTheme } from "next-themes";
import Sun from "@/assets/icons/sun.svg";
import Moon from "@/assets/icons/moon.svg";

const Switcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const onClickDisplayModeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={onClickDisplayModeHandler}
      className="fixed bottom-12 right-12 rounded-full border-2 border-black p-4 dark:border-white"
    >
      {currentTheme === "dark" ? <Sun /> : <Moon />}
      <div className="hidden">{currentTheme}</div>
    </button>
  );
};

export default Switcher;
