import axios from 'axios';
import React from 'react'
import {useState} from 'react'

export default function Dtpost() {
    const [state, setState] = useState([]);



    const postProduct = () =>
        axios
            .post("http://catodotest.elevadosoftwares.com/Category/InsertCategory", { category: "" })
            .then((response) => console.log(response))



    return (
        <div>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)}
                placeholder='Enter value'></input>
            <button onClick={postProduct}>Add product</button >
        </div>
    )
}






