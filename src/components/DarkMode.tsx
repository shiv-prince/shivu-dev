import  {useEffect ,  useState } from 'react'

const DarkMode = () => {
//   const defaultState = localStorage.getItem('theme') || 'light';
const [theme, setTheme] = useState("light");

// Update Theme Using useEffect
useEffect(() => {
 // Triggered every time theme changes ([theme] dependency). Saves the theme to localStorage so it persists across page reloads.
 localStorage.setItem('theme', theme);
 // Toggles the dark class on <html>, allowing Tailwind to apply dark mode styles.
 document.documentElement.classList.toggle('dark', theme === 'dark');
}, [theme]);

// Handle Button Click to Toggle Theme
const handleButton = () => {
 // Switches the theme:
 setTheme(theme == 'light' ? 'dark' : 'light');
}

return (
<div className="z-[9999] ">
  <button
    onClick={handleButton}
    className={`
      relative inline-flex h-5 w-8 items-center rounded-full transition
      ${theme === "dark" ? "bg-darkmode" : "bg-gray-200"}
    `}
  >
    <span
      className={`
        inline-block h-2.5 px-1 w-2.5 transform rounded-full bg-white shadow-lg transition
        ${theme === "dark" ? "translate-x-4" : "translate-x-1"}
      `}
    />
  </button>

  {/* <span className="ml-3 text-sm font-medium dark:text-white">
    {theme === "light" ? "Dark Mode" : "Light Mode"}
  </span> */}
</div>

);
}

export default DarkMode