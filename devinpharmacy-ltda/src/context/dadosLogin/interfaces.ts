import { ReactNode } from "react";
import { UsersProps } from "../../pages/home/interfaces";
export interface ReactProps {
  children: ReactNode;
}
export interface ContextProps {
  value: UsersProps | null;
  setValue: (value: string) => void;
  user: {
    email?: string;
    password?: string;
  };
  logout: () => void;
}
