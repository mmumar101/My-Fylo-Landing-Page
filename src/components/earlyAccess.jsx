import React from 'react'

const earlyAccess = () => {
  return (
    <div className='bg-[#202A3C] lg:w-[60%] justify-center md:w-[70%] mt-4 mx-auto relative -bottom-14 h-50'>
        <h3 className='text-center pt-5'>
            Get early access today
        </h3>
        <p className='text-sm font-thin text-center py-5'>It only takes a minutes to sign up and our free starter tier is extremely generous, if you have any questions, our support team would be happy to help you</p>


        <div className='flex-col-1 item-center gap-2 lg:flex justify-center md:pb-5 pb-5'>
            <input type="text" id="large-input" placeholder='example@email.com' className="w-full md:w-[70%] lg:w-[70%] md:pb-5 h-10 text-gray-900 border rounded-lg"></input>
            <button for="large-input" className="w-full md:w-[24%] lg:w-[15%] text-white h-10 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5">Get started for free</button>
        </div>
    </div>
  )
}

export default earlyAccess