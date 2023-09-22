import React from 'react';
import '../contact/contact.css';
import {FaFacebookSquare,FaGithub , FaInstagramSquare} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact'>
        <h2 className='contactTitle'>Contact Me</h2>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form method='' className='contactForm'>
            <input className='name' placeholder='Your name' type='text'/>
            <input className='email' placeholder='Your email' type='email'/>
            <textarea className='msg' name='message' placeholder='Your message' rows='5'></textarea>
            <button type='submit' value='send' className='submitBtn'>Send</button>
            <div className='socialLinks'>
                <a href='www.facebook.com/heart.sarkar/' target='_blank' className='socialLink' rel="noopener"><FaFacebookSquare size={40} color='white'/></a>
                <a href='www.github.com/HridoySarkar' target='_blank' className='socialLink' rel="noopener"><FaGithub size={40} color='white'/></a>
                <a href='www.facebook.com/heart.sarkar' target='_blank' className='socialLink' rel="noopener"><FaInstagramSquare size={40} color='white'/></a>
                
            </div>
        </form>
    </section>
  )
}

export default Contact;