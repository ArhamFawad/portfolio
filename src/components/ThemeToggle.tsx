'use client';

import { Moon, Sun } from 'lucide-react';

/**
 * Toggles the `.dark` class on <html> and remembers the choice.
 * Both icons are rendered and CSS shows the right one, so server and client HTML always match.
 */
export function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // Private browsing can block storage; the toggle still works for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex size-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-subtle hover:text-fg"
    >
      <Moon className="size-4 dark:hidden" aria-hidden="true" />
      <Sun className="hidden size-4 dark:block" aria-hidden="true" />
    </button>
  );
}
