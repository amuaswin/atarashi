import React from 'react'

function Object1() {
   
let Stu ={
    name:"Amu",
    rollno:101,
    grade:"III",
    Address:{
        Door:108,
        St:"Nsk Street"       
    }
}
let s = new Object();
s.name= 'amudhavel';

console.log(Stu)
   

  return (
    <div>
    <button >Click here</button>
    <h1>Result:{Stu.name}</h1>
    
     
    </div>
  )
}

export default Object1
