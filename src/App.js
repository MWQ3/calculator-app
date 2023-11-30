import { useState, useEffect } from "react";
import NumberViewer from './components/NumberViewer';
import Keys from './components/Keys';
import Calculator from './components/Calculator';

function App() {
  const [userInput, setUserInput] = useState("0");
  const [userOutput, setUserOutput] = useState("");
  const [calcData, setCalcData] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  
  
  const operators = ["AC", "/", "x", "+", "-", "="];
  
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  const handleClear = () => {
    setUserInput("0");
    setCalcData("");
  }
  
  const handleEqual = () => {
    const hasOperators = operators.some(op => calcData.includes(op));
    if(hasOperators) {
    const isLastCharOp = calcData.charAt(calcData.length - 1);
    if(isLastCharOp === "*" || operators.includes(isLastCharOp) || !operators) {
      setCalcData(`${calcData}`);
    } else {
      console.log("eq working")
      const calculateTotal = eval(calcData);
      setUserInput(`${calculateTotal}`);
      setCalcData(`${calculateTotal}`);
    }
  } else {
    setCalcData(`${calcData}`);
  }
  }
  
  const handleDotOp = () => {
    console.log(". workingg")
    const lastChar = calcData.charAt(calcData.length - 1);
    
    if(!calcData.length) {
      setUserInput("0.");
      setCalcData("0.")
    } else {
      if(lastChar === "*" || operators.includes(lastChar)) {
        setUserInput("0.");
        setCalcData(`${calcData} 0.`)
      } else {
        setUserInput(
          lastChar === "." || userInput.includes(".") ? `${userInput}` : `${userInput}.`
        );
        
        setCalcData(
        lastChar === "." || userInput.includes(".") ? `${calcData}` : `${calcData}.`
        );
      }
    }
    
  }
  
  const handleNumbers = (value) => {
    console.log("num working")
    
    if(userInput.length >= 15) {
      setCalcData(`${calcData}`);
      setUserInput("Limit Reached");
      setBtnDisable(true);
      setTimeout(() => {
        setUserInput(`${calcData}`);
        setBtnDisable(false);
      }, 1000)
    } else if(!calcData.length) {
      setUserInput(`${value}`)
      setCalcData(`${value}`)
    } else if(value === 0 && (userInput === "0" || calcData === "0")) {
      setCalcData(`${calcData}`)
    } else {
      const lastChar = calcData.charAt(calcData.length - 1);
      const isLastCharOp = lastChar === "*" || operators.includes(lastChar);
      
      setUserInput(isLastCharOp ? `${value}` : `${userInput}${value}`);
      setCalcData(`${calcData}${value}`);   
    }
  };
  
  const handleOperators = (value) => {
    console.log("op working")
  if(calcData.length) {
      setUserInput(`${value}`);
      const beforeLastChar = calcData.charAt(calcData.length - 2);

      const beforeLastCharIsOp =
        operators.includes(beforeLastChar) || beforeLastChar === "*";

      const lastChar = calcData.charAt(calcData.length - 1);
      
      const lastCharIsOp = operators.includes(lastChar) || lastChar === "*";
      
      const validOp = value === "x" ? "*" : value;
      if (
        (lastCharIsOp && value !== "-") ||
        beforeLastCharIsOp && lastCharIsOp
      ) {
        if (beforeLastCharIsOp) {
          const updatedValue = `${calcData.substring(
            0,
            calcData.length - 2
          )}${value}`;
          setCalcData(updatedValue);
        } else {
          setCalcData(`${calcData.substring(0, calcData.length - 1)}${validOp}`);
        }
      } else {
        setCalcData(`${calcData}${validOp}`);
      }
    }
  };
  
  
  const handleUserInput = (value) => {
   const num = numbers.find((number) => number === value);
   const ops = operators.find((operator) => operator === value);
      
    switch(value) {
      case "AC":
        handleClear();
        break;
      case "=":
        handleEqual();
        break;
      case ".":
        handleDotOp();
        break;
      case num:
        handleNumbers(value);
        break;
      case ops:
        handleOperators(value);
        break;
      default:
        break;
    }
    
  };
  
  const handleUserOutput = () => {
    setUserOutput(calcData)
  }
  
  useEffect(() => {
    handleUserOutput()
  }, [calcData])
  
  
  
  return(
  <div>
      <Calculator btnDisable={btnDisable} userInput={userInput} userOutput={userOutput} handleUserInput={handleUserInput} />
      </div>
  );
};

export default App;
