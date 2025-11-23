import React from 'react'
import Logo from '../svg/Logo.svg';

const Footer = () => {
  return (
    <div>
      <footer className="px-4">
        <div className='max-w-[1250px] m-auto'>
          <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 lg:gap-16 py-6'>
            <h2 className='text-xs sm:text-sm text-gray-400 font-bold hover:text-[#359740] cursor-pointer transition-colors'>ALL PRODUCTS</h2>
            <div className='hidden sm:block w-1 h-[25px] bg-gray-300'></div>
            <h2 className='text-xs sm:text-sm text-gray-400 font-bold hover:text-[#359740] cursor-pointer transition-colors'>ABOUT SEEDRA</h2>
            <div className='hidden sm:block w-1 h-[25px] bg-gray-300'></div>
            <h2 className='text-xs sm:text-sm text-gray-400 font-bold hover:text-[#359740] cursor-pointer transition-colors'>OUR BLOG</h2>
            <img className='w-20 sm:w-auto' src={Logo} alt="" />
            <h2 className='text-xs sm:text-sm text-gray-400 font-bold hover:text-[#359740] cursor-pointer transition-colors'>Terms&Conditions</h2>
            <div className='hidden sm:block w-1 h-[25px] bg-gray-300'></div>
            <h2 className='text-xs sm:text-sm text-gray-400 font-bold hover:text-[#359740] cursor-pointer transition-colors'>Privacy Policy</h2>
          </div>
          <div className='w-full h-0.5 bg-gray-300'></div>
          <div className='flex flex-col sm:flex-row items-center justify-between py-6 gap-4'>
            <div className='flex gap-3'>
            <i className="fa-brands fa-instagram text-xl sm:text-2xl text-[#70737C] cursor-pointer hover:text-[#359740] transition-colors"></i>
            <i className="fa-brands fa-square-facebook text-xl sm:text-2xl text-[#70737C] cursor-pointer hover:text-[#359740] transition-colors"></i>
            </div>
            <p className='text-[#70737C] text-xs sm:text-sm'>All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer