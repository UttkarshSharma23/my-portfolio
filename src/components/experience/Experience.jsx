import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (

// Experience Heading
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
{/* *************Frontend Details**************** */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            
{/* 1st Detial */}
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__detials-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>
{/* 2nd Detail */}
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__detials-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </article>

{/* 3rd Detail */}
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__detials-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>

{/* 4th Detail  */}
<article className='experience__details'>
              <BsFillPatchCheckFill className='experience__detials-icon'/>
             <div>
             <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
             </div>
              </article>

{/* 5th Detail  */}
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__detials-icon'/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>

{/* 6th Detail  */}
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__detials-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>

          </div>
        </div>
       {/*******END OF FRONTEND*******/}
       
{/* ***************Backend Detials*************  */}
       <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className='experience__content'>

{/* 1st Detial */}
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detials-icon'/>
            <div>
            <h4>NodeJS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
{/* 
2nd Detial
<article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detials-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article> */}

{/* 3rd Detial */}
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detials-icon'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

{/* 4th Detial */}
<article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detials-icon'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
{/* 5th Detial */}
{/* <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__detials-icon'/>
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article> */}
          </div>
        </div>
{/********** END OF BACKEND**************/}
      
      </div>
      </section>
  )
}

export default Experience