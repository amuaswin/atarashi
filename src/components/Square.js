import React, { useState } from 'react'

function Loop(){
const [a,setA]=useState();
const [b,setB]=useState();

const opera=()=>{
let b=a*a;
setB(b)
}

  return (
    <div>
    <label>
    Give a Number :<input type="number" onChange={(e)=>setA(e.target.value)}></input>
    <button onClick={opera}>Click</button>
    <h4>Square value :{b}</h4><br></br>
    
    </label>

    </div>
  )
}


export default Loop
