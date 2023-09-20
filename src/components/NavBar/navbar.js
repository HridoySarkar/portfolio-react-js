import React from 'react'
import './navbar.css'
import logo from '../../asset/logo.png'
import {Link} from 'react-scroll'
import {BsFillChatLeftDotsFill} from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img alt='Logo' src={logo} className='logo'></img>
        <div className="desktopMenu">
            <Link className='destopmMenuListItem'>Home</Link>
            <Link className='destopmMenuListItem'>About</Link>
            <Link className='destopmMenuListItem'>Portfolio</Link>
            <Link className='destopmMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn'>
         Contact Me  <BsFillChatLeftDotsFill  size={18}/>
        </button>
    </nav>
  )
}

export default Navbar;