import React from 'react'
import './nav.css'
// for home section
import {FaHome} from 'react-icons/fa'
// for about section
import {FaUserCircle} from 'react-icons/fa'
// for experience section
import {FaBook} from 'react-icons/fa'
// for services section
import {RiServiceLine} from 'react-icons/ri'
//  for contact section
import {AiFillMessage} from 'react-icons/ai'

// for color change of the active section
import { useState } from 'react'
const Nav = () => {

  // changing the ative section color using usestate
const [activeNav , setActiveNav]  = useState('#')

  return (
    <div className='nav'>


{/*Home Section*/}
     <a href="#"
     onClick={()=> setActiveNav('#')}
     className=
     {
      activeNav ==='#' 
      ? 'active' 
      : ''
      }>
        <FaHome/></a>

{/*About Section*/}
     <a href="#about" 
     onClick={()=> setActiveNav('about')}  
     className=
     {
      activeNav ==='about' 
      ? 'active' 
      : ''
      }>
        <FaUserCircle/></a>

{/*Experience Section*/}
     <a href="#experience"
     onClick={()=> setActiveNav('experience')}  
     className=
     {
      activeNav ==='experience' 
      ? 'active' 
      : ''
      }>
        <FaBook/></a>

{/*Services Section*/}
     <a href="#services"
     onClick={()=> setActiveNav('services')}  
     className=
     {
      activeNav ==='services' 
      ? 'active' 
      : ''
      }>
        <RiServiceLine/></a>

{/*Contact Section*/}
     <a href="#contact"
     onClick={()=> setActiveNav('contact')}  
     className=
     {
      activeNav ==='contact' 
      ? 'active' 
      : ''
      }>
        <AiFillMessage/></a>


    </div>
  )
}

export default Nav
