import "./button.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Button = ({ value }) => {
  const { handleClick } = useContext(AppContext);

  const getStyleName = (optBtn) => {
    const className = {
      "=": "equals",
      "+": "operator",
      "-": "operator",
      "/": "operator",
      "x": "operator",
      "C": "operator",
      "DEL": "operator",
      "+/-": "operator",
    };
    return className[optBtn];
  };
  const { test } = useContext(AppContext);
  console.log(test);
  return (
    <button onClick={handleClick} className={`${getStyleName(value)} button`}>
      {value}
    </button>
  );
};
export default Button;
