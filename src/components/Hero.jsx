import React, { useEffect, useState } from 'react'
import barg from '../svg/barg.svg'
import karta from '../svg/karta.svg'
import sliv from '../svg/sliv.svg'
import yshil from '../svg/yshil.svg'
import qulupnay from '../svg/qulupnay.svg'
import sanchqi from '../svg/sanchqi.svg'
import gulcha from '../svg/gulcha.svg'
import qopcha from '../img/qopcha.png'
import star from '../svg/star.svg'
import axios from 'axios'

const Hero = () => {
    const [data, setData] = useState([])
    const [likedItems, setLikedItems] = useState({})

    useEffect(() => {
        axios 
        .get('https://68fa1f53ef8b2e621e7ed891.mockapi.io/api/avatar')
        .then((res) => {setData(res.data)})
        .catch((error) => {console.log('error'), error});
    }, []);

    const toggleLike = (id) => {
        setLikedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }
    
  return (
    <div className="px-4 py-8">
        <section>
            <div className='max-w-[1240px] m-auto mb-10'>
                <div className='mb-10'>
                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-7 gap-4'>
                    <h2 className='text-[#1F2533] text-2xl sm:text-3xl lg:text-4xl font-bold'>Our products.</h2>
                    <button className='text-[#359740] text-sm sm:text-base w-full sm:w-[155px] border-2 border-[#EFEFEF] p-2.5 rounded-md hover:bg-emerald-100 cursor-pointer transition-all'>View all (12)</button>
                </div>
                <div className='flex flex-wrap items-center justify-center sm:justify-between gap-2 sm:gap-3'>
                    <div className='w-[110px] border-2 cursor-pointer rounded-md p-2.5 flex justify-center items-center gap-2 hover:bg-emerald-100 border-[#EFEFEF] transition-all'>
                        <img src={barg} alt="" />
                        <p className="text-xs sm:text-sm">ALL</p>
                    </div>
                    <div className='w-[145px] border-2 cursor-pointer rounded-md p-2.5 flex justify-center items-center gap-2 hover:bg-emerald-100 border-[#EFEFEF] transition-all'>
                        <img src={karta} alt="" />
                        <p className="text-xs sm:text-sm">BUNDLES</p>
                    </div>
                    <div className='w-[129px] border-2 cursor-pointer rounded-md p-2.5 flex justify-center items-center gap-2 hover:bg-emerald-100 border-[#EFEFEF] transition-all'>
                        <img src={sliv} alt="" />
                        <p className="text-xs sm:text-sm">HERBS</p>
                    </div>
                    <div className='w-[178px] border-2 cursor-pointer rounded-md p-2.5 flex justify-center items-center gap-2 hover:bg-emerald-100 border-[#EFEFEF] transition-all'>
                        <img src={yshil} alt="" />
                        <p className="text-xs sm:text-sm">VEGETABLES</p>
                    </div>
                    <div className='w-[145px] border-2 cursor-pointer rounded-md p-2.5 flex justify-center items-center gap-2 hover:bg-emerald-100 border-[#EFEFEF] transition-all'>
                        <img src={qulupnay} alt="" />
                        <p className="text-xs sm:text-sm">FRUITS</p>
                    </div>
                    <div className='w-[157px] border-2 cursor-pointer rounded-md p-2.5 flex justify-center items-center gap-2 hover:bg-emerald-100 border-[#EFEFEF] transition-all'>
                        <img src={sanchqi} alt="" />
                        <p className="text-xs sm:text-sm">SUPPLIES</p>
                    </div>
                    <div className='w-[163px] border-2 cursor-pointer rounded-md p-2.5 flex justify-center items-center gap-2 hover:bg-emerald-100 border-[#EFEFEF] transition-all'>
                        <img src={gulcha} alt="" />
                        <p className="text-xs sm:text-sm">FLOWERS</p>
                    </div>
                </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 place-items-center'>
                    {
                        data.map((item) => (
                            <div key={item.id} className='w-full max-w-[350px] rounded-lg border-2 border-gray-300 flex flex-col p-5 sm:p-7 relative'>
                                <button 
                                    onClick={() => toggleLike(item.id)}
                                    className='absolute top-5 right-5 text-lg transition-all'
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill={likedItems[item.id] ? "#FFCF55" : "none"} stroke={likedItems[item.id] ? "#FFCF55" : "#FFCF55"} strokeWidth="2">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                                    </svg>
                                </button>
                                <img className='mb-2' src={qopcha} alt="" />
                                <p className='flex items-center gap-4 text-gray-400 underline mb-2 text-sm'>
                                    <div className='flex gap-1 items-center'>
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                        <img src={star} alt="" />
                                    </div>
                                    {item.rating}
                                </p>
                                <p className='text-sm sm:text-base font-semibold mb-3'>{item.malumot}</p>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xl sm:text-2xl font-bold text-[#1F2533]'>$12.56</p>
                                    <p className='border-2 border-gray-300 text-[#359740] cursor-pointer w-[39px] flex justify-center p-2 rounded-md hover:bg-emerald-100 transition-all'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    </div>
  )
}

export default Hero