import React, { useState, useEffect } from "react";
import "./theme.css"; // Import your CSS file

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    if (!storedTheme) {
      return true;
    } else {
      return storedTheme === "light";
    }
  });

  function toggle() {
    setTheme(!theme);
    localStorage.setItem("theme", theme ? "dark" : "light");
  }

  return (
    <div className={theme ? "light" : "dark"}>
      <p>{theme ? "Light theme" : "Dark theme"}</p>
      <button onClick={toggle}>Change theme</button>
    </div>
  );
};

export default Theme;
