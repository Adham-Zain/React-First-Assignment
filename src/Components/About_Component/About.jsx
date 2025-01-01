import React from 'react'
import Header from '../Header_Component/Header'
import "./About.css"

export default function About() {
    return (
        <section id='about'>
            <div className='container py-5'>
                <Header sectionName={"About"} />
                <div className='d-lg-flex'>
                    <p className='fs-3 p-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className='fs-3 p-5'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>
        </section>
    )
}