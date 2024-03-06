import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTelegram, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import {AiOutlineHome, AiOutlineMenu,AiOutlineProject,AiOutlineMail} from "react-icons/ai"
import {GrProjects} from "react-icons/gr";
import {BsPerson} from "react-icons/bs";
import image from "../assets/me.png"
import Yeabsira_resume from "../assets/Yeabsira's_resume.pdf"
export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }
  const handleDownload = () => {
    
    const link = document.createElement('a');
    link.href = Yeabsira_resume;
    link.download = 'Yeabsira_resume'; 
    link.click(); 
  };
  return (
    <div className='flex flex-col w-full h-screen bg-gradient-to-r from-gray-200 to-[#DAA520]'>
        <div>
           <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
                {nav ? <div onClick={handleNav}
                className="fixed w-full h-screen flex flex-col justify-start  z-20 bg-white/90">
                   
                <a href="#main" className="w-[25%]   flex  text-[#DAA520] rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#DAA520] hover:text-white">
                <AiOutlineHome size={20} />
                <span className="pl-4">Home</span>
                </a>
                <a href="#about" onClick={handleNav}  className="w-[25%]  text-[#DAA520] flex  rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#DAA520] hover:text-white">
                <GrProjects size={20} />
                <span className="pl-4">About</span>
                </a>
                <a href="#skill" onClick={handleNav}  className="w-[25%]  text-[#DAA520] flex  rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#DAA520] hover:text-white">
                <AiOutlineProject size={20} />
                <span className="pl-4">Skills</span>
                </a>
                <a href="#projects" onClick={handleNav}  className="w-[25%]  text-[#DAA520] flex  rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#DAA520] hover:text-white">
                <BsPerson size={20} />
                <span className="pl-4">Services</span>
                </a>
                <a href="#contact" onClick={handleNav}  className="w-[25%] text-[#DAA520] flex  rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#DAA520] hover:text-white">
                <AiOutlineMail size={20} />
                <span className="pl-4">Contact Me</span>
                </a>
        </div>
        :
        ''//empty
      }
        </div>
    <div className='flex flex-row'>
      
      <div className='bg-gray-100 w-full h-screen items-center'>
        <div className='items-center m-16'>
          <h2 className='sm:text-3xl font-bold text-shadow-lg'>Portfolio.</h2>
        </div>
        <div className='pl-32'>
          <h1 className='text-2xl sm:text-6xl font-bold text-shadow-lg'>I'm Yeabsira Zelalem</h1>
          <h2 className="flex text-sm pt-4 pl-2 sm:pl-16 text-gray-800 sm:text-2xl"> A  <TypeAnimation className='text-[#DAA520]'
            sequence={[
              'Software Engineer',
              2000, 
              'Developer',
              2000,
              'Programmer',
              2000,
              'Poet',
              2000
            ]}
            wrapper="div"
            speed={50}
            style={{ fontSize: '1em', paddingLeft:'5px' }}
            repeat={Infinity}
          />
          </h2>
        </div>
        <div className='flex flex-col sm:flex-row mx-[180px] mt-8'>
          
           <a href='mailto:yeabsirazelalem791@gmail.com'className='hover:bg-white  sm:text-sm px-16 py-3 font-bold rounded-lg shadow-lg hover:text-[#DAA520] text-sm bg-[#DAA520] text-white focus:outline-none focus:ring focus:ring-[#DAA520] focus:ring-opacity-50'> HIRE ME →</a>
           <button onClick={handleDownload} className="text-[#DAA520] bg-white lg:w-[50%]  mt-2 py-3 px-2 rounded-lg hover:text-white hover:bg-[#DAA520] hover:font-bold">
              Download My CV
            </button>
        </div>
        <div className="flex justify-center mt-44">
          <a href="https://t.me/y_a_b_u_Z" target="_blank" rel="noopener noreferrer" className="mx-2 px-4 ">
            <FaTelegram size={24} className='text-[#DAA520]'/>
          </a>
          <a href="https://github.com/tsega7664" target="_blank" rel="noopener noreferrer" className="mx-2 px-4 ">
            <FaGithub size={24} className='text-[#DAA520]' />
          </a>
          <a href="https://www.linkedin.com/in/yeabsira-zelalem-8455052ab/" target="_blank" rel="noopener noreferrer" className="mx-2 px-4 ">
            <FaLinkedin size={24} className='text-[#DAA520]' />
          </a>
          <a href="mailto:yeabsirazelalem791@gmail.com" className="mx-2 px-4 ">
            <FaEnvelope size={24} className='text-[#DAA520]' />
          </a>
        </div>
      </div>
      <div className='flex flex-col '>
        
        <div className='text-white  justify-evenly  ml-24 max-md:hidden mt-4'>
          <a href='' className='font-bold hover:border-2 border-white rounded-lg mx-8 p-2 '>Home</a>
          <a href='#about' className='font-bold hover:border-2 border-white rounded-lg mx-8 p-2'>About</a>
          <a href='#skill' className='font-bold hover:border-2 border-white rounded-lg mx-8 p-2'>Skills</a>
          <a href='#projects' className='font-bold hover:border-2 border-white rounded-lg mx-8 p-2'>Experience</a>
          <a href='#contact' className='font-bold hover:border-2 border-white rounded-lg mx-8 p-2'>ContactMe</a>
       
        </div> 
        <div className='m-32 mt-32 max-md:hidden flex items-center rounded-full overflow-hidden'>
          <img className="w-96 h-96  rounded-full border-8 border-white   border-hidden " src={image} alt="Girl" />
        </div>
      </div>
    </div>
    </div>
  )
}
