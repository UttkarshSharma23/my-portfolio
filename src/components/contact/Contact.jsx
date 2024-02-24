import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BiPhoneCall} from 'react-icons/bi'
import {ImWhatsapp} from 'react-icons/im'

// Importing the dependencies required for emailjs
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

// Email Linking Template method
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_nyunl5a', 'template_6x58qqk', form.current, 'NXowc0Ylnhfh71zJt')
    e.target.reset()
};

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className='container contact__container'>
        <div className="contact__options">
          
                    
{/* 1st Option */}
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>uttkarsh.sharma2019@gmail.com</h5>
            <a href="mailto:uttkarsh.sharma2019@gmail.com" target="_blank">Send an Email</a>
          </article>

{/* 2nd Option */}
<article className='contact__option'>
            <BiPhoneCall className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>Contact Detail</h5>
            <a href="callto: 8287864042" target='_blank'>Call me</a>
          </article>

{/* 3rd Option */}
<article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-8287864042</h5>
            <a href="https://api.whatsapp.com/send?phone=+8287864042" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* *****END OF CONTACT OPTIONS*****  */}
       
{/* Input Form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
      </section>
  )
}

export default Contact