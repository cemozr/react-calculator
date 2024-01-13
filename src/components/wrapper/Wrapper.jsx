import "./wrapper.css";
import Screen from "../screen/Screen";
import ButtonBox from "../buttonBox/ButtonBox";
import Button from "../button/Button";
const Wrapper = () => {
  const buttonValues = [
    ["C", "DEL", "+/-", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ",", "="],
  ];
  return (
    <div className="wrapper">
      <Screen />
      <ButtonBox>
        {buttonValues.flat().map((btnValue, i) => (
          <Button key={i} value={btnValue} />
        ))}
      </ButtonBox>
    </div>
  );
};

export default Wrapper;
