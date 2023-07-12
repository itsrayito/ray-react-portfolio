import React from 'react'
import CTA from './CTA'

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5> Hey Ya'll, my name is</h5>
                <h1>Rayito Aguirre</h1>
                <h5 className='text-dark'>Full-Stack Developer</h5>
                <CTA />
            </div>
        </header>
    )
}

export default Header