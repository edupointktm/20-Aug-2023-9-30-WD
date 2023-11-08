import React, { useState } from 'react'

function CompC(props) {
    let [name,updateName]=useState("xxxxxxxx")

    let Message=(n)=>{
        updateName(n)
    }
    return (
        <>
            <div>Welcome to {name}</div>
            <button onClick={()=>Message(props.compB_name)}>Click</button>

        </>
    )
}

export default CompC