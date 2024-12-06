import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState("");

  // Function to append values to the display
  const appendValue = (value) => {
    setDisplay((prev) => prev + value);
  };

  // Function to clear the display
  const clearDisplay = () => {
    setDisplay("");
  };

  // Function to calculate the result
  const calculate = () => {
    try {
      setDisplay(eval(display).toString()); // Safely evaluates the expression
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={display}
        readOnly
        id="display"
      />
      <div className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => appendValue("(")}>(</button>
        <button onClick={() => appendValue(")")}>)</button>
        <button onClick={() => appendValue("/")}>/</button>
        <button onClick={() => appendValue("7")}>7</button>
        <button onClick={() => appendValue("8")}>8</button>
        <button onClick={() => appendValue("9")}>9</button>
        <button onClick={() => appendValue("*")}>*</button>
        <button onClick={() => appendValue("4")}>4</button>
        <button onClick={() => appendValue("5")}>5</button>
        <button onClick={() => appendValue("6")}>6</button>
        <button onClick={() => appendValue("-")}>-</button>
        <button onClick={() => appendValue("1")}>1</button>
        <button onClick={() => appendValue("2")}>2</button>
        <button onClick={() => appendValue("3")}>3</button>
        <button onClick={() => appendValue("+")}>+</button>
        <button onClick={() => appendValue("0")}>0</button>
        <button onClick={() => appendValue(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App;
