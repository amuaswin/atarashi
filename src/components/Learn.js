import React from 'react'

function Learn() {
    let a = new Date();
   let b= a.setDate(15)
   let x=10.6
   console.log(Math.round(x))
   console.log(Math.max(4,6,8));
   console.log(Math.random())

  return (
    <div>
      {/* {a.toDateString()}
      <br />
      {a.getDate()} */}
      {Math.PI}
      {Math.ceil(x)}
    </div>
  )
}

export default Learn
