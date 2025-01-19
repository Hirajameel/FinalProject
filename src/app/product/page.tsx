import Header from "@/components/Header";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

import { PiLineVertical } from "react-icons/pi";
import { IoStar } from "react-icons/io5";
import { FaStarHalf } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import Footer from "@/components/Footer";

function page() {
  return (
    <div className="">
      <Header />
      {/* bottom Header*/}
      <div className="flex flex-wrap gap-5 bg-[#F9F1E7] h-auto p-4 justify-start items-center">
  <p className="font-poppins flex items-center text-[#9F9F9F] font-bold">
    <Link href="/">Home</Link>
    <IoChevronForwardSharp className="text-[#000000] ml-2" />
  </p>
  <p className="font-poppins flex items-center text-[#9F9F9F] font-bold">
  <Link href="/shop">  Shop</Link>
    <IoChevronForwardSharp className="text-[#000000] ml-2" />
  </p>
  <p className="font-poppins flex items-center text-[#9F9F9F] font-semibold">
    <PiLineVertical className="text-[#9F9F9F] text-4xl" />
  </p>
  <p className="font-poppins flex items-center text-[#000000] font-semibold">
    Asgaard sofa
  </p>
</div>

      {/* main page*/}

      <div className="p-4">
  <div className="flex flex-wrap gap-10 justify-center">
    {/* Left Thumbnails */}
    <div className="gap-10 ml-5">
      <Image
        src="/p-1.png"
        width={100}
        height={100}
        alt=""
        className="rounded-[10px] h-20 bg-[#F9F1E7] mt-6"
      />
      <Image
        src="/p-2.png"
        width={100}
        height={100}
        alt=""
        className="rounded-[10px] h-20 bg-[#F9F1E7] mt-6"
      />
      <Image
        src="/p-3.png"
        width={100}
        height={100}
        alt=""
        className="rounded-[10px] h-20 bg-[#F9F1E7] mt-6"
      />
      <Image
        src="/p-4.png"
        width={100}
        height={100}
        alt=""
        className="rounded-[10px] h-20 bg-[#F9F1E7] mt-6"
      />
    </div>

    {/* Main Image */}
    <div className=" mt-5 rounded-[1px] w-full md:w-[423px] h-[500px] flex justify-center items-center">
    <div className="bg-[#F9F1E7] inline-block">
  <Image
    src="/p-main.png"
    width={481}
    height={391}
    alt=""
    className="max-w-full h-auto"
  />
</div>

    </div>

    {/* Right Content */}
    <div className="mt-5 font-poppins ml-10 w-full md:w-[424px]">
      <h1 className="font-bold text-[32px] md:text-[42px]">Asgaard sofa</h1>
      <span className="text-[#9F9F9F] text-[20px] md:text-[24px]">
        Rs. 250,000.00
      </span>
      <p className="flex gap-1 text-[#FFC700] text-[20px] md:text-[24px] mt-3 justify-start items-center">
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <FaStarHalf />
        <PiLineVertical className="text-[#9F9F9F] text-4xl hidden md:block" />
      </p>
      <p className="text-[#9F9F9F] flex justify-start text-sm md:ml-10 md:text-base">
        5 Customer Review
      </p>
      <p className="text-[#000000] font-normal text-[13px] text-justify">
        Setting the bar as one of the loudest speakers in its class, the Kilburn
        is a compact, stout-hearted hero with a well-balanced audio which
        boasts a clear midrange and extended highs for a sound.
      </p>
      <p className="text-[#9F9F9F] mt-4">Size</p>

      <div className="text-center mt-5 flex justify-start">
        <ul className="flex gap-5">
          <li className="w-10 h-10 bg-[#B88E2F] text-white rounded-[5px] flex justify-center items-center">
            L
          </li>
          <li className="w-10 h-10 bg-[#F9F1E7] rounded-md flex justify-center items-center">
            XL
          </li>
          <li className="w-10 h-10 bg-[#F9F1E7] rounded-md flex justify-center items-center">
            XS
          </li>
        </ul>
      </div>
      <p className="text-[#9F9F9F] mt-4">Color</p>
      <div className="flex gap-4 mt-3">
        <FaCircle className="text-[#816DFA] w-[30px] h-[30px]" />
        <FaCircle className="w-[30px] h-[30px]" />
        <FaCircle className="text-[#B88E2F] w-[30px] h-[30px]" />
      </div>
      <div className="mt-3 flex gap-3">
        <div className="flex items-center gap-2 border border-gray-300 rounded-[15px] w-[123px] h-[64px] justify-evenly">
          <button className="text-[#000000] text-[20px]">-</button>
          <span className="text-[#000000] text-[20px]">1</span>
          <button className="text-[#000000] text-[20px]">+</button>
        </div>
        <Link href="/cart"className="text-[#000000] text-[20px] font-[400px] flex items-center gap-2 border border-[#000000] rounded-[15px] w-[215px] h-[64px] p-2 justify-center">
          Add To Cart
        </Link>
        <Link href="/comparision" className="text-[#000000] flex items-center gap-2 border border-[#000000] rounded-[15px] w-[123px] justify-center">
          <span className="text-xl font-bold">+</span>
          Compare
        </Link>
      </div>
      <hr className="mt-5" />
      <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-[#9F9F9F] mt-5">
        <p className="font-bold">SKU</p>
        <p>:</p>
        <p>SS001</p>

        <p className="font-bold">Category</p>
        <p>:</p>
        <p>Sofas</p>

        <p className="font-bold">Tags</p>
        <p>:</p>
        <p>Sofa, Chair, Home, Shop</p>

        <p className="font-bold">Share</p>
        <p>:</p>
        <p className="flex gap-4">
          <FaFacebook className="text-[#000000] w-[20px] h-[20px]" />
          <FaLinkedin className="text-[#000000] w-[20px] h-[20px]" />
          <AiFillTwitterCircle className="text-[#000000] w-[20px] h-[20px]" />
        </p>
      </div>
    </div>
  </div>
  <hr className="mt-5" />
</div>


<div className="font-poppins text-[20px] sm:text-[24px] px-4">
  {/* Tab Navigation */}
  <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-10">
    <h1 className="text-[#000000] font-bold">Description</h1>
    <h1 className="text-[#9F9F9F]">Additional Information</h1>
    <h1 className="text-[#9F9F9F]">Reviews [5]</h1>
  </div>

  <br />

  {/* Description Text */}
  <div className="flex items-center justify-center">
    <div className="text-center max-w-[800px] px-4">
      <p className="text-[#9F9F9F] text-[14px] sm:text-[16px] font-normal mb-4">
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
      </p>
      <p className="text-[#9F9F9F] text-[14px] sm:text-[16px] font-normal">
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
      </p>
    </div>
  </div>

  {/* Images Section */}
  <div className="flex flex-wrap justify-center gap-4 mt-5">
    <div className="bg-[#F9F1E7] w-full sm:w-[48%] rounded-[10px]">
      <Image
        src="/singl1.png"
        width={500}
        height={200}
        className="w-full h-auto rounded-[10px]"
        alt="sofa set"
      />
    </div>
    <div className="bg-[#F9F1E7] w-full sm:w-[48%] rounded-[10px]">
      <Image
        src="/single2.png"
        width={605}
        height={348}
        className="w-full h-auto rounded-[10px]"
        alt="sofa set"
      />
    </div>
  </div>
</div>

<div className="w-full max-w-[1230px] mx-auto px-4 product-main">
  <h2 className="text-[24px] sm:text-[32px] md:text-[40px] font-poppins font-bold my-7 text-center">
    Related Products
  </h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-4">
    {/* Product 1 */}
    <div className="text-center bg-[#F4F5F7] rounded-md">
      <Image
        src="/pro1.png"
        width={200}
        height={200}
        alt=""
        className="w-full"
      />
      <h3 className="font-poppins text-[18px] sm:text-[20px] md:text-[24px] mb-2">Syltherine</h3>
      <p className="font-poppins text-[14px] sm:text-[16px] text-[#898989] mb-3">
        Stylish cafe chair
      </p>
      <div className="flex justify-center gap-2 items-center">
        <p className="font-poppins text-[16px] sm:text-[18px] md:text-[20px]">Rp 2.500.000</p>
        <span className="line-through text-[#898989] text-[14px] sm:text-[16px]">
          Rp 3.500.000
        </span>
      </div>
    </div>

    {/* Product 2 */}
    <div className="text-center bg-[#F4F5F7] rounded-md">
      <Image
        src="/pro6.png"
        width={200}
        height={200}
        alt=""
        className="w-full"
      />
      <h3 className="font-poppins text-[18px] sm:text-[20px] md:text-[24px] mb-2">Leviosa</h3>
      <p className="font-poppins text-[14px] sm:text-[16px] text-[#898989] mb-3">
        Stylish cafe chair
      </p>
      <div className="flex justify-center gap-2 items-center">
        <p className="font-poppins text-[16px] sm:text-[18px] md:text-[20px]">Rp 2.500.000</p>
        <span className="line-through text-[#898989] text-[14px] sm:text-[16px]">
          Rp 3.500.000
        </span>
      </div>
    </div>

    {/* Product 3 */}
    <div className="text-center bg-[#F4F5F7] rounded-md">
      <Image
        src="/pro2.png"
        width={200}
        height={200}
        alt=""
        className="w-full"
      />
      <h3 className="font-poppins text-[18px] sm:text-[20px] md:text-[24px] mb-2">Lolito</h3>
      <p className="font-poppins text-[14px] sm:text-[16px] text-[#898989] mb-3">
        Stylish cafe chair
      </p>
      <div className="flex justify-center gap-2 items-center">
        <p className="font-poppins text-[16px] sm:text-[18px] md:text-[20px]">Rp 2.500.000</p>
        <span className="line-through text-[#898989] text-[14px] sm:text-[16px]">
          Rp 3.500.000
        </span>
      </div>
    </div>

    {/* Product 4 */}
    <div className="text-center bg-[#F4F5F7] rounded-md">
      <Image
        src="/pro3.png"
        width={200}
        height={200}
        alt=""
        className="w-full"
      />
      <h3 className="font-poppins text-[18px] sm:text-[20px] md:text-[24px] mb-2">Respira</h3>
      <p className="font-poppins text-[14px] sm:text-[16px] text-[#898989] mb-3">
        Stylish cafe chair
      </p>
      <div className="flex justify-center gap-2 items-center">
        <p className="font-poppins text-[16px] sm:text-[18px] md:text-[20px]">Rp 2.500.000</p>
        <span className="line-through text-[#898989] text-[14px] sm:text-[16px]">
          Rp 3.500.000
        </span>
      </div>
    </div>
  </div>
  
  <div className="flex items-center justify-center mt-5 mb-5">
    <button className="border border-[#B88E2F] text-[#B88E2F] px-5 sm:px-7 py-2 sm:py-3 text-[14px] sm:text-[16px]">
      Show more
    </button>
  </div>

  <hr className="mt-5" />
</div>




      <Footer />
    </div>
  );
}

export default page;
