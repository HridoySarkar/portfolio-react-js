import React from 'react'
import './navbar.css'
import logo from '../../asset/logo.png'
import {Link} from 'react-scroll'
import {BsFillChatLeftDotsFill} from "react-icons/bs";

const Navbar = () => {
  
  window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").style.background = "#1e1e1e";
      } else if (document.body.scrollTop < 30 || document.documentElement.scrollTop < 30) {
        document.getElementById("navbar").style.background = "none";
      }else{
        document.getElementById("navbar").style.background = "none";
      }
    }


  return (
    <nav className='navbar' id='navbar'>
        <img alt='Logo' src={logo} className='logo'></img>
        <div className="desktopMenu">
            <Link className='destopmMenuListItem'>Home</Link>
            <Link className='destopmMenuListItem'>About</Link>
            <Link className='destopmMenuListItem'>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn'>
         Contact Me  <BsFillChatLeftDotsFill  size={18}/>
        </button>
    </nav>
  )
}

export default Navbar;