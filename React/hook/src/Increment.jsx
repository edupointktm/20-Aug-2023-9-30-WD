import React, { useState } from 'react'

function Increment() {
    let [count, updateCount]=useState(5)
    function increase(){
        updateCount(count+1)
        
      }
  return (
    <>
    <button onClick={increase}> + </button>
    <h3>{count}</h3>
    <button onClick={()=>updateCount(count-1)}> - </button>
    </>
  )
}

export default Increment