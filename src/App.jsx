import "./App.css";
import Wrapper from "./components/wrapper/Wrapper";
import Screen from "./components/screen/Screen";
import ButtonBox from "./components/buttonBox/ButtonBox";
import Button from "./components/button/Button";
import { AppProvider } from "./context/AppContext";
function App() {
  const buttonValues = [
    ["C", "DEL", "+/-", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  return (
    <AppProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {buttonValues.flat().map((btnValue, i) => (
            <Button key={i} value={btnValue} />
          ))}
        </ButtonBox>
      </Wrapper>
    </AppProvider>
  );
}

export default App;
