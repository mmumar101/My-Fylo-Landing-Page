import React from 'react';
import logo from '../images/bg-quotes.png';
import image1 from '../images/profile-1.jpg'
import image2 from '../images/profile-2.jpg'
import image3 from '../images/profile-3.jpg'

const 
touch = () => {
  return (
    
    <div> 
        <img src={logo} alt='bg-quotes' className='w-5 h-5 '/>
        <div className=' sm:flex-col-1 gap-3 md:flex -col md:w-[70%] lg:flex flex-row  lg:w-[60%] relative -bottom-10 mx-auto'>
        
            <div className='bg-[#202A3C]'>
                <p className='text-sm font-thin py-6 px-6 justify-center'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well oiled collaboration machine</p>
                <img src={image1} alt="image1" className='h-6 w-6 rounded-full mx-3 my-3' />
            </div >

            <div className='bg-[#202A3C]'>
                <p className='text-sm font-thin py-6 px-6 justify-center'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well oiled collaboration machine</p>
                <img src={image2} alt="image2" className='h-6 w-6 rounded-full mx-3 my-3' />
            </div>

            <div className='bg-[#202A3C]'>
                <p className='text-sm font-thin py-6 px-6 justify-center'>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well oiled collaboration machine</p>
                <img src={image3} alt="image3" className='h-6 w-6 rounded-full mx-3 my-3' />
            </div>
        </div>
    </div>
  )
}

export default touch
