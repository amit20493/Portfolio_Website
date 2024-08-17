import React from 'react';
import Logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";



const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>

        <div className='flex flex-shrink-0 items-center'>

            <img className='mx-2 w-10' src={Logo} alt="logo"/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/amit-malik-6a1763203/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            </a>
            <a href="https://github.com/amit20493" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
            <a href="mailto:amitnarela34@gmail.com" target="_blank" rel="noopener noreferrer">
            <BiLogoGmail />
            </a>


        </div>
    </nav>
  )
}

export default Navbar
