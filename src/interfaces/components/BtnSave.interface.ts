import { ReactNode } from "react";

export interface BtnSaveProps {
  onClick?: () => void;
  title: string;
  bgcolor?: string;
  icon?: ReactNode;
  url?: string;
}