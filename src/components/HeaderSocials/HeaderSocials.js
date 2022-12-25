import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble} from "react-icons/fi"

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href='https://linkedin.com'><BsLinkedin /></a>
            <a href='https://github.com'><FaGithub /></a>
            <a href='https://dribble.com'><FiDribbble /></a>
        </div>
    )
}

export default HeaderSocials
