import React, { useState } from 'react';
import './Calculator.css';

function Apple() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setExpression(expression + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(expression));
    } catch (error) {
      setResult('Error');
    }
  };

  const clearExpression = () => {
    setExpression('');
    setResult('');
  };

  return (
    <div className="calculator">
      <input
        type="text"
        className="calculator-screen"
        value={expression}
        placeholder="Null"
        disabled
      />
      <div className="calculator-buttons">
        
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
       
       
        
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        
        
        
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={clearExpression}>C</button>
       
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={calculateResult}>=</button>
        
        
        
      </div>
      <p className="result">{result}</p>
    </div>
  );
}

export default Apple;
