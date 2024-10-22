import React from 'react'
import './about.css'
import ME from '../../assets/uttkarshsharma.png'
import {TbAward} from 'react-icons/tb'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">

{/* Card 1 */}

          <div className="about__cards">
            <article className='about__card'> 
            <TbAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 year and 2 months of Experience as Developer</small>
            </article>

{/* Card 2 */}
          <article className='about__card'> 
                      <FiUsers className='about__icon'/>
                      <h5>Jobs</h5>
                      <small>2 Jobs</small>
                      </article>
{/* Card 3 */}
            <article className='about__card'> 
            <FiUsers className='about__icon'/>
            <h5>Internships</h5>
            <small>6+ WorldWide</small>
            </article>
{/* Card 4 */}
            <article className='about__card'> 
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>5+ Completed Projects</small>
            </article>
          </div>


          <p>
          A self-motivated, hardworking graduate of B.Tech. ECE, Having a strong desire to do my best in IT sector for career growth and progress of the company, I seek a Fresher position in a dynamic organization and ensure continuous enhancement of my education skills for mutual growth and advancement.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About