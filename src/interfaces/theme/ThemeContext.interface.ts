import { Dispatch, SetStateAction } from "react";
import { DefaultTheme } from "styled-components/dist/types";

export type Theme = 'dark' | 'light';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export interface ThemeArguments extends DefaultTheme {
  rgbafondoanimado: string;
  body: string;
  text: string;
  bodyRgba: string;
  textRgba: string;
  carouselColor: string;
  fontxs: string;
  fontsm: string;
  fontmd: string;
  font16px: string;
  fontlg: string;
  fontxl: string;
  fontxxl: string;
  fontxxxl: string;
  fontButton: string;
  navHeight: string;
  whiteBg: string;
  bg: string;
  bgAlpha: string;
  bg2: string;
  bg3: string;
  primary: string;
  bg4: string;
  bg5: string;
  bgtotal: string;
  bgtgderecha: string;
  colorToggle: string;
  translateToggle: string;
  logorotate: string;
  slideroffset: string;
  sizeoficon: string;
  colorSubtitle: string;
  colorScroll: string;
  bgcards: string;
  colortitlecard: string;
  colorsubtitlecard: string;
}

