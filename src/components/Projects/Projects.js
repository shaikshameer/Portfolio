import React from 'react'
import "./Projects.css"
import ecommerce from "../../Assets/ecommerce.jpg"
import portfolio from "../../Assets/portfolio.png"
import todo from "../../Assets/todoapp.png"

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
                        <a href='https://github.com/shaikshameer987/ecommerce' target="new" className='btn'>Github</a>
                        <a href='https://shameer-eshop.netlify.app/' target="new" className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article className='project__item'>
                    <div className='project__item__image'>
                        <img src={portfolio} alt=''/>
                    </div>
                    <h3>Personal Portfolio</h3>
                    <div className='project__item__cta'>
                        <a href='https://github.com/shaikshameer987/Portfolio' className='btn'>Github</a>
                        <a href='https://shameer-portfolio.netlify.app/' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                <article className='project__item'>
                    <div className='project__item__image'>
                        <img src={todo} alt=''/>  
                    </div>
                    <h3>To Do App</h3>
                    <div className='project__item__cta'>
                        <a href='https://github.com/shaikshameer987/ToDo-Application' className='btn'>Github</a>
                        <a href='https://shameer-todoapp.netlify.app/' className='btn btn-primary'>Live Demo</a>
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