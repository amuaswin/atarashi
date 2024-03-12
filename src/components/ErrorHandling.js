import React, { useState } from 'react'

const ErrorHandling = () => {

    const [number, setNumber] = useState()

    const check = () => {
        try {
            if (isNaN(number)) {
                throw new Error('Enter a valid number')
            }
            let r = number ** 2;
            console.log(r)
        } catch (error) {
            console.log(error.message)
        }
        // finally {
        //     console.log('End');
        // }
    }
    return (
        <div>
            <input type='text' onChange={(e) => { setNumber(e.target.value) }}></input>
            <button onClick={check}>check</button>
        </div>
    )
}

export default ErrorHandling;
