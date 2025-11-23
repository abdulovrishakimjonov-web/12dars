import React from 'react'
import ayol from '../img/ayol.png'

const Contact = () => {
  return (
    <div>
        <section className='mb-15'>
            <div className='max-w-[1250px] m-auto'>
                <div className='flex justify-around items-center '>
                    <div>
                        <h3 className='text-[#1F2533] text-[36px] font-bold mb-5'>Seedra helps to grow fast and <br /> efficiant</h3>
                        <p className='text-[#1F2533] text-[16px]'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and  <br /> professional instructions created by PhD Helga George <br /> <br />

Be sure of our quality - the freshest batches of this season. Non- <br />GMO, Heirloom - our seeds were tested and have the best <br /> germination ratings.  <br />
  Your easy growing experience is our guarantee <br />
Spinach commom culinary uses: salads, soups, smoothies, lasagne, <br /> pizza, pies, risotto, and more <br /> <br />

  Proudly sourced in the USA - our garden seeds are grown, <br /> harvested, and packaged in the USA. We support local farmers and <br /> are happy to produce this American-made product</p>
                    </div>
                    <div>
                        <img src={ayol} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact