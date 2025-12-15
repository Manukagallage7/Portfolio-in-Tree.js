import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'

const App = () => {
    return (
        <div className='container mx-auto max-w-7xl'>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <section className='min-h-screen flex items-center justify-center' />
            {/* about */}
            {/* projects */}
            {/* experience */}
            {/* testimonial */}
            {/* contact */}
            {/* footer */}
        </div>
    )
}

export default App