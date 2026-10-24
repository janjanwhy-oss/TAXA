import React, { createContext, useContext, useState, useEffect } from 'react';

export type TaxaTheme = 'blue' | 'green';

interface ThemeContextType {
  theme: TaxaTheme;
  setTheme: (theme: TaxaTheme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'blue',
  setTheme: () => {},
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Restored original green theme
  const [theme, setThemeState] = useState<TaxaTheme>(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('taxa_theme_preference', 'green');
    }
    return 'green';
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', 'green');
      localStorage.setItem('taxa_theme_preference', 'green');
    }
  }, [theme]);

  const setTheme = (newTheme: TaxaTheme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'blue' ? 'green' : 'blue'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
