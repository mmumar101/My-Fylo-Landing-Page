import React from "react"
import logo from "../images/logo.svg";

function Header() {
  return (
    <div className='flex justify-between item-center px-5 py-6 lg:w-[5/6] lg:max-auto'>
        <img src = {logo} alt='' className='h-6'/>
        <ul className='flex list-none text-sm'>
            <li className="pr-3 hover:underline cursor-pointer">Features</li>
            <li className="pr-3 hover:underline cursor-pointer">Team</li>
            <li className="pr-3 hover:underline cursor-pointer">Sign In</li>
        </ul>
    </div>
  )
}

export default Header