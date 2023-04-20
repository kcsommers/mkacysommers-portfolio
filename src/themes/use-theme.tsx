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

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentTheme, setCurrentTheme] = useState<THEME_NAME>('LIGHT');

  useEffect(() => {
    setTheme(currentTheme);
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
