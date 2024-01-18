import "./screen.css";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Screen = () => {
  const { handleChange, screen } = useContext(AppContext);

  return (
    <div onChange={handleChange} className="screen">
      {screen}
    </div>
  );
};

export default Screen;
