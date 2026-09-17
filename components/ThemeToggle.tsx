// Clicking the button uses browser-only APIs such as localStorage.
"use client";

import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  function toggleTheme() {
    // dataset.theme reads the data-theme attribute on the <html> element.
    const currentTheme = document.documentElement.dataset.theme;
    // This ternary means: if currently dark, choose light; otherwise choose dark.
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    // CSS selectors in globals.css immediately apply the selected palette.
    document.documentElement.dataset.theme = nextTheme;

    // The toggle still works when browser storage is unavailable.
    try {
      // Remember this choice after refreshing or visiting another page.
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
      {/* CSS shows one icon at a time. The button label describes it to screen readers. */}
      <FiSun className="theme-sun text-lg" aria-hidden="true" />
      <FiMoon className="theme-moon text-lg" aria-hidden="true" />
    </button>
  );
}
