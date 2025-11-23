import React from 'react'
import avatar from '../svg/avatar.svg'
import fem from '../svg/fem.svg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const About = () => {
  return (
    <div>
        <section className='mb-15'>
            <div className='max-w-[1250px] m-auto'>
                 <div className='mb-10 text-center'>
                    <h2 className='text-[#1F2533] text-[36px] font-bold text-center'>What out clients say</h2>
                 </div>
                   <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper flex justify-center items-center py-10 gap-6"
      >
        <SwiperSlide>
            <div className='w-[540px] shadow-2xl rounded-md px-5'>
                <div className='flex items-center gap-4 mb-4'>
                    <img src={avatar} alt="" />
                <div>
                    <p className='text-[#1F2533] text-[18px] font-semibold'>Carla Samantoes-Diego</p>
                    <p className='text-[#70737C] text-[14px]'>12.09.2021</p>
                </div>
                </div>
                <img className='mb-4' src={fem} alt="" />
                <p className='text-[#1F2533] text-[16px] '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs andn <br /> professional instructions created by PhD Helga George <br />
Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide><div className='w-[540px] shadow-2xl rounded-md '>
                <div className='flex items-center gap-4 mb-4'>
                    <img src={avatar} alt="" />
                <div>
                    <p className='text-[#1F2533] text-[18px] font-semibold'>Carla Samantoes-Diego</p>
                    <p className='text-[#70737C] text-[14px]'>12.09.2021</p>
                </div>
                </div>
                <img className='mb-4' src={fem} alt="" />
                <p className='text-[#1F2533] text-[16px] '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs andn <br /> professional instructions created by PhD Helga George <br />
Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
            </div></SwiperSlide>
        <SwiperSlide>
            <div className='w-[540px] shadow-2xl rounded-md '>
                <div className='flex items-center gap-4 mb-4'>
                    <img src={avatar} alt="" />
                <div>
                    <p className='text-[#1F2533] text-[18px] font-semibold'>Carla Samantoes-Diego</p>
                    <p className='text-[#70737C] text-[14px]'>12.09.2021</p>
                </div>
                </div>
                <img className='mb-4' src={fem} alt="" />
                <p className='text-[#1F2533] text-[16px] '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs andn <br /> professional instructions created by PhD Helga George <br />
Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[540px] shadow-2xl rounded-md '>
                <div className='flex items-center gap-4 mb-4'>
                    <img src={avatar} alt="" />
                <div>
                    <p className='text-[#1F2533] text-[18px] font-semibold'>Carla Samantoes-Diego</p>
                    <p className='text-[#70737C] text-[14px]'>12.09.2021</p>
                </div>
                </div>
                <img className='mb-4' src={fem} alt="" />
                <p className='text-[#1F2533] text-[16px] '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs andn <br /> professional instructions created by PhD Helga George <br />
Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[540px] shadow-2xl rounded-md '>
                <div className='flex items-center gap-4 mb-4'>
                    <img src={avatar} alt="" />
                <div>
                    <p className='text-[#1F2533] text-[18px] font-semibold'>Carla Samantoes-Diego</p>
                    <p className='text-[#70737C] text-[14px]'>12.09.2021</p>
                </div>
                </div>
                <img className='mb-4' src={fem} alt="" />
                <p className='text-[#1F2533] text-[16px] '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs andn <br /> professional instructions created by PhD Helga George <br />
Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[540px] shadow-2xl rounded-md '>
                <div className='flex items-center gap-4 mb-4'>
                    <img src={avatar} alt="" />
                <div>
                    <p className='text-[#1F2533] text-[18px] font-semibold'>Carla Samantoes-Diego</p>
                    <p className='text-[#70737C] text-[14px]'>12.09.2021</p>
                </div>
                </div>
                <img className='mb-4' src={fem} alt="" />
                <p className='text-[#1F2533] text-[16px] '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs andn <br /> professional instructions created by PhD Helga George <br />
Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[540px] shadow-2xl rounded-md '>
                <div className='flex items-center gap-4 mb-4'>
                    <img src={avatar} alt="" />
                <div>
                    <p className='text-[#1F2533] text-[18px] font-semibold'>Carla Samantoes-Diego</p>
                    <p className='text-[#70737C] text-[14px]'>12.09.2021</p>
                </div>
                </div>
                <img className='mb-4' src={fem} alt="" />
                <p className='text-[#1F2533] text-[16px] '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs andn <br /> professional instructions created by PhD Helga George <br />
Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[540px] shadow-2xl rounded-md '>
                <div className='flex items-center gap-4 mb-4'>
                    <img src={avatar} alt="" />
                <div>
                    <p className='text-[#1F2533] text-[18px] font-semibold'>Carla Samantoes-Diego</p>
                    <p className='text-[#70737C] text-[14px]'>12.09.2021</p>
                </div>
                </div>
                <img className='mb-4' src={fem} alt="" />
                <p className='text-[#1F2533] text-[16px] '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs andn <br /> professional instructions created by PhD Helga George <br />
Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='w-[540px] shadow-2xl rounded-md '>
                <div className='flex items-center gap-4 mb-4'>
                    <img src={avatar} alt="" />
                <div>
                    <p className='text-[#1F2533] text-[18px] font-semibold'>Carla Samantoes-Diego</p>
                    <p className='text-[#70737C] text-[14px]'>12.09.2021</p>
                </div>
                </div>
                <img className='mb-4' src={fem} alt="" />
                <p className='text-[#1F2533] text-[16px] '>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs andn <br /> professional instructions created by PhD Helga George <br />
Be sure of our quality - the freshest batches of this season. <br /> Non-GMO, Heirloom - our seeds were tested and have the <br /> best germination ratings. </p>
            </div>
        </SwiperSlide>
      </Swiper>
            </div>
        </section>
    </div>
  )
}

export default About