import React from 'react'

const Array1 = () => {
    let a = [1, "apple", 2, 3, 4, 5, 2, 5, 6,6]
    let b = a.length;
    let c = a.toString();
    let d = a.at(1);
    let e = a.filter((rtt) => a.indexOf(rtt) === a.lastIndexOf(rtt));
    let f = new Set(a);
    let g = a.length - f.size;


    return (
        <div>
            <label>
                Array :{a}<br></br>
                
                Array length:{b}<br></br>
                
                Array String:{c}<br></br>
                
                Array at: {d}<br></br>
               
                Array unique:{e}<br></br>
                
                Array new: {f}<br></br>
                
                Array duplicate :{g}
            </label>
        </div>
    )
}

export default Array1
