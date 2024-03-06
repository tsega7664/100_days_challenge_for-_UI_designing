import React from 'react'
import image2 from "../assets/image2.jpg"
import bagde from "../assets/badge.jpg"

export const Services = () => {
  return (
    <div id="projects" className="max-w-[1040px] mt-24 text-center md:pl-20 py-16 ml-32 max-md:mx-8">
            <hr className="w-64 mx-auto border-t-2 border-[#DAA520] mb-16" />

            <div>
                <h1 className='text-4xl text-gray-500 py-4'>Experience</h1>
            <p className='mx-12 text-center  text-gray-400'>I have intermediate-level experience in developing user interfaces and projects across multiple domains. Through practical exposure, I've refined my skills in creating user-friendly UI designs that prioritize usability and aesthetics. My project involvement ranges from smaller-scale applications to mid-sized projects, allowing me to gain valuable hands-on experience and enhance my proficiency.</p>
            </div>
            <div className='lg:flex mt-16 rounded-lg shadow-lg p-4'>
              <div className='mt-16 text-left text-gray-400 px-4'>
                <p className='text-sm mx-8'>My experience encompasses aspects such as layout design, color theory, typography, and user interaction, enabling me to craft UIs that are both functional and aesthetically pleasing. I'm committed to staying updated with the latest design trends and technologies to deliver high-quality results consistently.</p>
              <div className='mt-4 mx-8'>
              <button className='bg-[#DAA520] sm:p-2 sm:text-sm rounded-lg shadow-lg text-white text-sm hover:bg-white hover:text-[#DAA520] focus:outline-none focus:ring focus:ring-[#DAA520] focus:ring-opacity-50 mb-2 sm:mb-0'>
                    <a href='https://github.com/tsega7664'>Visit My Github</a> 
                  </button>
              </div>
              </div> 
              
              <div >
                <img className='rounded-lg shadow-lg' src="https://images.wondershare.com/mockitt/ui-design/ui-example-round-corners-trend.png" alt="" />
              </div>

            </div>
            <div className='lg:flex mt-16 rounded-lg shadow-lg p-4'>
            <div >
                <img className='rounded-lg shadow-lg' src={image2} alt="" />
              </div>
              <div className='mt-16 text-left text-gray-400 px-4'>
                <p className='text-sm mx-8'>I have extensive experience as a front-end developer for a federal prison, where I honed my skills in designing user-friendly and responsive UIs. Through this role, I developed strong communication and customer service abilities, ensuring effective collaboration and support throughout projects.</p>
              <div className='mt-4 mx-8  flex justify-end'>
              <button className=' bg-[#DAA520] sm:p-2 sm:text-sm rounded-lg shadow-lg text-white  text-sm hover:bg-white hover:text-[#DAA520] focus:outline-none focus:ring focus:ring-[#DAA520] focus:ring-opacity-50 mb-2 sm:mb-0'>
                    <a href='https://github.com/tsega7664'>Visit My Project</a> 
                  </button>
              </div>
              </div> 
              </div>
              <div className='lg:flex mt-16 rounded-lg shadow-lg p-4'>
              <div className='mt-16 text-left text-gray-400 px-4'>
                <p className='text-sm mx-8'>By completing courses offered by IBM, I cultivated a wide range of valuable skills. These include enhanced interpersonal capabilities, which enable effective communication and collaboration within teams. Additionally, I developed strong problem-solving skills, allowing me to tackle complex challenges efficiently and find effective solutions.</p>
              <div className='mt-4 mx-8'>
              <button className='bg-[#DAA520] sm:p-2 sm:text-sm rounded-lg shadow-lg text-white text-sm hover:bg-white hover:text-[#DAA520] focus:outline-none focus:ring focus:ring-[#DAA520] focus:ring-opacity-50 mb-2 sm:mb-0'>
                    <a href='https://www.credly.com/badges/e8126e73-5d34-435b-9d05-3d756348d2da/public_url'>Visit My Credly</a> 
                  </button>
              </div>
              </div> 
              
              <div >
                <img className='rounded-lg shadow-lg' src={bagde} alt="" />
              </div>

            </div>
    </div>
  )
}
