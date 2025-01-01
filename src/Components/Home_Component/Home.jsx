import React from 'react'
import "../Home_Component/home.css"
import Header from '../Header_Component/Header'

export default function Home() {
    return (
        <>
            <section id='home'>
                <div className='vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white'>
                    <img src="https://hamza-noah.github.io/Start-React-App/static/media/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg" alt="" className='d-block' />
                    <Header sectionName={"Start React"} />
                    <p className="text-uppercase fs-4  mt-2">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </section>
        </>
    )
}