import Image from 'next/image'
import React from 'react'

function Gallery() {
  return (
    <div>
    <div>
        <p className='text-[20px] font-poppins  mt-7 text-center'>Share your setup with</p>
        <h2 className='text-[40px] leading-none font-poppins font-bold  text-center'>#FuniroFurniture</h2>
    </div>
    <div className='flex gap-4 gallery-main'>
        <div className='w-[40%] gallery-card'>
            <div className='flex gap-2 items-end mb-3 gallery-card-img'>
            <Image src="/gall1.png" width={200} height={200} alt="" className='h-[370px] w-[200px]' />
            <Image src="/gall2.png" width={200} height={200} alt="" className='w-[450px] h-[300px]'/>
            </div>
            <div className='flex gap-2  gallery-card-img'>
            <Image src="/gall3.png" width={200} height={200} alt="" className='h-[370px] w-[380px]' />
            <Image src="/gall4.png" width={200} height={200} alt="" className='w-[300px] h-[300px]'/>
            </div>
         </div>
         <div className='w-[20%] flex items-center gallery-card'>
            <div className='flex items-center  gallery-card-img'>
            <Image src="/gall5.png" width={200} height={200} alt="" className='h-[370px] w-[300px]' />
            </div>
  
         </div>
         <div className='w-[40%] gallery-card'>
            <div className='flex gap-2 items-end mb-3  gallery-card-img'>
            <Image src="/gall6.png" width={200} height={200} alt="" className='h-[340px] w-[290px]' />
            <Image src="/gall7.png" width={200} height={200} alt="" className='w-[100%] h-[420px]'/>
            </div>
            <div className='flex gap-2  gallery-card-img'>
            <Image src="/gall8.png" width={200} height={200} alt="" className='h-[370px] w-[170px]' />
            <Image src="/gall9.png" width={200} height={200} alt="" className='w-[250px] h-[300px]'/>
            </div>
         </div>
    </div><br/><hr/>
</div>
  
  )
}

export default Gallery