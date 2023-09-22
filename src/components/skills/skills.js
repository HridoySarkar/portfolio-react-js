import React from 'react'
import './skills.css'
import Coding from '../../asset/coding.png'
import Web from '../../asset/web.png'
import VersionControl from '../../asset/version_control.png'

const skills = () => {
  return (
    <section id='skills'>
        <span className='skillsTitle'>Skills I have</span>
        <br/>
        <span className='skillsDesc'>A problem solver with multitasking with code and design</span>
        <div className='skillsBars'>
            <div className='skillsBar'>
                <img
                    src={Coding} 
                    alt='' 
                    className='skillsImg'>
                </img>
                <div className='skillsText'>
                    <h2>Programming Skills</h2>
                    <p>Java, C, C++</p>
                </div>
            </div>
            <div className='skillsBar'>
                <img src={Web} alt='' className='skillsImg'></img>
                <div className='skillsText'>
                    <h2>Web Programming Skills</h2>
                    <p>JavaScript, React JS, SQL, MongoDB</p>
                </div>
            </div>
            <div className='skillsBar'>
                <img src={VersionControl} alt='' className='skillsImg'></img>
                <div className='skillsText'>
                    <h2>Version Control</h2>
                    <p>Git, GitHub</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills