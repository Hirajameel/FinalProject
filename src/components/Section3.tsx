import Image from 'next/image'
import React from 'react'

function Section3() {
  return (
    <div className='bg-[#FCF8F3]'>
    <div className='flex pl-[10vw]  ml-auto py-7'>
        <div className='w-[40%] flex  flex-col justify-center'>
            <h2 className='text-[40px] leading-none mb-4 font-poppins font-bold mt-7 '>50+ Beautiful rooms 
            <br /> inspiration</h2>
            <p>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
            <button className="mt-3 w-[222px] py-3 font-poppins font-bold bg-[#B88E2F] text-[#FFFFFF]">Explore Now</button>
        </div>
        <div className='flex gap-3'>
            <div>
                <Image src="/slide1.png" width={200} height={200} alt="" className='w-[400px] h-full' />
            </div>
            <div>
                <div className='flex'>
            <Image src="/slide2.png" width={200} height={200} alt="" className='w-[370px] h-full' />
            </div>           
             <Image src="/indicator.svg" width={200} height={200} alt="" className='w-28 mt-5' />


            </div>
        </div>
    </div>
    </div>
  )
}

export default Section3