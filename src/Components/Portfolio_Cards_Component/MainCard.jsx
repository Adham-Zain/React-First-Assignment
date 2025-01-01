import React from 'react'

export default function MainCard({card}) {
    return (<>
            <img src={card} alt="" className='w-100 rounded' />
            <div className='layer position-absolute top-0 bottom-0 rounded d-flex justify-content-center align-items-center'>
                <i className="fa-solid fa-plus text-white"></i>
            </div></>
    )
}