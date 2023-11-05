import React from 'react'
import { useParams } from 'react-router-dom'

function Student_detials() {
    var {std_id}=useParams()
  return (
    <div>Student detials {std_id}</div>
  )
}

export default Student_detials