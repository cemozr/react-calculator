import "./wrapper.css";
import Screen from "../screen/Screen";
import ButtonBox from "../buttonBox/ButtonBox";
import Button from "../button/Button";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Wrapper = () => {
  const { buttonValues } = useContext(AppContext);

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
