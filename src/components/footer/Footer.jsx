import React from 'react'
import {FaTwitter,FaInstagram,FaGithub} from 'react-icons/fa';
import './footer.css'
const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container grid">
        <div className="footer__socials">
            <a href="https://github.com/serhatKk" target="_blank" className="footer__socials-link">
                <FaGithub/>
            </a>
            <a href="https://www.instagram.com/serhat.khrmn" target="_blank" className="footer__socials-link">
                <FaInstagram/>
            </a>
            <a href="https://twitter.com/Serhat_khrmn" target="_blank" className="footer__socials-link">
                <FaTwitter/>
            </a>
        </div>
        
        <p className="footer__copyright text-cs"> &copy; 2024 <span>SerO </span>All Rights Reserved</p> 
        <p className="footer__copyright text-cs">Developed By <span>SertanK</span></p>
    </div>
   </footer>
  )
}

export default Footer