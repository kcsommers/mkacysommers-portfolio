import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { THEME_NAME, getTheme } from './themes';

type ThemeContext = {
  setCurrentTheme: Dispatch<SetStateAction<THEME_NAME>>;
  currentTheme: THEME_NAME;
};

const THEME_CONTEXT = createContext({} as ThemeContext);

const setTheme = (themeName: THEME_NAME) => {
  const root = document.querySelector(':root') as HTMLElement;
  const theme = getTheme(themeName);
  Object.keys(theme).forEach((key) => {
    // @ts-ignore
    root.style.setProperty(`--color-${key}`, theme[key].join(' '));
  });
};

const THEME_STORAGE_KEY = '__kc__theme___';

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentTheme, setCurrentTheme] = useState<THEME_NAME>(() => {
    if (typeof localStorage === 'undefined') {
      return '' as THEME_NAME;
    }

    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'DARK'
      : 'LIGHT';

    const themeFromStorage = localStorage.getItem(THEME_STORAGE_KEY);
    return (themeFromStorage || systemTheme) as THEME_NAME;
  });

  useEffect(() => {
    setTheme(currentTheme);

    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'DARK'
      : 'LIGHT';

    if (systemTheme !== currentTheme) {
      localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
    } else {
      localStorage.removeItem(THEME_STORAGE_KEY);
    }
  }, [currentTheme]);

  const memoizedValue = useMemo(
    () => ({
      currentTheme,
      setCurrentTheme,
    }),
    [currentTheme]
  );

  return (
    <THEME_CONTEXT.Provider value={memoizedValue}>
      {children}
    </THEME_CONTEXT.Provider>
  );
};

export const useTheme = (): ThemeContext => {
  const context: ThemeContext = useContext(THEME_CONTEXT);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
