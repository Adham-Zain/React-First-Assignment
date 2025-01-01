import React, { useState } from 'react';
import "../Nav_Component/nav.css";

export default function Nav() {
    const [activeLink, setActiveLink] = useState("Portfolio");

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg fs-4 position-fixed top-0 w-100">
                <div className="container">
                    <a className="navbar-brand text-white fs-3 fw-bold text-uppercase rounded" href="#">Start React</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars text-white" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className={`nav-link  ms-4 rounded fw-bold px-3 ${activeLink === "Portfolio" ? "active" : ""}`} href="#portfolio" onClick={() => handleLinkClick("Portfolio")}>Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link  ms-4 rounded fw-bold px-3 ${activeLink === "About" ? "active" : ""}`} href="#about" onClick={() => handleLinkClick("About")}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link  ms-4 rounded fw-bold px-3 ${activeLink === "Contact" ? "active" : ""}`} href="#contactMe" onClick={() => handleLinkClick("Contact")}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}