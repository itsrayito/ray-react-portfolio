import React from 'react';
import './nav.css'
import {BiHomeAlt, BiUser, BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

function Nav() {
    return (
        <><div>Nav</div><nav>
            <a href="#"><BiHomeAlt /></a>
            <a href="#about"><BiUser /></a>
            <a href="#experience"><BiBook /></a>
            <a href="#services"><RiServiceLine /></a>
            <a href="#contact"><BiMessageSquareDetail /></a>
        </nav></>
    )
}

export default Nav