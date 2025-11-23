import React from 'react';
import olow from '../svg/olow.svg';
import barglar from '../img/barglar.png';
import gular from '../img/gular.png';
import lemon from '../img/lemon.png';

const Showcase = () => {
  return (
    <div className="mb-20">
      <div className="max-w-[1250px] mx-auto">
        <div className="w-full rounded-2xl bg-[#EAF1EB] flex flex-col lg:flex-row items-center justify-between mb-8 overflow-hidden">
          <div className="px-6 py-8 lg:px-12 lg:py-12 w-full lg:w-auto">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-[#1F2533] leading-tight mb-4">
              SEEDRA Basil Seeds for <br className="hidden md:block" /> Indoor and Outdoor Planting
            </h2>
            <p className="text-[#1F2533] text-sm md:text-[16px] mb-6 leading-relaxed">
              Be sure of our quality - the freshest batches of this season. Non-GMO, <br className="hidden lg:block" />
              Heirloom - our seeds were tested and have the best germination ratings. <br className="hidden lg:block" />
              Your easy growing experience is our guarantee
            </p>
            
            <div className="flex items-center gap-4 md:gap-6 mb-6 flex-wrap">
              <img src={olow} alt="rating" className="" />
              <h2 className="text-3xl md:text-[42px] text-[#1F2533] font-bold">$12.56</h2>
              <p className="text-lg md:text-[22px] text-[#70737C] font-bold line-through">$15.56</p>
            </div>
            
            <div className="flex items-center gap-3 flex-wrap">
              <button className="cursor-pointer w-full sm:w-[163px] bg-[#359740] rounded-md text-white text-[16px] py-3 px-6 hover:bg-emerald-900 transition-all font-medium">
                Add to cart
              </button>
              <button className="cursor-pointer w-full sm:w-[131px] bg-white rounded-md text-[#359740] text-[16px] py-3 px-6 hover:bg-emerald-100 transition-all font-medium border border-emerald-200">
                Discover
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-auto flex justify-center lg:justify-end p-4 lg:p-0">
            <img 
              src={barglar} 
              alt="Basil Seeds" 
              className="w-full max-w-[380px] lg:w-[380px] h-auto rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="bg-[#FFFDEC] w-full rounded-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden gap-2">
          <img 
            src={gular} 
            alt="Flowers" 
            className=" rounded-2xl object-cover"
          />
          
          <div className="p-6 md:p-4 text-center flex-1">
            <h2 className="text-xl md:text-[24px] text-[#1F2533] font-semibold mb-2">
              We sell seeds
            </h2>
            <p className="text-[#70737C] text-sm md:text-[16px] leading-relaxed">
              that always sprout and gardening supplies which never break
            </p>
          </div>
          
          <img 
            src={lemon} 
            alt="Lemon" 
            className=" rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;