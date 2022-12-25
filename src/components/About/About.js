import React from 'react'
import "./About.css"
import aboutpic from "../../Assets/Aboutmepic.JPG"
import {FaAward} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"

function About() {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={aboutpic} alt='' />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward  className='about__icon'/>
                            <h5>Experience</h5>
                            <small>Fresher</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary  className='about__icon'/>
                            <h5>Projects</h5>
                            <small className="number">5 completed</small>
                        </article>
                    </div>
                    <p>
                        I recently began to be fascinated by Web Development. So I learned HTML5, CSS, Javascript, ReactJs library and Redux for building websites. Iam keen to gain more experience in this field and looking for a company willing to offer me a placement for Frontend Developer Role.
                        </p>

                        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About

