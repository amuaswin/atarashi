import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

function Register() {

  const [name, setName] = useState('');
  const [head, setHead] = useState('');


  function handleChange(e) {
    //console.log(e.target.value)
    setName(e.target.value)
  }

  function handleClick(e) {
    //console.log("submit")
    setHead(name)
  }

  return (
    <div className='container'>
      <h1>Name {name}</h1>
      <h1>After{head}</h1>

      <from on Submit>
        <input onChange={handleChange} type='text' placeholder='Enter your name' value={name}></input>
        <button type="submit" onClick={handleClick}>Submit </button>
      </from>


    </div>
  )
}

export default Register
