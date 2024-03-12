import React from 'react'

function DialogueBox() {

    const handleClick = () => {
      window.print();
       
        
        
        
      
    }
  return (
<div>
    <div>Print page Dialogue Box</div>
    <button onClick={handleClick}>click</button>
    
    </div>
  )
}

export default DialogueBox