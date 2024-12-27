import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="h-[500px] md:h-[713px] w-full relative banner">
    {/* Background Image */}
    <Image
      src="/herohero.jpg"
      width={1440}
      height={713}
      className="absolute w-full h-full object-cover bg-[#FFF3E3]"
      alt="Background Image"
    />
    
    {/* Banner Content */}
    <div className="banner-content bg-[#FFF3E3] p-5 z-30 absolute right-5 md:right-12 top-1/2 transform -translate-y-1/2 w-[90%] md:w-[643px]">
      <h1 className="text-[#333333] font-poppins font-bold text-[24px] md:text-[32px]">
        New Arrival
      </h1>
      <h5 className="text-[32px] md:text-[52px] text-[#B88E2F] font-poppins font-bold leading-tight">
        Discover Our <br /> New Collection
      </h5>
      <p className="font-poppins font-bold text-[14px] md:text-[18px] text-[#333333]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
      </p>
      <button className="w-[150px] md:w-[222px] h-[50px] md:h-[74px] mt-4 font-poppins font-bold bg-[#B88E2F] text-[#FFFFFF]">
        BUY NOW
      </button>
    </div>
  </div>
  
  );
};

export default Hero 