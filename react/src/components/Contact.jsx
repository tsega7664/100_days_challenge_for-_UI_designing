import React from 'react';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 text-gray-400">
      <h1 className="py-4 text-4xl text-center text-gray-500">Contact Me</h1>
     <div className='lg:flex  m-16 space-y-8  lg:space-x-16'>
        <div className='flex flex-col items-center'>
          <div className='flex items-center lg:mt-32 p-2'>
            <FaUser size={40} className='text-[#DAA520]' />
            <div className='ml-2 p-2'>
              <h1 className='text-gray-500 font-bold'>Name</h1>
              <p>Yeabsira Zelalem</p>
            </div>
          </div>
          <div className='flex items-center p-2'>
            <FaPhone size={40} className='text-[#DAA520]' />
            <div className='ml-2 p-2'>
              <h1 className='text-gray-500 font-bold'>Phone</h1>
              <p>+251-976-647-859</p>
            </div>
          </div>
          <div className='flex items-center p-2'>
            <FaMapMarkerAlt size={40} className='text-[#DAA520]' />
            <div className='ml-2 p-2'>
              <h1 className='text-gray-500 font-bold'>Address</h1>
              <p>Ethiopia, Addis Ababa</p>
            </div>
          </div>
          <div className='flex items-center p-2 ml-20'>
            <FaEnvelope size={40} className='text-[#DAA520]' />
            <div className='ml-2 p-2'>
              <h1 className='text-gray-500 font-bold'>Email</h1>
              <p>yeabsirazelalem791@gmail.com</p>
            </div>
          </div>
          
        </div>
        <div className='w-full lg:w-[75%]'>
          <form action="mailto:yeabsirazelalem791@gmail.com" method="" encType="multipart/form-data">
            <div className="flex flex-col space-y-4">
              <label className="uppercase text-sm mt-2">Name</label>
              <input type="text" name="name" className="border-2 rounded-lg p-2 border-[#DAA520]" />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="uppercase text-sm mt-2">Email</label>
              <input type="email" name="email" className="border-2 rounded-lg p-2 border-[#DAA520]" />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="uppercase text-sm mt-2">Subject</label>
              <input type="text" name="subject" className="border-2 rounded-lg p-2 border-[#DAA520]" />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="uppercase text-sm mt-2">Message</label>
              <textarea rows="5" name="message" className="border-2 rounded-lg p-3 border-[#DAA520]"></textarea>
            </div>
            <button className="bg-[#DAA520] text-white lg:w-[50%]  mt-2 py-3 px-2 rounded-lg hover:bg-white hover:text-[#DAA520] hover:font-bold">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
