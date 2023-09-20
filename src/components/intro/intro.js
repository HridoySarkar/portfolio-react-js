import React from 'react'
import './intro.css'
import heroBanner from '../../asset/heroBanner.png'
import {Link} from 'react-scroll';
import {BsFillBriefcaseFill} from 'react-icons/bs'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,<br/></span>
            <span className='introText'>I'm <span className='introName'>Hridoy</span><br/>Software Engineer</span>
            <p className='introPara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <Link><button className='hireBtn'><BsFillBriefcaseFill size={15}/> Hire me</button></Link>
        </div>
        <img className='introImg' alt='Hero Banner' src={heroBanner}></img>
    </section>
  )
}

export default Intro;