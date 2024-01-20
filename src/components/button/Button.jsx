import "./button.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Button = ({ value }) => {
  const { screen, setScreen } = useContext(AppContext);

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

  const handleClick = () => {
    const clickCases = {
      ".": dotClick,
      "C": clearClick,
      "DEL": delClick,
      "/": operatorClick,
      "x": operatorClick,
      "-": operatorClick,
      "+": operatorClick,
      "+/-": reverseClick,
      "=": equalsClick,
    };

    if (clickCases[value]) {
      return clickCases[value]();
    } else {
      return numberClick();
    }
  };

  const dotClick = () => {
    setScreen({
      ...screen,
      enteredNum: !screen.enteredNum.toString().includes(".")
        ? screen.enteredNum + value
        : screen.enteredNum,
    });
  };

  const clearClick = () => {
    setScreen({
      ...screen,
      sign: "",
      enteredNum: 0,
      res: 0,
    });
  };
  const delClick = () => {
    setScreen({
      ...screen,
      enteredNum: screen.enteredNum
        ? screen.enteredNum.slice(0, -1)
        : screen.enteredNum,
    });
  };

  const numberClick = () => {
    const numberString = value.toString();
    let newNumber;
    if (numberString === "0" && screen.enteredNum === 0) {
      newNumber = "0";
    } else {
      newNumber = Number(screen.enteredNum + numberString);
    }

    setScreen({
      ...screen,
      enteredNum: newNumber,
    });
  };

  const operatorClick = () => {
    setScreen({
      sign: value,
      res: !screen.res && screen.enteredNum ? screen.enteredNum : screen.res,
      enteredNum: 0,
    });
  };
  const reverseClick = () => {
    setScreen({
      sign: "",
      res: screen.res ? screen.res * -1 : 0,
      enteredNum: screen.enteredNum ? screen.enteredNum * -1 : 0,
    });
  };
  const equalsClick = () => {
    if (screen.res && screen.enteredNum) {
      const calculation = (a, b, sign) => {
        const results = {
          "+": (a, b) => a + b,
          "-": (a, b) => a - b,
          "x": (a, b) => a * b,
          "/": (a, b) => a / b,
        };
        return results[sign](a, b);
      };
      setScreen({
        res: calculation(screen.res, screen.enteredNum, screen.sign),
        sign: "",
        enteredNum: 0,
      });
    }
  };
  return (
    <button onClick={handleClick} className={`${getStyleName(value)} button`}>
      {value}
    </button>
  );
};
export default Button;
