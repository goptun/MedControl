import { createContext, useEffect, useState } from "react";
import { ContextProps, ReactProps } from "./interfaces";
import { useLocalStorage } from "../../hooks/useLocalStorage";
const AppContext = createContext<ContextProps>({} as ContextProps);

function AppProvider({ children }: ReactProps) {
  const { value, setValue } = useLocalStorage("users", "{}");
  const [user, setUser] = useState({});
  useEffect(() => {
    if (value) {
      setUser(value);
    }
  }, [setUser, value]);

  const logout = () => {
    setValue("{}");
  };
  return (
    <AppContext.Provider value={{ value, setValue, user, logout }}>
      {children}
    </AppContext.Provider>
  );
}
export { AppProvider, AppContext };
