import React from 'react';
import logo from '../images/logo.svg';
import location from '../images/icon-location.svg';
import phone from '../images/icon-phone.svg';
import email from '../images/icon-email.svg';
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"

const footer = () => {
  return (
    <div className='bg-[#0B1524] pt-32 px-8 pb-14 gap-5  text-sm font-thin  w-full justify-content'>
        <img src={logo} alt= 'company logo' className='h-6 mb-8'/>
        <div className=' flex '>
            <div className=' w-[40%] '>
                <img src={location} alt='location-icon' className='h-3 w-3npm audit fix --force'/>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <div className='flex gap-3 my-auto mx-auto pt-5'>
                    <img src={email} alt="" className='w-4 h-4'/>
                    <p>+2348068902035</p>
                  </div>
                  <div className='flex gap-3 pt-3'>
                    <img src={phone} alt="" className='w-4 h-4'/>
                    <p>mmumar101@gmail.com</p>
                  </div>
                </p>
            </div>
          

         <div className='flex gap-10 justify-content'>
          
            <div className=' mt-4 '>
              <div className='flex flex-col'>
                <button className='focus:font-bold'>About us</button>
                <button className='focus:font-bold'>Jobs</button>
                <button className='focus:font-bold'>Press</button>
                <button className='focus:font-bold'>Blog</button>
             </div>
            </div>

            <div className='mt-4'>
              <div className='flex flex-col'>
               <button className='focus:font-bold'>Contact us</button>
               <button className='focus:font-bold'>Terms</button>
               <button className='focus:font-bold'>Privacy</button>
            </div>
          </div>
     
        </div>


      </div>

          <div className='flex gap-3 justify-center mt-5 lg:mt-20px'>
              <FaFacebook className='border border-white rounded-full h-7 w-7 p-1'/>
              <FaTwitter className='border border-white rounded-full h-7 w-7 p-1' />
              <FaInstagram className='border border-white rounded-full h-7 w-7 p-1'/>
          </div>
    </div>
  )
}

export default footer