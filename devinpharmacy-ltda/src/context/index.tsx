import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext();

function AppProvider({ children }) {
  const { value, setValue } = useLocalStorage("user", []);
  return (
    <div>
      <AppContext.Provider value={{ value, setValue }}>
        {children}
      </AppContext.Provider>
    </div>
  );
}

export { AppProvider, AppContext };
