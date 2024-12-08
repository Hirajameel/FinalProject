import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

function shop() {
  return (
    <div>
        <Header/>
        <div className='h-[313px] w-full relative ' >
        <Image src="/shopbanner.png" width={1440} height={100} className='absolute w-full h-full  ' alt="" /> 
        <div className='flex justify-center items-center flex-col h-full z-50 relative'>

            <h2 className='text-[40px] font-poppins font-bold text-center'>Shop</h2>
            <div className='flex '>
            <p className='font-poppins font-semibold'>Home </p>
            <span>Shop</span>
            </div>
        </div>
        <div className='flex justify-between items-center bg-[#F9F1E7] py-5 px-20'>
            <div className='flex gap-5 '>
                <p className='flex  gap-1'> <Image src="/filter.png" width={1440} height={100} className='w-5' alt="" /> Filter</p>
                <Image src="/dots.png" width={1440} height={100} className='w-5  ' alt="" /> 
                <Image src="/listview.png" width={1440} height={100} className='w-5  ' alt="" /> 
                <p className=' border-l pl-3 border-[#9F9F9F] '>Showing 1–16 of 32 results</p>

            </div>
            <div>
                <div>
                    <label htmlFor="">Show</label>
                    <input type="text" />
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default shop