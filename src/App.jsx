import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Carousel from './Components/Carousel'
import Projects from './Components/Projects'
import About from './Components/About'
import TeamSection from './Components/TeamSection'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Home from './Components/Home'


const App1 = () => {
    return (
        <Router>
            <Navbar />
            <Carousel/>
          
            <Routes>
             <Route path="/" element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/teamsection' element={ <TeamSection/>} />
            <Route path='/contact' element={ <Contact/>} />

            </Routes>

            <Footer />
        </Router>
    )
}

export default App1
