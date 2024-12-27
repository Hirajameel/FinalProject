import Image from 'next/image'
import React from 'react'
import { FaDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


function Section3() {
  return (
    <div className='bg-[#FCF8F3]'>
    <div className='flex pl-[10vw]  ml-auto py-7 sec-3-main'>
        <div className='w-[40%] flex  flex-col justify-center sec-3-card'>
            <h2 className='text-[40px] leading-none mb-4 font-poppins font-bold mt-7 '>50+ Beautiful rooms 
            <br /> inspiration</h2>
            <p>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
            <button className="mt-3 w-[222px] py-3 font-poppins font-bold bg-[#B88E2F] text-[#FFFFFF]">Explore Now</button>
        </div>
        <div className='flex gap-3 sec-3-img'>
            <div>
                <Image src="/slide1.png" width={200} height={200} alt="" className='w-[400px] h-full' />
            </div>
            <div>
                <div className='flex'>
            <Image src="/slide2.png" width={200} height={200} alt="" className='w-[370px] h-full' />
            </div> 
            <div className='flex gap-3 mt-5'>         
            <FaDotCircle className='text-[#B88E2F]'/>
            <GoDotFill className='text-[#D8D8D8]'/>
            <GoDotFill className='text-[#D8D8D8]'/>
            <GoDotFill className='text-[#D8D8D8]'/>

            </div> 
 
            </div>
        </div>
    </div>
    </div>
  )
}

export default Section3