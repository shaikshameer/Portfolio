import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/shaikshameer987' target="new"><BsLinkedin /></a>
            <a href='https://github.com/shaikshameer987' target="new"><FaGithub /></a>
        </div>
    )
}

export default HeaderSocials
