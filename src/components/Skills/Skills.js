import React from 'react'
import "./Skills.css"
import {BsFillPatchCheckFill} from "react-icons/bs"

function Skills() {
    return (
        <section id='skills'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className='container skills__container'>
                <div className='skills__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <BsFillPatchCheckFill className='skills__details__icon' />
                            <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsFillPatchCheckFill className='skills__details__icon' />
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsFillPatchCheckFill className='skills__details__icon' />
                            <div>
                            <h4>Javascript</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsFillPatchCheckFill className='skills__details__icon' />
                            <div>
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsFillPatchCheckFill className='skills__details__icon' />
                            <div>
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article> 
                        <article className='skills__details'>
                            <BsFillPatchCheckFill className='skills__details__icon' />
                            <div>
                            <h4>Redux</h4>
                            <small className='text-light'>Intermediate</small>
                            </div>
                        </article> 
                    </div>
                </div>
                <div className='skills__backend'>
                <h3>Exploring in Backend Development</h3>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <BsFillPatchCheckFill className='skills__details__icon' />
                            <div>
                            <h4>Node JS</h4>
                            <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsFillPatchCheckFill className='skills__details__icon' />
                            <div>
                            <h4>MongoDB</h4>
                            <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <BsFillPatchCheckFill className='skills__details__icon' />
                            <div>
                            <h4>MySql</h4>
                            <small className='text-light'>Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills