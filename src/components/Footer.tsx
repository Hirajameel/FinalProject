import React from 'react'

const Footer = () => {
  return (
    <footer className='w-[1240px] mx-auto my-0' >
      <div className=' footer p-5   justify-center flex border-gray-300 font-poppins gap-20  pt-[48px] pl-[10px]'>

      <div className=''>
        <h2 className='font-poppins  font-bold text-[24px] leading-[36px] pb-5'>Funiro.</h2>
        <p className='text-[#9F9F9F]'>400 University Drive Suite 200 Coral <br /> Gables, <br />
        FL 33134 USA</p>
        </div>

      <div>
      <h2 className='font-poppins  text-[#9F9F9F] leading-[36px] pb-5'>Links</h2>

        <ul className='font-[500px] text-[16px] leading-24 text-[#000000] leading-10 '>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
      <h2 className='font-poppins text-[#9F9F9F] leading-[36px] pb-5'>Help</h2>

        <ul className='font- leading-10'>
          <li>Payment Options</li>
          <li>Returns</li>
          <li>Privacy Policies</li>
        </ul>
      </div>
  

      <div className=''>
      <h2 className='font-poppins  text-[#9F9F9F] leading-[36px] pb-5'>Newsletter</h2>

      <input  type='text' placeholder='Enter Your Email Address ' className='underline '/>
      <button type='submit' className='font-bold underline'>SUBSCRIBE</button>

      </div>
      

      </div>
      <div className='font-poppins font-[400px] text-[16px] border-gray-300 border-t-2 bottom-footer'>
    
        <p className='my-5'>2023 furino. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer