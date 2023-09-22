import React from 'react'
import '../Footer/footer.css'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className='footer'>
        Copyright &#169; {year} Hridoy Sarkar. All right received.
    </footer>
  )
}

export default Footer;