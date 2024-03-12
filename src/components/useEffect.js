import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UseContextHook';

function UseEffect() {
    const [count, setCount] = useState(0);
    const [state, setState] = useState('state 1')
    const name=useContext(UserContext)

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[state]);



  return (
    <div>
        <button onClick={() => setState('state 2')}>state 2</button>
        <button onClick={() => setState('state 1')}>state 1</button>
      {count}
      {name}
    </div>
  )
}

export default UseEffect
