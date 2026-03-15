'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-14 h-8 flex items-center rounded-full p-1 bg-gray-300 dark:bg-sky-300 transition-colors"
      aria-label="Toggle Theme"
    >
      {/* Sliding icon */}
      <span
        className={`absolute left-1 w-6 h-3 flex items-center justify-center text-sm transition-transform duration-300 ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  );
}
