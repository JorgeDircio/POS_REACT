import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AuthProviderProps, Light, Dark } from '..';
import { Theme, ThemeArguments, ThemeContextProps } from "../interfaces/theme/ThemeContext.interface";

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [useTheme, setTheme] = useState<Theme>('dark');
  const theme = useTheme === 'light' ? 'light' : 'dark';
  const themeStyle:ThemeArguments = theme === 'light' ? Light : Dark;

  const contextValue: ThemeContextProps = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={themeStyle}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
