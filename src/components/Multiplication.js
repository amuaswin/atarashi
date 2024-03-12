import React from 'react'

const Multiplication = () => {
    const array=[];

    for (let i = 1; i <= 10; i++) {
        let j=i*5;
        // console.log(`${i}*5=${j}`);
        array.push({i:i,j:j,r:5})
    }

    return (
        <div>
        <ul>
            {
            array.map((amu)=>(<li >{amu.i}x{amu.r}={amu.j}</li>))
            
            }
        </ul>
        </div>
    )
}

export default Multiplication
