import React, { useState } from 'react'
import Header from '../Header_Component/Header'
import PortfolioCards from '../Portfolio_Cards_Component/Portofolio_Cards'

export default function Portfolio() {


    return (
        <section id='portfolio'className='position-relative'>
            <div className='container text-center py-5'>
                <Header sectionName = {"portfolio"}/>
                <PortfolioCards/>
            </div>
        </section>
    )
}