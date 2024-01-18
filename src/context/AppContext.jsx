import { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [screen, setScreen] = useState(0);
  const screenArray = [];
  const test = "deneme";

  const buttonValues = [
    ["C", "DEL", "+/-", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ",", "="],
  ];
  // need fix
  const handleClick = (e) => {
    e.preventDefault();
    const enteredNumber = e.target.innerHTML;
    setScreen([...screenArray, enteredNumber]);
    console.log(screenArray);
  };

  const handleChange = (e) => {};

  const value = {
    test,
    buttonValues,
    handleClick,
    screen,
    setScreen,
    handleChange,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};