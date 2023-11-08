import React, { useState } from 'react'
import Increment from './Increment'
import CompA from './CompA'

function App() {


let names="Broadway"
  
  return (
    <>
    {/* <Increment/> */}

    <CompA app_name={names}/>
    </>
  )
}

export default App