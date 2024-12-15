import Header from '@/components/Header'
import React from 'react'
import { IoChevronForwardSharp } from "react-icons/io5";
import Image from "next/image";

import { PiLineVertical } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { FaStarHalf } from "react-icons/fa";


function page() {
  return (
    <div>
    
    <Header/>
    {/* bottom Header*/}
          <div className="flex  gap-5 bg-[#F9F1E7]  h-[100px] ">
     <p className="font-poppins flex items-center text-[#9F9F9F] ml-10">Home
       <IoChevronForwardSharp className='text-[#000000] ml-2' /></p>
    <p className="font-poppins flex items-center text-[#9F9F9F]">Shop 
      <IoChevronForwardSharp  className='text-[#000000] ml-2'  /></p>
      <p className="font-poppins flex items-center text-[#9F9F9F] font-semibold">
      <PiLineVertical className="text-[#9F9F9F] text-4xl"/></p>
      <p className="font-poppins flex items-center text-[#000000]">Asgaard sofa</p>
    </div>
 {/* main page*/}

 <div>
  <div className='flex gap-10'>
     <div  className=" gap-10 ml-5 ">
             <Image src="/p-1.png" width={100} height={100} alt="" className='rounded-[10px] h-20 bg-[#F9F1E7] mt-6'/>
             <Image src="/p-2.png" width={100} height={100} alt="" className='rounded-[10px] h-20 bg-[#F9F1E7] mt-6'/>
             <Image src="/p-3.png" width={100} height={100} alt="" className='rounded-[10px] h-20 bg-[#F9F1E7] mt-6'/>
             <Image src="/p-4.png" width={100} height={100} alt="" className='rounded-[10px] h-20 bg-[#F9F1E7] mt-6'/>
       </div >  
       <div className="bg-[#F9F1E7] mt-5 rounded-[5px] w-[423px] h-[500px] ">
       <Image src="/p-main.png" width={481} height={391} alt="" className=''/>
        </div>  

        <div className='mt-5 font-poppins ml-10'>
          <h1 className='font-bold text-[42px]'>Asgaard sofa</h1>
          <span className='text-[#9F9F9F] text-[24px]'>Rs. 250,000.00</span>
          <p className='flex gap-1 text-[#FFC700] text-[24px] mt-3 justify-items-center'>
    <IoStar />
    <IoStar />
    <IoStar />
    <IoStar />
    <FaStarHalf />
    <PiLineVertical className="text-[#9F9F9F] text-4xl "/>
  </p>
  <p className='text-[#9F9F9F] flex'>5 Customer Review</p>
  <p className='text-[#000000]  font-normal text-[13px] text-justify w-[424px] h-[80px] '>Setting the bar as one of the loudest speakers in its class, the
     Kilburn is a compact, 
    stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
  </p>
  <p className='text-[#9F9F9F]'>Size</p>

  <div className="text-center mt-5 flex justify-start">
        <ul className="flex gap-5">
          <li className="w-10 h-10 bg-[#B88E2F] text-white rounded-[5px]  flex justify-center items-center">
          L
          </li>
          <li className="w-10 h-10 bg-[#F9F1E7] rounded-md flex justify-center items-center ">
          XL
          </li>
          <li className="w-10 h-10 bg-[#F9F1E7] rounded-md flex justify-center items-center">
           XS
          </li>
        
        </ul>
    
      </div>
      




        </div>



  </div>
 </div>












    </div>
  )
}

export default page