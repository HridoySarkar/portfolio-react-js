import React ,{useRef} from 'react';
import '../contact/contact.css';
import {FaFacebookSquare,FaGithub , FaInstagramSquare} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import {Alert,AlertTitle} from '@mui/material';

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tec91rx', 'template_rihhzwl', form.current, 'KhrH0fcXfdFexsz08')
      .then((result) => {
          console.log(result.text);
          <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Your message was successfully send!<strong>:)</strong>
          </Alert>
          alert('Email send Success!')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
        <h2 className='contactTitle'>Contact Me</h2>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form ref={form} onSubmit={sendEmail} className='contactForm'>
            <input className='name' placeholder='Your name' type='text' name='your_name'/>
            <input className='email' placeholder='Your email' type='email' name='your_email'/>
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