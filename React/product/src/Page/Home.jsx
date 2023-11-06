import React from 'react'
import Data from './Data'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
            <div className="container">
                <div className="row">
                    {Data.map((pro)=>
                        <div className="col-3">
                            <div className='card'>
                                <div className='card-image'><img src={pro.image}></img></div>
                                <div className='card-title'>{pro.title  }</div>
                                <div className='card-price'>Rs {pro.price}</div>
                                <Link to={`/prodetails/${pro.id}`} className='card-button'><button className='btn btn-primary '> Details</button></Link>
                            </div>
                        </div>
                  )}

                </div>

            </div>
        </>
  )
}

export default Home