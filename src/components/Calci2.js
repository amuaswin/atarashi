import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Calci2.css'

function Calculator() {
  const [inputValues, setInputValues] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInputValues((prevInput) => result ? value : prevInput + value );
    
  };

  const handleOperation = (operation) => {
    setInputValues((prevInput) => result ? result + operation : prevInput + operation);
    setResult('');
  };

  const handleCalculate = () => {
    try {
      
      const calculatedResult=(calculateExpression(inputValues).toString());
      setResult(calculatedResult);
      setInputValues(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleBackspace = () => {
    setInputValues((prevInput) => prevInput.slice(0, -1));
    setResult('');
  };

  const calculateExpression = (expression) => {
    const operands = expression.split(/[+\-*/%]/); // Split the expression based on operators
    const operators = expression.split(/[0-9.]+/).filter(Boolean); // Split the expression based on operands
    let result = parseFloat(operands[0]);
  
    for (let i = 1; i < operands.length; i++) {
      const operand = parseFloat(operands[i]);
      const operator = operators[i - 1];
  
      switch (operator) {
        case '+':
          result += operand;
          break;
        case '-':
          result -= operand;
          break;
        case '*':
          result *= operand;
          break;
        case '/':
          result /= operand;
          break;
        case '%':
          result %= operand;
          break;    
        default:
          break;
      }
    }
  
    return result;
  };

  const handleClear = () => {
    setInputValues('');
    setResult('');
  };

  return (
    
    <div className='outer glow'>
      <div className='size'>

        <Row className='r1'>
          <Col xs={12}>
             <h3 className='heading'>CALCULATOR</h3> 
          </Col>
        </Row>
        <br/>
        <Row className='r2'>
          <Col xs={12}>
            <div className='display'>
              <input id="dis" type="text" value={result ||inputValues} readOnly className='tb' />
            </div>
          </Col>
        </Row>
        <br/>
        <Row className='r3'>
          <Col xs={3}><button onClick={() => handleButtonClick('1')}className='b'>1</button></Col>
          <Col xs={3}><button onClick={() => handleButtonClick('2')}className='b'>2</button></Col>
          <Col xs={3}><button onClick={() => handleButtonClick('3')}className='b'>3</button></Col>
          <Col xs={3}><button onClick={handleClear}className='b1'>AC</button></Col>
        </Row>
        <Row className='r4'>
          <Col xs={3}><button onClick={() => handleButtonClick('4')}className='b'>4</button></Col>
          <Col xs={3}><button onClick={() => handleButtonClick('5')}className='b'>5</button></Col>
          <Col xs={3}><button onClick={() => handleButtonClick('6')}className='b'>6</button></Col>
          <Col xs={3}><button onClick={() => handleOperation('+')}className='b1'>+</button></Col>
        </Row>
        <Row className='r5'>
          <Col xs={3}><button onClick={() => handleButtonClick('7')}className='b'>7</button></Col>
          <Col xs={3}><button onClick={() => handleButtonClick('8')}className='b'>8</button></Col>
          <Col xs={3}><button onClick={() => handleButtonClick('9')}className='b'>9</button></Col>
          <Col xs={3}><button onClick={() => handleOperation('-')}className='b1'>-</button></Col>
        </Row>
        <Row className='r6'>
          <Col xs={3}><button onClick={() => handleButtonClick('.')}className='b'>.</button></Col>
          <Col xs={3}><button onClick={() => handleButtonClick('0')}className='b'>0</button></Col>
          <Col xs={3}><button onClick={() => handleOperation('%')}className='b'>%</button></Col>
          <Col xs={3}><button onClick={() => handleOperation('*')}className='b1'>×</button></Col>
        </Row>
        <Row className='r7'>
          <Col xs={3}><button onClick={() => handleOperation('/')}className='b1'>÷</button></Col>
          <Col xs={3}> <button onClick={handleBackspace}className='b2'><i class="bi bi-backspace"></i></button></Col>
          <Col xs={6}><button onClick={handleCalculate}className='b3'>=</button></Col>
        </Row>
      </div>
    </div>
   
  )
}

export default Calculator