import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
    return (
        <>
        <Header />
        <Navbar />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        </>
    )
}

export default App
