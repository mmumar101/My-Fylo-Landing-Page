import React from 'react'
import illustration1 from "../images/illustration-intro.png"

const heroSection = () => {
  return (
    <div className='flex flex-col text-center justify-center item-center gap-6 mt-5w-[80%] mx-auto lg:w-[50%]'>
        <img src= {illustration1} alt='intro illustration' className=''/>
        <div className='flex flex-col gab-5 md:w-[70%] text-center mx-auto gap'>
          <h3 className='text-xl lg:text-2x1 font-bold'>All your files in one secure location, accessable accessable anywhere.</h3>
            <p className='text-sm lg:text-lg font-thin'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate  with friends, family and co-workers.</p>
        </div>
        <div className='w-2/3 mx-auto lg:w-60'>
            <custonButton text='Get Started'/>
        </div>
    </div>
    
  )
}

export default heroSection