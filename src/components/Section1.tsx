import Image from 'next/image'
import React from 'react'

function Section1() {
  return (
    <div className='w-[1183px] mb-5 sec1' style={{margin:"0 auto"}}>
        <div className='text-center font-poppins  mb-5 mt-7'>
            <h2 className='font-poppins font-bold text-[32px] leading-[48px] text-[#333333]'>Browse The Range</h2>
            <p className='font-normal text-[20px] leading-[30px] text-center text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='flex  justify-center space-x-3 mt-3  font-bold sec-1-content'>
            <div className='text-center'>
                <Image src="/sec(1).png" width={381} height={550} alt="" className='h-96 rounded'/>
                <h4 className='mt-2'>Dining</h4>
            </div>
            <div className='text-center'>
                <Image src="/sec(2).png" width={381} height={480}  alt="" className='h-96 rounded'/>
                <h4 className='mt-2'>Living</h4>
            </div>
            <div className='text-center'>
                <Image src="/sec(3).png"  width={381} height={480} alt="" className='h-96 rounded'/>
                <h4 className='mt-2'>Bedroom</h4>
            </div>
        </div>
    </div>
  )
}

export default Section1