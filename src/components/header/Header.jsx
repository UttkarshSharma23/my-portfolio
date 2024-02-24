import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/uttkarshs.png'
import HeaderScoials from './HeaderScoials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Uttkarsh Sharma</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA/>
        <HeaderScoials/>
{/* Image */}
        <div className="me">
          <img src={ME} alt="" />
        </div>

{/* Scroll Down Link */}
    <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
