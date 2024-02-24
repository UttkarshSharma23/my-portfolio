import React from 'react'
// All the imported components files here
import Header from '../src/components/header/Header'
import Nav from '../src/components/nav/Nav'
import AboutUs from '../src/components/about/About'
import Experience from '../src/components/experience/Experience'
import Services from '../src/components/Services/Services'
import Portfolio from '../src/components/portfolio/Portfolio'
import Testimonials from '../src/components/testimonials/Testimonials'
import Contact from '../src/components/contact/Contact'
import Footer from '../src/components/footer/Footer'





const App = () => {
  return (
// React-App Fragments <> </>
    <>
    <Header/>
    <Nav/>
    <AboutUs/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App