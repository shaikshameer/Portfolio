import React from 'react'
import "./Projects.css"
import ecommerce from "../../Assets/Ecommerce.png"

function Projects() {
    return (
        <section id='projects'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>
            <div className='container projects__container'>
                <article className='project__item'>
                    <div className='project__item__image'>
                        <img src={ecommerce} alt=''/>
                    </div>
                    <h3>Ecommerce Website</h3>
                    <div className='project__item__cta'>
                        <a href='https://github.com' className='btn'>Github</a>
                        <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article className='project__item'>
                    <div className='project__item__image'>
                        <img src={ecommerce} alt=''/>
                    </div>
                    <h3>Ecommerce Website</h3>
                    <div className='project__item__cta'>
                        <a href='https://github.com' className='btn'>Github</a>
                        <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article className='project__item'>
                    <div className='project__item__image'>
                        <img src={ecommerce} alt=''/>
                    </div>
                    <h3>Ecommerce Website</h3>
                    <div className='project__item__cta'>
                        <a href='https://github.com' className='btn'>Github</a>
                        <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article className='project__item'>
                    <div className='project__item__image'>
                        <img src={ecommerce} alt=''/>
                    </div>
                    <h3>Ecommerce Website</h3>
                    <div className='project__item__cta'>
                        <a href='https://github.com' className='btn'>Github</a>
                        <a href='https://github.com' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Projects