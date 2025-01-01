import React from 'react'
import Nav from '../Nav_Component/Nav'
import Home from '../Home_Component/home'
import Portoflio from '../Portfolio_Component/Portfolio'
import About from '../About_Component/About'
import ContactMe from '../ContactMe_Component/ContactMe'
import Contact_Info from '../Contact_Info_Component/Contact_Info'
import Footer from '../Footer_Component/Footer'

export default function App() {
    return (
        <>
                <Nav/>
                <Home/>
                <Portoflio/>
                <About/>
                <ContactMe/>
                <Contact_Info/>
                <Footer/>
        </>
    )
}