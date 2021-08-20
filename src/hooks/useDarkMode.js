import { useState } from "react";

const useDarkMode = () => {
  //state para alamacenar el theme
  const [theme, setTheme] = useState("light");

  //cambiar de theme
  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };

  return [theme, themeToggler];
};

export default useDarkMode;
