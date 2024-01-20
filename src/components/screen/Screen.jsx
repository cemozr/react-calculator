import "./screen.css";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Screen = () => {
  const { screen } = useContext(AppContext);

  return (
    <div className="screen">
      <p> {screen.enteredNum ? screen.enteredNum : screen.res} </p>
    </div>
  );
};

export default Screen;
