"use client";

import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;

    // The toggle still works when browser storage is unavailable.
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // Keep the selection for this page visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-accent transition-colors hover:bg-surface"
    >
      <FiSun className="theme-sun text-lg" aria-hidden="true" />
      <FiMoon className="theme-moon text-lg" aria-hidden="true" />
    </button>
  );
}
