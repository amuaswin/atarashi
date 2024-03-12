import React, { useEffect, useState } from 'react'

function UseEffect2() {
    const [details, setDetails] = useState('todos');
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${details}`)
      .then(response => response.json())
      .then(json => setItems(json))
      console.log(items)

    },[details])
  return (
    <div>
     

    <button onClick={()=>setDetails('posts')} >post</button>
    <button onClick={()=>setDetails('users')}>user</button>
    {
      items.map(i => <pre>{JSON.stringify(i)}</pre>)
    }
    </div>
  )
}

export default UseEffect2
