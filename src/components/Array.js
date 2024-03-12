import React from 'react'

function Array() {
    const A = [1,2,3,4]
  return (
    <div>
      <ul>
        {
            A.map((i,index) => (
                <li key={index}>{i}</li>
            )
            )
        }
      </ul>
    </div>
  )
}

export default Array
