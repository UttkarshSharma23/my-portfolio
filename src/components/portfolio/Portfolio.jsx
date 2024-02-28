import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/netflix clone.jpg'
import IMG2 from '../../assets/Jarvis-ai.jpg'
import IMG3 from '../../assets/us-portfolio.jpg'
import IMG4 from '../../assets/Food-full.png'
import IMG5 from '../../assets/todo.png'
import IMG6 from '../../assets/themeswitch.png'
import IMG7 from '../../assets/home-rental.png'

// Array of  portfolio projects for mapping
const data = [
  {
    id: 4,
    image: IMG4,
    title: 'Food-Booking Full Stack App',
    github: 'https://github.com/UttkarshSharma23/food-full-stack',
    demo: 'https://food-fullstack.vercel.app/',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Home-Rentals Full Stack App',
    github: 'https://github.com/UttkarshSharma23/home-rentals',
    demo: 'https://home-rentals-client.vercel.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'To-Do List App',
    github: 'https://github.com/UttkarshSharma23/Todo-list',
    demo: 'https://uttkarsh-todo-list.netlify.app/',
  },
  {
    id: 1,
    image: IMG1,
    title: 'Netflix-Clone Project',
    github: 'https://github.com/UttkarshSharma23/netflix-clone-project',
    demo: 'https://netflix-clone-projec.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Jarvis Virtual AI Assistant',
    github: 'https://github.com/UttkarshSharma23/Jarvis-AI-assistant-',
    demo: 'https://github.com/UttkarshSharma23/Jarvis-AI-assistant-',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Uttkarsh PortFolio Website',
    github: 'https://github.com/UttkarshSharma23/uttkarsh-portfolio.github.io',
    demo: 'https://uttkarsh-portfolio.netlify.app/',
  },


  {
    id: 6,
    image: IMG6,
    title: 'Theme Switcher',
    github: 'https://github.com/UttkarshSharma23/theme-Switcher',
    demo: 'https://uttkarsh-theme-switcher.netlify.app/',
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


      <div className="container portfolio__container">
        {/* Method Used to call the array data */}
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }



        {/* 1st Project
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={IMG1} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='blank'>  Live Demo</a>
          </div>          
        </article> */}
        {/* ************End of Projects***************** */}
      </div>
    </section>
  )
}

export default Portfolio
