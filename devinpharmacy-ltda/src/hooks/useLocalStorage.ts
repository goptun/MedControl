import { useState } from "react";

const useLocalStorage = (key: string, initialValue: string) => {
  const result = localStorage.getItem(key);

  const initial = result ? JSON.parse(result) : initialValue;

  const [value, setValue] = useState(initial);

  const updateValue = (newValue: string) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return {
    value,
    setValue: updateValue,
  };
};

export { useLocalStorage };
