import React from 'react'

const Footer = () => {
  return (
<footer className='w-[1240px] mx-auto my-0 ' >
      <div className=' footer p-5   justify-center flex border-gray-300 font-poppins gap-20  pt-[48px] pl-[10px]'>

      <div className=''>
        <h2 className='font-poppins  font-bold text-[24px] leading-[36px] pb-6'>Funiro.</h2>
        <p className='text-[#9F9F9F] pb-5 mt-4'>400 University Drive Suite 200 Coral <br /> Gables, <br />
        FL 33134 USA</p>
        </div>

        <div>
      <h2 className='font-poppins  text-[#9F9F9F] leading-[36px] pb-5 font-bold'>Links</h2>

        <ul className='text-[16px] leading-24 text-[#000000] leading-10  pb-6 gap-5 font-[700px] font-poppins'>
          <li className='mt-3'>Home</li>
          <li className='mt-3'>Shop</li>
          <li className='mt-3'>About</li>
          <li className='mt-3'>Contact</li>
        </ul>
      </div>

      <div>
      <h2 className='font-poppins text-[#9F9F9F] leading-[36px] pb-6 font-bold'>Help</h2>

        <ul className='font- leading-10 font-[700px] pb-5 gap-10'>
          <li className='mt-3'>Payment Options</li>
          <li className='mt-3'>Returns</li>
          <li className='mt-3'>Privacy Policies</li>
        </ul>
      </div>
  
      <div className="">
  <h2 className="font-poppins text-[#9F9F9F] leading-[36px] pb-6 font-bold">Newsletter</h2>
  <input
  type="text"
  placeholder="Enter Your Email Address"
  className="text-[#000000] underline underline-offset-3 pb-2 mt-3"
/>

  <button
    type="submit"
    className="font-bold underline underline-offset-4 pb-2"
  >
    SUBSCRIBE
  </button>
</div>

      </div>
      <div className='font-poppins font-[400px] text-[16px] border-gray-300 border-t-2 bottom-footer'>
    
        <p className='my-5 font-[500px]'>2023 furino. All rights reserved</p>
      </div>

    </footer>





  )
} 

export default Footer