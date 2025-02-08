import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = (event) => {
    setInput(input.concat(event.target.value));
  };

  const handleCalculations = () => {
    if (input == null) {
      setOutput("Error");
    }
  
    try {
      setOutput(eval(input).toString());
    } catch (error) {
      setOutput("Error");
      console.error(error);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="input-element">
        <input type="text" value={input} />
      </div>

      <div className="output">
        {output}
      </div>

      <div className="buttons">
        <div className="row">
          <div className="col">
            <button onClick={handleClick} value="8">
              8
            </button>
            <button onClick={handleClick} value="7">
              7
            </button>
            <button onClick={handleClick} value="9">
              9
            </button>
            <button onClick={handleClick} value="+">
              +
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={handleClick} value="5">
              5
            </button>
            <button onClick={handleClick} value="4">
              4
            </button>
            <button onClick={handleClick} value="6">
              6
            </button>
            <button onClick={handleClick} value="-">
              -
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={handleClick} value="1">
              1
            </button>
            <button onClick={handleClick} value="2">
              2
            </button>
            <button onClick={handleClick} value="3">
              3
            </button>
            <button onClick={handleClick} value="*">
              *
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={handleClear} value="C">
              C
            </button>
            <button onClick={handleClick} value="0">
              0
            </button>
            <button onClick={handleCalculations}>=</button>
            <button onClick={handleClick} value="/">
              /
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={handleBackspace} value="Back">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
