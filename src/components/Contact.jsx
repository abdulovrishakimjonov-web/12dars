import React from 'react'
import ayol from '../img/ayol.png'

const Contact = () => {
  return (
    <div className="px-4 py-8">
        <section className='mb-10 sm:mb-15'>
            <div className='max-w-[1250px] m-auto'>
                <div className='flex flex-col lg:flex-row justify-around items-center gap-8 lg:gap-4'>
                    <div className='w-full lg:w-auto'>
                        <h3 className='text-[#1F2533] text-2xl sm:text-3xl lg:text-4xl font-bold mb-5'>Seedra helps to grow fast and efficiant</h3>
                        <p className='text-[#1F2533] text-sm sm:text-base leading-relaxed'>
                        SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George
                        <br /><br />
                        Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings.
                        <br />
                        Your easy growing experience is our guarantee
                        <br />
                        Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more
                        <br /><br />
                        Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product
                        </p>
                    </div>
                    <div className='flex justify-center w-full lg:w-auto'>
                        <img className='w-full max-w-[400px] lg:max-w-none' src={ayol} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact