import { useEffect } from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') document.documentElement.classList.add('dark');
  }, []);

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      <span className="dark:hidden">🌞</span>
      <span className="hidden dark:inline">🌙</span>
    </button>
  );
};

export default ThemeToggle;
