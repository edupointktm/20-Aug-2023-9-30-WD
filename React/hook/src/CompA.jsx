import React from 'react'
import CompB from './CompB'

function CompA(props) {
  return (
    <>
    
    <CompB compA_name={props.app_name}/>
    </>
  )
}

export default CompA