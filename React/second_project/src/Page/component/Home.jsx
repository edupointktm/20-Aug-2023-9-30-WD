import React from 'react'
import Student from './Student'
import { Link, useParams } from 'react-router-dom'
function Home() {

    
    return (
        <>
            <div className="container">
                <div className="row">
                    {Student.map((std) =>
                        <div className="col-3">
                            <div className='card'>
                                <div className='card-image'><img src={std.photo}></img></div>
                                <div className='card-title'>{std.names}</div>
                                <div className='card-price'>{std.address}</div>
                                <Link to={`/stddetails/${std.id}`} className='card-button'><button className='btn btn-primary '> Details</button></Link>
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </>
    )
}

export default Home