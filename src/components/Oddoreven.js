import { Button } from 'react-bootstrap';
import React, { useState } from 'react'

function Add() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState();
  
  
//console.log(setResult);

  const OddEven = () => {
    if(number%2===0){
      setResult("Even")
    }
    else{
      setResult("Odd")
    }
  }
  return (
    <div>

      <h1>Enter Number</h1>
      <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}></input>
      <Button onClick={OddEven}>check</Button>
      <h1>The Number is :{result}</h1>
    </div>
  )
}

export default Add;
