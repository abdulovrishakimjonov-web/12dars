import React, { useState } from 'react';
import Logo from '../svg/Logo.svg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-3 sticky top-0 left-0 z-50 shadow-md bg-white mb-10">
      <div className="max-w-[1250px] mx-auto px-4 flex items-center justify-between">
        <div className="">
          <div className="text-2xl font-bold text-green-600">
            <img src={Logo} alt="" />
          </div>
        </div>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <a className="text-[14px] text-[#70737C] font-semibold hover:text-[#359740] transition-colors" href="/">
                ALL PRODUCTS
              </a>
            </li>
            <li>
              <a className="text-[14px] text-[#70737C] font-semibold hover:text-[#359740] transition-colors" href="/about">
                ABOUT SEEDRA
              </a>
            </li>
            <li>
              <a className="text-[14px] text-[#70737C] font-semibold hover:text-[#359740] transition-colors" href="/blog">
                OUR BLOG
              </a>
            </li>
            <li>
              <a className="text-[14px] text-[#70737C] font-semibold hover:text-[#359740] transition-colors" href="/contacts">
                CONTACTS
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex gap-8 items-center">
          <div className="flex gap-3">
            <i className="fa-brands fa-instagram text-[24px] text-[#70737C] cursor-pointer hover:text-[#359740] transition-colors"></i>
            <i className="fa-brands fa-square-facebook text-[24px] text-[#70737C] cursor-pointer hover:text-[#359740] transition-colors"></i>
          </div>

          <div className="w-[285px]">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <div className="h-10 w-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
                  </svg>
                </div>
              </div>
              <input
                id="search"
                type="text"
                placeholder="Search"
                className="block w-full pl-16 pr-4 py-3 bg-white border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:shadow-md transition-shadow duration-150"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <i className="fa-regular fa-heart text-[24px] text-[#70737C] cursor-pointer hover:text-[#359740] transition-colors"></i>
            <i className="fa-solid fa-cart-shopping text-[24px] text-[#70737C] cursor-pointer hover:text-[#359740] transition-colors"></i>
          </div>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <i className="fa-solid fa-magnifying-glass text-[20px] text-[#70737C] cursor-pointer hover:text-[#359740]"></i>
          <i className="fa-regular fa-heart text-[20px] text-[#70737C] cursor-pointer hover:text-[#359740]"></i>
          <i className="fa-solid fa-cart-shopping text-[20px] text-[#70737C] cursor-pointer hover:text-[#359740]"></i>
          
          <button
            onClick={toggleMenu}
            className="text-[#70737C] hover:text-[#359740] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 bg-white border-t border-gray-100">
          <ul className="space-y-4">
            <li>
              <a
                className="block text-[14px] text-[#70737C] font-semibold hover:text-[#359740] transition-colors"
                href="#products"
                onClick={() => setIsMenuOpen(false)}
              >
                ALL PRODUCTS
              </a>
            </li>
            <li>
              <a
                className="block text-[14px] text-[#70737C] font-semibold hover:text-[#359740] transition-colors"
                href="#about"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT SEEDRA
              </a>
            </li>
            <li>
              <a
                className="block text-[14px] text-[#70737C] font-semibold hover:text-[#359740] transition-colors"
                href="#blog"
                onClick={() => setIsMenuOpen(false)}
              >
                OUR BLOG
              </a>
            </li>
            <li>
              <a
                className="block text-[14px] text-[#70737C] font-semibold hover:text-[#359740] transition-colors"
                href="#contacts"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACTS
              </a>
            </li>
          </ul>

          <div className="flex gap-4 mt-6 pt-6 border-t border-gray-100">
            <i className="fa-brands fa-instagram text-[24px] text-[#70737C] cursor-pointer hover:text-[#359740]"></i>
            <i className="fa-brands fa-square-facebook text-[24px] text-[#70737C] cursor-pointer hover:text-[#359740]"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;