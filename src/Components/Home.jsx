import React from 'react'
import About from './About'
import Projects from './Projects'
import TeamSection from './TeamSection'
import Contact from './Contact'
import Services from "./Services"

// import About from './Components/About'
// import TeamSection from './Components/TeamSection'
// import Contact from './Components/Contact'
// import Projects from './Components/Projects'


const Home = () => {
  return (
   <> 
   <About/>
   <Projects/>
   <Services/>
   <TeamSection/>
   <Contact/>
   {/* <About />
   <Projects />
   <TeamSection/>
   <Contact/> */}

   </>
  )
}

export default Home
