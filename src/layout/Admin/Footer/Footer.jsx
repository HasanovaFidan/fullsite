import React from 'react'
import "./footerr.css"
import { FaFacebookSquare, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiThunderball } from "react-icons/gi";
function Footer() {
  return (
    <div>
                <footer className='footer'>
        <div className="footer__divv">
  <div className="icon__divv">
<div className='divv'> <FaGithub/></div> 
       <div className='divv'> <FaLinkedin/></div>
      <div className='divv'> <FaInstagram/> </div>
       <div className='divv'> <FaFacebookSquare/></div>
        <div className='divv'><FaTwitter /></div>
       <div className='divv'> <GiThunderball /></div>
  </div>
  <div className="h__divv">
    <p>Designed&Built by</p>
    <p>Fidan Hasanova</p>
  </div>
      
        </div>
    </footer>
    </div>
  )
}

export default Footer
