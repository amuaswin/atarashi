import React, { useReducer, useState } from 'react'

function UseReducer() {
    function reducer(state,action){
        switch(action.type){
            case 'increment':
            return {count:state.count+1}
            case 'decrement':
                return{count:state.count-1}
            default:
                return state;
        }
        

    }
    const [state,dispatch]=useReducer(reducer,{count:0})
   // const [count,setCount] =useState(0)
    function increment(){
        dispatch({   
            type:'increment'
        })

    }
    function decrement(){
        dispatch({
            type:'decrement'
        })

    }
  return (
    <div>
      <button onClick={increment}>plus</button>
      <button onClick={decrement}>minus</button>
      {state.count}
    </div>
  )
}

export default UseReducer
