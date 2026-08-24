import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem("darkMode");
      if (stored !== null) return JSON.parse(stored);
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    } catch {
      console.error("localstorage error");
    }
  }, [darkMode]);
  return (
    <div>
      <div className="flex justify-between items-center h-16 p-4 border-b">
        <h2 className="text-4xl font-bold ">CHITRAM</h2>
        <nav className="flex gap-4">
          <NavLink to="/" className="text-lg font-bold text-yellow-600">
            Movies
          </NavLink>
          <NavLink to="/series" className="text-lg font-bold text-yellow-600">
            Tv Series
          </NavLink>
        </nav>
        <div className="flex">
          <div>
            <input type="text" className="border" />
            <button aria-label="search button">🔍</button>
          </div>
          <div>
            <button
              aria-label="toggle button"
              onClick={() => setDarkMode((prev) => !prev)}
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
