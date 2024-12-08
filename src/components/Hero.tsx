import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='h-[713px] w-full relative banner' >
    <Image src="/herohero.jpg" width={1440} height={100} className='absolute w-full h-full  ' alt="" />    
  
   
    <div className="banner-content bg-[#FFF3E3] p-5 z-30  absolute right-12 top-2/4 -translate-y-2/4 w-[643px]"><br/>
    <h1 className='text-[#333333] font-poppins font-bold'>New Arrival</h1>
    <h5 className=' text-[52px] text-[#B88E2F]  font-poppins font-bold'>Discover Our <br />New Collection</h5>
    <p className=' font-poppins font-bold text-[18px] text-[#333333] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
    <br/>
    <button className='w-[222px] h-[74px] pt-[25px] font-poppins font-bold pr-[72px] pb-[25px] pl-[72px] bg-[#B88E2F] text-[#FFFFFF]'>BUY Now</button>
       
    </div> 
    </div>
  );
};

export default Hero 