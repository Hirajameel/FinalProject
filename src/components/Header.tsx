import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="w-full px-20 h-[100px] bg-[#FFFFFF] text-[#000000] ">
      <div className="  pl-[54px] flex justify-between items-center header">
        <div className="">
          <h1 className=" text-[34px] font-bold text-sm text-[#000000] flex items-center">
           <Image src="/logo.png" alt="" width={200} height={200} className="w-20"/> Furniro
          </h1>
        </div>
        <div>
          <ul className="flex  justify-center w-[430px] h-[24px] gap-10 font-poppins">
            <Link href={"/"}>
              <li className=" w-[48px] h-[24px]  text-[16px]  text-sm">Home</li>
            </Link>
            <Link href={"/shop"}>
              <li className=" w-[42px] h-[24px]  font-[500px] text-[16px] text-sm ">
                Shop
              </li>
            </Link>
            <Link href={"/blog"}>
              <li className=" w-[36px] h-[24px]  font-[500px] text-[16px] text-sm">
                Blog
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="w-[66px] h-24px]  font-[500px] text-[16px] text-sm">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex gap-5 justify-end">
          <MdPersonOutline className="w-[28px] h-[28px] mt-[4.67px] ml-[2.33px]" />
          <CiSearch className="w-[28px] h-[28px] mt-[4.67px] ml-[2.33px]" />
          <GoHeart className="w-[28px] h-[28px] mt-[4.67px] ml-[2.33px]" />

          <AiOutlineShoppingCart className="w-[28px] h-[28px] mt-[4.67px] ml-[2.33px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
