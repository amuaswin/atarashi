import React from 'react'
import { useContext } from 'react';
import { UserContext } from './UseContextHook';

function Async() {
  const name = useContext(UserContext)
    console.log('Hello');
    console.log('hi');
    setTimeout(()=>console.log('step1'),5000);
    setTimeout(()=>console.log('step2'),4000);
    console.log('stop');
  return (
    <div>Async
      {name}
    </div>
  )
}

export default Async