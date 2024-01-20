import { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [screen, setScreen] = useState({
    sign: "",
    enteredNum: 0,
    res: 0,
  });

  const value = {
    screen,
    setScreen,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
