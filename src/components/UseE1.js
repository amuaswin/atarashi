import { useEffect } from 'react';
import { useState } from 'react';




const UseE1 = () => {
   
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);



    return (
        <div>
            <label>
                {count1}<button onClick={() => { setCount1(count1 + 1) }}>Button 1</button>
                {count2}<button onClick={() => { setCount2(count2 + 1) }}>Button 2</button>
            </label>
        </div>
    )
}

export default UseE1
