import React from 'react'
import "./Footer.css"
import {AiOutlineFacebook} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {FiTwitter} from "react-icons/fi"

function Footer() {
    return (
        <footer>
            <a href="#home" className='footer__logo'>shameer</a>
            <ul className='links'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contacts</a></li>
            </ul>
            <div className='footer__socials'>
                <a href='https://facebook.com'><AiOutlineFacebook /></a>
                <a href='https://instagram.com'><BsInstagram /></a>
                <a href='https://twitter.com'><FiTwitter /></a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; Shaik Shameer. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer