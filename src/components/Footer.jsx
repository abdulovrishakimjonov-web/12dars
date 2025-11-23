import React from 'react'
import Logo from '../svg/Logo.svg';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='max-w-[1250px] m-auto'>
          <div className='flex items-center gap-16 py-6'>
            <h2 className='text-[14px] text-gray-400 font-bold hover:text-[#359740] '>ALL PRODUCTS</h2>
            <div className='w-1 h-[25px] bg-gray-300'></div>
            <h2 className='text-[14px] text-gray-400 font-bold hover:text-[#359740] '>ABOUT SEEDRA</h2>
            <div className='w-1 h-[25px] bg-gray-300'></div>
            <h2 className='text-[14px] text-gray-400 font-bold hover:text-[#359740] '>OUR BLOG</h2>
            <img src={Logo} alt="" />
            <h2 className='text-[14px] text-gray-400 font-bold hover:text-[#359740] '>Terms&Conditions</h2>
            <div className='w-1 h-[25px] bg-gray-300'></div>
            <h2 className='text-[14px] text-gray-400 font-bold hover:text-[#359740] '>Privacy Policy</h2>
          </div>
          <div className='w-full h-0.5 bg-gray-300'></div>
          <div className='flex items-center justify-between py-6'>
            <div className='flex gap-3'>
            <i className="fa-brands fa-instagram text-[24px] text-[#70737C] cursor-pointer hover:text-[#359740] transition-colors"></i>
            <i className="fa-brands fa-square-facebook text-[24px] text-[#70737C] cursor-pointer hover:text-[#359740] transition-colors"></i>
            </div>
            <p className='text-[#70737C] text-[14px]'>All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer