import React from 'react'
import { useParams } from 'react-router-dom'
import Data from './Data'

function Productdetails() {
    let { pro_id } = useParams()
    let pro_details = Data.find((pd)=> pd.id==pro_id)
    return (
        <>
            <div className="container">
                <div><h1>Product Details</h1></div>
                <hr />
                <div className="row">
                    <div className="col-8">
                        <img src={pro_details.image}></img>
                    </div>
                    <div className="col-4">
                        <h1>{pro_details.title}</h1>
                        <p className='text-secondary'>{pro_details.description}</p>
                        <div className='fs-3'> <span className='text-danger'>Price : {pro_details.price}</span> <span className='fs-6 text-secondary'>Rating :{pro_details.rating.rate} </span></div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Productdetails