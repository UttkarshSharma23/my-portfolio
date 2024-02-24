import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { SiGmail } from "react-icons/si";
const HeaderScoials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/iamuttkarshsharma" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/UttkarshSharma23" target="_blank"><FaGithub/></a>
        <a href="mailto:uttkarsh.sharma2019@gmail.com" target="_blank"><SiGmail/></a>
    </div>
  )
}

export default HeaderScoials