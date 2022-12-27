import React from 'react'
import "./Header.css"
import CTA from '../CTA/CTA'
import pic from "../../Assets/Profilepic.JPG"
import HeaderSocials from '../HeaderSocials/HeaderSocials'

function Header() {
    return (
        <header id='home'>
            <div className='container header__container'> 
                <h5>Hello I'm</h5>
                <h2>SHAIK SHAMEER BASHA</h2>
                <h4 className='text-light'>Frontend Developer</h4>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={pic} alt="" className='pic'/>
                </div>
            </div>
        </header>
    )
}

export default Header