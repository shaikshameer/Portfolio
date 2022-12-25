import React from 'react'
import "./Navbar.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBookBookmark} from "react-icons/bi"
import {VscFolderLibrary} from "react-icons/vsc"
import {BiMessageSquareDetail} from "react-icons/bi"
import { useState } from 'react'


function Navbar() {
    const [activeNav, setActiveNav] = useState("#")

    return (
        <nav>
            <a href='#home  ' 
                onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}
            ><AiOutlineHome /></a>
            <a 
                href='#about'
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
            ><AiOutlineUser /></a>
            <a 
                href='#skills'
                onClick={() => setActiveNav("#skills")}
                className={activeNav === "#skills" ? "active" : ""}
            ><BiBookBookmark /></a>
            <a 
                href='#projects'
                onClick={() => setActiveNav("#projects")}
                className={activeNav === "#projects" ? "active" : ""}
            ><VscFolderLibrary /></a>
            <a 
                href='#contact'
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
            ><BiMessageSquareDetail    /></a>
        </nav>
    )
}

export default Navbar