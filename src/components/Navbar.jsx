import React from 'react'
import soat from '../svg/soat.svg'
import ote from '../img/ote.png'
import savat from '../img/savat.png'
import honim from '../img/honim.png'


const Navbar = () => {
  return (
    <div className="px-4 py-8">
        <section>
            <div className='max-w-[1250px] m-auto mb-10'>
                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-12 gap-4'>
                    <h2 className='text-[#1F2533] text-2xl sm:text-3xl lg:text-4xl font-bold'>Our blog.</h2>
                    <button className='text-[#359740] text-sm sm:text-base w-full sm:w-[173px] rounded-md border-2 border-gray-300 p-2 cursor-pointer hover:bg-emerald-100 transition-all'>Go to our blog</button>
                </div>
                <div className='flex flex-col lg:flex-row items-start gap-5 justify-center sm:gap-7'>
                    <div className='flex flex-col gap-5 sm:gap-7 w-full lg:w-auto'>
                      <div className='w-full lg:w-[730px] rounded-2xl bg-[#EAF1EB] flex flex-col sm:flex-row items-center sm:items-stretch justify-between'>
                        <div className='p-6 sm:px-8 sm:py-6 flex flex-col justify-center'>
                        <p className='text-xs sm:text-sm text-[#70737C] flex gap-1 items-center mb-3'><img src={soat} alt="" />12.09.2021</p>
                        <h3 className='text-xl sm:text-2xl text-[#1F2533] font-semibold mb-3'>How to plant spinach correctly <br className="hidden sm:block" /> in winter</h3>
                        <p className='text-[#70737C] text-xs sm:text-sm mb-4'>In most areas, successive sowing can be done from early <br className="hidden sm:block" /> spring until early winter, but more often during hotter <br className="hidden sm:block" /> months...</p>
                        <button className='text-[#359740] text-sm sm:text-base w-[106px] bg-white p-2 hover:bg-emerald-100 cursor-pointer rounded-md'>Read</button>
                        </div>
                        <div className='flex items-end justify-center sm:justify-end w-full sm:w-auto'>
                          <img className='max-w-[200px] sm:max-w-none' src={ote} alt="" />
                        </div>     
                      </div>
                      <div className='flex flex-col sm:flex-row items-center gap-5 sm:gap-7'>
                        <div className='w-full sm:w-[350px] bg-[#EFF2F8] rounded-2xl flex items-end'>
                          <div className='p-4 sm:p-'>
                          <p className='text-xs sm:text-sm text-[#70737C] flex gap-1 items-center mb-3'><img src={soat} alt="" />12.09.2021</p>
                          <h3 className='text-lg sm:text-xl text-[#1F2533] font-semibold mb-3'>How to plant spinach correctly <br className="hidden sm:block" /> in winter</h3>
                          <button className='text-[#359740] text-sm sm:text-base w-[106px] bg-white p-2 hover:bg-emerald-100 cursor-pointer rounded-md'>Read</button>
                          </div>
                          <div>
                          <img className='max-w-[120px] sm:max-w-none' src={savat} alt="" />
                          </div>
                        </div>
                         <div className='w-full sm:w-[350px] bg-[#EFF2F8] rounded-2xl flex items-end'>
                          <div className='p-4 sm:p-'>
                          <p className='text-xs sm:text-sm text-[#70737C] flex gap-1 items-center mb-3'><img src={soat} alt="" />12.09.2021</p>
                          <h3 className='text-lg sm:text-xl text-[#1F2533] font-semibold mb-3'>How to plant spinach correctly <br className="hidden sm:block" /> in winter</h3>
                          <button className='text-[#359740] text-sm sm:text-base w-[106px] bg-white p-2 hover:bg-emerald-100 cursor-pointer rounded-md'>Read</button>
                          </div>
                          <div>
                          <img className='max-w-[120px] sm:max-w-none' src={savat} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='w-full lg:w-[350px] rounded-2xl bg-[#EFF2F8]'>
                      <div className='px-4 sm:px-6 py-3'>
                        <p className='text-xs sm:text-sm text-[#70737C] flex gap-1 items-center mb-3'><img src={soat} alt="" />12.09.2021</p>
                      <h3 className='text-xl sm:text-2xl text-[#1F2533] font-semibold mb-3'>How to plant spinach <br className="hidden sm:block" /> correctly in winter</h3>
                      <p className='text-[#70737C] text-xs sm:text-sm mb-4'>In most areas, successive sowing can be <br className="hidden sm:block" /> done from early spring until early winter, but <br className="hidden sm:block" /> more often during hotter months... </p>
                      <button className='text-[#359740] text-sm sm:text-base w-[106px] bg-white p-2 hover:bg-emerald-100 cursor-pointer rounded-md'>Read</button>
                      </div>
                      <div className='px-4 sm:px-8 flex justify-center'><img className='w-full max-w-[225px]' src={honim} alt="" /></div>
                    </div>
                    </div>
            </div>
        </section>
    </div>
  )
}

export default Navbar