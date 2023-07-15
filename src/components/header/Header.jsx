import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/rayito.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
    return (
       <>
       <header id="header">
        <div className="container header__container">
            <h5>Hey Ya'll</h5>
            <h1>I am Rayito</h1>
            <h5 className="text-light">Full-Stack Developer</h5>
            <CTA />
        <div>
        <div className="me">
            <img src={Me} alt="image of Rayito Aguirre" />
            </div>
        </div>
    </div>
        </header>
        <HeaderSocials />
        <a href="#footer" className="scroll__down">
            {" "}
            Scroll Down{" "}
        </a>
        </>
    );
}

export default Header;