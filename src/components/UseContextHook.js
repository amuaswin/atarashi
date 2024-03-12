import React, { createContext } from 'react';
import UseEffect from './useEffect';

export const UserContext = createContext();
function UseContextHook() {
   
    let name= 'akhil'
  return (
    <div>
        <UserContext.Provider value={name}>
            <UseEffect />
            
        </UserContext.Provider>
      
    </div>
  )
}

export default UseContextHook
