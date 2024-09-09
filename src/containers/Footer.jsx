import React from 'react'

import {Logo} from "../assets";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-between border-t border-gray-300">
        <div className="flex items-center justify-center gap-3 py-3">
            <img src={Logo} alt='' className='w-8 h-auto object-contain'/>
            <p>leresume</p>
        </div>

        <div className="flex items-center justify-center gap-6">
            <Link to={"/"} className='text-blue-700 text-sm'>
            Home
            </Link>
            <Link to={"/"} className='text-blue-700 text-sm'>
            Contact
            </Link>
            <Link to={"/"} className='text-blue-700 text-sm'>
            Privacy Policy
            </Link>
        </div>
        
    </div>
  )
}

export default Footer