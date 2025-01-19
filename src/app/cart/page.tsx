import { IoChevronForwardSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

import Image from "next/image";
import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <div>
    <Header />
  
    <div className="h-[313px] w-full relative">
      <Image
        src="/shopbanner.png"
        width={1440}
        height={100}
        className="absolute w-full h-full object-cover"
        alt="Shop Banner"
      />
      <div className="flex justify-center items-center flex-col h-full z-50 relative">
        <h2 className="text-[40px] font-poppins font-bold text-center">Cart</h2>
        <div className="flex">
        <Link href="/" className="font-poppins font-semibold flex items-center">
          Home <IoChevronForwardSharp />
        </Link>
          <span>Cart</span>
        </div>
      </div>
    </div>
    <br />
  
    <div className="flex flex-col lg:flex-row px-6 lg:px-36 gap-7">
      {/* Product Card Section */}
      <div className="flex-1">
        <div className="mt-8 pl-4">
          <div className="hidden lg:flex h-[55px] bg-[#F9F1E7] justify-center items-center space-x-12 font-bold">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
          </div>
        </div>
        <br />
        <div className="flex flex-col lg:flex-row gap-7 items-center text-center">
          <Image
            src="/p-main.png"
            width={100}
            height={100}
            alt="Asgaard sofa"
            className="rounded-[10px] h-20 bg-[#F9F1E7] mt-6"
          />
  
          <p>Asgaard sofa</p>
          <span>Rs. 250,000.00</span>
          <button className="w-10 h-10 bg-[#FAFAFA] border border-gray-500 rounded-md flex justify-center items-center">
            1
          </button>
          <span>Rs. 250,000.00</span>
          <MdDelete className="h-[21px] w-[21px] text-[#B88E2F]" />
        </div>
      </div>
  
      {/* Cart Totals Section */}
      <div className="relative w-full lg:w-[393px] h-auto lg:h-[390px] font-bold font-poppins mt-7 bg-[#F9F1E7] z-10 flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-[#000000] text-[32px] font-bold">Cart Totals</h1>
  
        <div className="flex justify-between w-full mt-7">
          <p className="text-[16px] font-[500px]">Subtotal</p>
          <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
        </div>
  
        <div className="flex justify-between w-full mt-4">
          <p className="text-[16px] font-[500px]">Total</p>
          <span className="text-[#B88E2F]">Rs. 250,000.00</span>
        </div>
  
        <Link href="/checkout" className="text-[#000000] mt-6 text-[20px] font-[400px] flex items-center gap-2 border border-[#000000] rounded-[15px] w-full lg:w-[222px] h-[59px] p-2 justify-center">
          Check Out
        </Link>
      </div>
    </div>
    <br />
    <hr />
  
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
  
    <Footer />
  </div>
  
  );
};

export default page;
