import React from 'react';
import './footer.css'
import {FiGithub, FiLinkedin} from 'react-icons/fi'

function Footer() {
    return (

        <footer id='footer'>
            <a href="#" className="footer__logo">Rayito J. Aguirre</a>

            <ul className="permaLinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="mobile__socials">
                <a href="https://github.com/itsrayito"><FiGithub/></a>
                <a href="https://linkedin.com/in/rayitoaguirre"><FiLinkedin/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Proudly Made By Rayito Aguirre</small>
            </div>
            </footer>
    )
}

export default Footer