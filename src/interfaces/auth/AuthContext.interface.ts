import { User } from "@supabase/supabase-js";
import { ReactNode } from "react";

export interface AuthContextInterface {
  user: User | null;
}

export interface AuthProviderProps {
  children: ReactNode;
}