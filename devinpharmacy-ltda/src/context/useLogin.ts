import { useContext } from "react";
import { AppContext } from "../context/dadosLogin";

function useLogin() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("A aplicação não está dentro do AppProvider");
  }

  return context;
}

export { useLogin };
