import { DARK_THEME } from './dark-theme';
import { LIGHT_THEME } from './light-theme';

export type THEME_NAME = 'LIGHT' | 'DARK';

export type Theme = {
  primary: [number, number, number];
  secondary: [number, number, number];
  foreground: [number, number, number];
  background: [number, number, number];
};

export const getTheme = (themeName: THEME_NAME): Theme => {
  const themeMap = {
    LIGHT: LIGHT_THEME,
    DARK: DARK_THEME,
  };

  return themeMap[themeName];
};
