import React from 'react'
import CompC from './CompC'

function CompB(props) {
  return (
    <>
    
    <CompC compB_name={props.compA_name}/>
    </>
  )
}

export default CompB