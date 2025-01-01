import React from 'react'
import Header from '../Header_Component/Header'
import "./ContactMe.css"
import Form_Inputs from './Form_Inputs'

export default function ContactMe() {


    return (
        <section id='contactMe' className='position-relative'>
            <div className='container py-5'>
                <Header sectionName={"Contact Me"} />
                <Form_Inputs/>
            </div>
        </section>
    )
}