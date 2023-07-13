import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/rayito.png'
import HeaderSocials from './HeaderSocials';

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5> Hey Ya'll, my name is</h5>
                <h1>Rayito Aguirre</h1>
                <h5 className='text-dark'>Full-Stack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={Me} alt='image of Rayito Aguirre'/>
                </div>

                <a href="#contact" className='scroll__down'>Keep Scrolling!</a>
            </div>
        </header>
    )
}

export default Header