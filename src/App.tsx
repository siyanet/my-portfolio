
import { useEffect } from 'react'
import './App.css'
import About from './Components/About'
import CertificatesCarousel from './Components/Certificates'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'
import Header from './Components/Header'
import MyProjects from './Components/MyProject'
import Resume from './Components/Resume'
import UpperHeader from './Components/UpperHeader'
import WorkExperienceTimeline from './Components/WorkExperienceTimeline'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
   useEffect(() => {
    AOS.init({
     // animation duration in ms
       // whether animation should happen only once
    });
  }, []);
  

  return (
    <>
      
      
      <UpperHeader />
      <div id="home"><Header/></div>
      
      
      <div id="about" data-aos="fade-up">
        <About />
      </div>
      
      <div id="projects">
        <MyProjects />
      </div>
      
      <div id="certificates">
        <CertificatesCarousel />
      </div>
      
      <div id="experience">
        <WorkExperienceTimeline />
      </div>
      
      <div id="resume" data-aos="fade-up">
        <Resume />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
      
      <Footer />

    </>
  )
}

export default App
