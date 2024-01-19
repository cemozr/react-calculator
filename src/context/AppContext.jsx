import { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [screen, setScreen] = useState([]);
  const test = "deneme";
  let enteredNumber;

  const signs = ["C", "DEL", "+/-", "="];
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
    enteredNumber = e.target.innerHTML;
    [...screen, enteredNumber].filter((s) => {
      signs.includes(s)
        ? setScreen([screen])
        : setScreen([...screen, enteredNumber]);
    });
    // enteredNumber !=
    // ? setScreen([...screen, enteredNumber])
    // : setScreen([screen]);
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
