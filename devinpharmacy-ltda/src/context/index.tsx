import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext();

function AppProvider({ children }) {
  const { value, setValue } = useLocalStorage("user", []);

  const logout = () => {
    setValue({});
  };

  return (
    <div>
      <AppContext.Provider value={{ value, setValue, logout }}>
        {children}
      </AppContext.Provider>
    </div>
  );
}

export { AppProvider, AppContext };
