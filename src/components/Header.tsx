"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Modal from "../components/Modal";



const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full md:px-20 h-[100px] bg-[#FFFFFF] text-[#000000]  ">
    <div className="md:pl-[54px] flex justify-between items-center header">
      <div className="">
        <h1 className="text-[34px] font-bold md:text-sm text-[#000000] flex items-center ">
          <Image src="/logo.png" alt="" width={200} height={200} className="w-12 md:w-20" /> Furniro
        </h1>
      </div>
      <div>
        <ul className="flex justify-center w-[430px] h-[24px] md:gap-10 font-poppins font-[1200px]">
          <Link href={"/"}>
            <li className="w-[48px] h-[24px] md:text-[16px] text-sm ">Home</li>
          </Link>
          <Link href={"/shop"}>
            <li className="w-[42px] h-[24px] md:text-[16px] text-sm ">Shop</li>
          </Link>
          <Link href={"/blog"}>
            <li className="w-[36px] h-[24px] md:text-[16px] text-sm">Blog</li>
          </Link>
          <Link href={"/contact"}>
            <li className="w-[66px] h-[24px] md:text-[16px] text-sm">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="flex md:gap-5 justify-end">
        {/* Increased margin-left to move icons slightly right */}
        <MdPersonOutline className="w-6 h-6 md:w-[28px] md:h-[28px] mt-[4.67px] ml-[10px]" />
        <CiSearch className="w-6 h-6 md:w-[28px] md:h-[28px] mt-[4.67px] ml-[10px]" />
        <GoHeart className="w-6 h-6 md:w-[28px] md:h-[28px] mt-[4.67px] ml-[10px]" />
        <Link href=""  onClick={() => setModalOpen(true)}>
          <AiOutlineShoppingCart className="w-6 h-6 md:w-[28px] md:h-[28px] mt-[4.67px] ml-[10px]" />
        </Link>
      </div>
     

    </div>

    <Modal show={isModalOpen} onClose={() => setModalOpen(false)} />


  </div>

  
  );
};

export default Header; 