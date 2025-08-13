import { useEffect, useState } from "react";

const GridPathWithMotion: React.FC = () => {
  // Get saved theme or default to system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Listen for theme changes (in case user toggles with DarkMode component)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains("dark")
          ? "dark"
          : "light"
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Style definitions for light and dark
  const gridStyle =
    theme === "light"
      ? {
          backgroundImage: `
            linear-gradient(to right, oklch(86.9% 0.002 56.366) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(86.9% 0.002 56.366) 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }
      : {
          backgroundImage: `
            linear-gradient(to right, oklch(37% 0.013 285.805) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(37% 0.013 285.805) 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        };

  return (
    <div className="min-h-screen w-full absolute top-0 left-0 z-0">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0" style={gridStyle} />

      {/* Motion SVG overlay (future use) */}
    </div>
  );
};

export default GridPathWithMotion;
