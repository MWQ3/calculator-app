import NumberViewer from './NumberViewer';
import Keys from './Keys';

function Calculator({ btnDisable, userInput, userOutput, handleUserInput }) {

    const keysData = [
        { id: "clear", value: "AC", class: "operator-clear" },
        { id: "divide", value: "/", class: "operator"},
        { id: "multiply", value: "x", class: "operator", },
        { id: "seven", value: 7, class: "num", },
        { id: "eight", value: 8, class: "num", },
        { id: "nine", value: 9, class: "num", },
        { id: "subtract", value: "-", class: "operator", },
        { id: "four", value: 4, class: "num", },
        { id: "five", value: 5, class: "num", },
        { id: "six", value: 6, class: "num", },
        { id: "add", value: "+", class: "operator", },
        { id: "one", value: 1, class: "num", },
        { id: "two", value: 2, class: "num", },
        { id: "three", value: 3, class: "num", },
        { id: "equals", value: "=", class: "operator-equal", },
        { id: "zero", value: 0, class: "num", },
        { id: "decimal", value: ".", class: "num", },
      ];

    return (
    <div className="calc-container">
        <NumberViewer userInput={userInput} userOutput={userOutput} />
        <div className="math-container">
          <div className="numbers-op">
        {keysData.map(key => (
        <Keys btnDisable={btnDisable} handleUserInput={handleUserInput} keyClass={key.class} keyId={key.id} keyValue={key.value} />
        ))}
            
          </div>
        </div>
        
    </div>
    
    )
  }

  export default Calculator;