import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Image from 'next/image'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaStarHalf } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { PiLineVertical } from "react-icons/pi";
import Footer from '@/components/Footer';
const page = () => {
  return (
    <div>
       <Header/>


       <div className="h-[313px] w-full relative">
  <Image
    src="/shopbanner.png"
    width={1440}
    height={100}
    className="absolute w-full h-full object-cover"
    alt="Shop Banner"
  />
  
  <div className="flex justify-center items-center flex-col h-full z-50 relative px-4">
    <h2 className="text-[32px] md:text-[40px] font-poppins font-bold text-center">
      Product Comparison
    </h2>
    <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left mt-4">
      <Link href="/" className="font-poppins font-semibold flex items-center gap-1">
        Home <IoChevronForwardSharp />
      </Link>
      <span className="md:mx-2">Checkout</span>
    </div>
  </div>
</div>


<div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-10 font-poppins justify-center px-4">
  {/* Left Section */}
  <div className="pl-4 md:pl-10">
    <h1 className="font-bold text-[24px] md:text-[28px]">
      Go to <span className="block">Product</span> page for more <span className="block">Products</span>
    </h1>
    <br />
    <p className="underline underline-offset-4 text-[#727272]">View More</p>
  </div>

  {/* Right Section */}
  <div className="flex flex-col items-center md:items-start">
    <Image
      src="/p-main.png"
      width={280}
      height={177}
      alt="Product 1"
      className="w-[280px] h-[177px] bg-[#F9F1E7] inline-block"
    />
    <div className="mt-5 w-full md:w-[424px]">
      <h1 className="font-bold text-[20px] md:text-[24px]">Asgaard sofa</h1>
      <span className="text-[#9F9F9F] text-[16px] md:text-[18px]">Rs. 250,000.00</span>
      <div className="flex items-center gap-3 text-[#9F9F9F]">
        <p className="flex gap-1 text-[16px] md:text-[18px] items-center font-bold text-[#000000]">4.7
          <IoStar className='text-[#FFC700]' />
          <IoStar className='text-[#FFC700]' />
          <IoStar className='text-[#FFC700]' />
          <IoStar className='text-[#FFC700]' />
          <FaStarHalf className='text-[#FFC700]' />
        </p>
        <PiLineVertical className="text-[#9F9F9F] text-4xl hidden md:block" />
        <p className="text-sm md:text-base text-[13px]">204 Review</p>
      </div>
    </div>
  </div>

  <div className="flex flex-col items-center md:items-start">
    <Image
      src="/p-1.png"
      width={280}
      height={177}
      alt="Product 2"
      className="w-[280px] h-[177px] bg-[#F9F1E7] inline-block"
    />
    <div className="mt-5 w-full md:w-[424px]">
      <h1 className="font-bold text-[20px] md:text-[24px]">Outdoor Sofa Set</h1>
      <span className="text-[#9F9F9F] text-[16px] md:text-[18px]">Rs. 224,000.00</span>
      <div className="flex items-center gap-3 text-[#9F9F9F]">
        <p className="flex gap-1 text-[16px] md:text-[18px] items-center font-bold text-[#000000]">4.2
          <IoStar className='text-[#FFC700]' />
          <IoStar className='text-[#FFC700]' />
          <IoStar className='text-[#FFC700]' />
          <IoStar className='text-[#FFC700]' />
          <FaStarHalf className='text-[#FFC700]' />
        </p>
        <PiLineVertical className="text-[#9F9F9F] text-4xl hidden md:block" />
        <p className="text-sm md:text-base text-[13px]">145 Review</p>
      </div>
    </div>
  </div>

  <div className="flex flex-col items-center md:items-start p-4 md:p-6 font-poppins mt-10">
    <span className="text-[24px] md:text-[30px] font-semibold">Add A Product</span>
    <div className="mt-4">
      <select className="bg-[#B88E2F] text-[#FFFFFF] rounded-md text-[14px] text-center w-[242px] h-[40px] flex items-center justify-center">
        <option value="">Choose a Product</option>
      </select>
    </div>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-5 border border-gray-300 p-5 rounded-lg">
  {/* General Section */}
  <div className="font-poppins text-[16px] md:text-[20px] mt-10 pr-5">
    <h1 className="font-bold text-[20px] md:text-[28px] text-[#000000]">General</h1>
    <p className="mt-4">Sales Package</p>
    <p className="mt-4">Model Number</p>
    <p className="mt-4">Secondary Material</p>
    <p className="mt-4">Configuration</p>
    <p className="mt-4">Upholstery Material</p>
    <p className="mt-4">Upholstery Color</p>

    <h1 className="font-bold text-[20px] md:text-[28px] text-[#000000] mt-10">Product</h1>
    <p className="mt-4">Filling Material</p>
    <p className="mt-4">Finish Type</p>
    <p className="mt-4">Adjustable Headrest</p>
    <p className="mt-4">Maximum Load Capacity</p>
    <p className="mt-4">Origin of Manufacture</p>

    <h1 className="font-bold text-[20px] md:text-[28px] text-[#000000] mt-10">Dimensions</h1>
    <p className="mt-4">Filling Material</p>
    <p className="mt-4">Finish Type</p>
    <p className="mt-4">Adjustable Headrest</p>
    <p className="mt-4">Maximum Load Capacity</p>
    <p className="mt-4">Origin of Manufacture</p>
  </div>

  {/* Product 1 Details */}
  <div className="font-poppins text-[16px] md:text-[20px] mt-20 pl-10 border-l-2 border-gray-300 pr-5">
    <p className="mt-4">1 sectional sofa</p>
    <p className="mt-4">TFCBLIGRBL6SRHS</p>
    <p className="mt-4">Solid Wood</p>
    <p className="mt-4">L-shaped</p>
    <p className="mt-4">Fabric + Cotton</p>
    <p className="mt-4">Bright Grey & Lion</p>

    <p className="mt-24">Foam</p>
    <p className="mt-4">Bright Grey & Lion</p>
    <p className="mt-4">No</p>
    <p className="mt-4">280 KG</p>
    <p className="mt-4">India</p>

    <p className="mt-20">Foam</p>
    <p className="mt-4">Bright Grey & Lion</p>
    <p className="mt-4">No</p>
    <p className="mt-4">280 KG</p>
    <p className="mt-4">India</p>
  </div>

  {/* Product 2 Details */}
  <div className="font-poppins text-[16px] md:text-[20px] mt-20 pl-10 border-l-2 border-gray-300">
    <p className="mt-4">1 Three Seater, 2 Single Seater</p>
    <p className="mt-4">DTUBLIGRBL568</p>
    <p className="mt-4">Solid Wood</p>
    <p className="mt-4">L-shaped</p>
    <p className="mt-4">Fabric + Cotton</p>
    <p className="mt-4">Bright Grey & Lion</p>

    <p className="mt-20">Foam</p>
    <p className="mt-4">Bright Grey & Lion</p>
    <p className="mt-4">No</p>
    <p className="mt-4">280 KG</p>
    <p className="mt-4">India</p>

    <p className="mt-20">Foam</p>
    <p className="mt-4">Bright Grey & Lion</p>
    <p className="mt-4">No</p>
    <p className="mt-4">280 KG</p>
    <p className="mt-4">India</p>
  </div>
</div>



























































<div className="bg-[#FAF3EA] py-10 lg:py-20 px-6 lg:px-10">
  <div className="flex flex-wrap justify-center lg:justify-between gap-6">
    {/* Feature 1 */}
    <div className="flex gap-4 items-center w-full lg:w-auto">
      <Image
        src="/cup.png"
        width={200}
        height={300}
        alt="High Quality"
        className="w-10"
      />
      <div>
        <h5 className="font-poppins font-bold text-[18px] lg:text-[24px]">
          High Quality
        </h5>
        <p className="text-[#898989] text-[14px] lg:text-[16px]">
          crafted from top materials
        </p>
      </div>
    </div>

    {/* Feature 2 */}
    <div className="flex gap-4 items-center w-full lg:w-auto">
      <Image
        src="/guarantee.png"
        width={200}
        height={300}
        alt="Warranty Protection"
        className="w-10"
      />
      <div>
        <h5 className="font-poppins font-bold text-[18px] lg:text-[24px]">
          Warranty Protection
        </h5>
        <p className="text-[#898989] text-[14px] lg:text-[16px]">
          Over 2 years
        </p>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="flex gap-4 items-center w-full lg:w-auto">
      <Image
        src="/shipping.png"
        width={200}
        height={300}
        alt="Free Shipping"
        className="w-10"
      />
      <div>
        <h5 className="font-poppins font-bold text-[18px] lg:text-[24px]">
          Free Shipping
        </h5>
        <p className="text-[#898989] text-[14px] lg:text-[16px]">
          Order over 150 $
        </p>
      </div>
    </div>

    {/* Feature 4 */}
    <div className="flex gap-4 items-center w-full lg:w-auto">
      <Image
        src="/customer-support.png"
        width={200}
        height={300}
        alt="24 / 7 Support"
        className="w-10"
      />
      <div>
        <h5 className="font-poppins font-bold text-[18px] lg:text-[24px]">
          24 / 7 Support
        </h5>
        <p className="text-[#898989] text-[14px] lg:text-[16px]">
          Dedicated support
        </p>
      </div>
    </div>
  </div>
</div>

<Footer/>


 
    </div>
  )
}

export default page