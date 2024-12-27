import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";

function Product() {
  return (
    <div className="w-[1230px] mx-auto my-0 product-main">
    <h2 className="text-[40px] font-poppins font-bold my-7 text-center">
      Our Products
    </h2>
    <div className="flex justify-between gap-5 mb-4">
      <Link href="/product" className="w-[25%] bg-[#F4F5F7] product-card relative">
        <Image
          src="/pro1.png"
          width={200}
          height={200}
          alt=""
          className="w-full"
        />
        <div className="px-4 py-3">
          <h3 className="font-poppins text-[24px]">Syltherine</h3>
          <p className="font-poppins text-[16px] text-[#898989]">
            Stylish cafe chair
          </p>
          <div className="flex justify-between gap-1 items-center">
            <p className="font-poppins text-[20px]">Rp 2.500.000</p>
            <span className="text-[#898989] text-[16px]"style={{ textDecoration: 'line-through' }}>Rp 3.500.000</span>
          </div>
        </div>
        <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
            Add to cart
          </button>
          <div className="flex gap-5 mt-5">
            <p className="font-poppins font-bold text-white flex items-center">
              <CiShare2 />
              Share
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              <MdOutlineCompareArrows />
              Compare
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              {" "}
              <CiHeart />
              Like
            </p>
          </div>
        </div>
      </Link>
      <Link href="/product" className="w-[25%] bg-[#F4F5F7] product-card relative">
        <Image
          src="/shop-m.png"
          width={200}
          height={200}
          alt=""
          className="w-full  h-[309px] object-cover "
        />
        <div className="px-4 py-3">
          <h3 className="font-poppins text-[24px]">Levlosa</h3>
          <p className="font-poppins text-[16px] text-[#898989]">
            Stylish cafe chair
          </p>
          <div className="flex justify-between gap-1 items-center">
            <p className="font-poppins text-[20px]">Rp 2.500.000</p>
            <span className="text-[#898989] text-[16px]" style={{ textDecoration: 'line-through' }}>Rp 3.500.000</span>
          </div>
        </div>
        <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
            Add to cart
          </button>
          <div className="flex gap-5 mt-5">
            <p className="font-poppins font-bold text-white flex items-center">
              <CiShare2 />
              Share
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              <MdOutlineCompareArrows />
              Compare
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              {" "}
              <CiHeart />
              Like
            </p>
          </div>
        </div>
      </Link>
      <Link
        href="/product"
        className="w-[25%] bg-[#F4F5F7] product-card relative"
      >
        <Image
          src="/pro2.png"
          width={200}
          height={200}
          alt=""
          className="w-full"
        />
        <div className="px-4 py-3">
          <h3 className="font-poppins text-[24px]">Lolito</h3>
          <p className="font-poppins text-[16px] text-[#898989]">
            Stylish cafe chair
          </p>
          <div className="flex justify-between gap-1 items-center">
            <p className="font-poppins text-[20px]">Rp 2.500.000</p>
            <span className="text-[#898989] text-[16px]" style={{ textDecoration: 'line-through' }}>Rp 3.500.000</span>
          </div>
        </div>
        <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
            Add to cart
          </button>
          <div className="flex gap-5 mt-5">
            <p className="font-poppins font-bold text-white flex items-center">
              <CiShare2 />
              Share
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              <MdOutlineCompareArrows />
              Compare
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              {" "}
              <CiHeart />
              Like
            </p>
          </div>
        </div>
      </Link>
      <Link
        href="/product"
        className="w-[25%] bg-[#F4F5F7] product-card relative"
      >
        <Image
          src="/pro3.png"
          width={200}
          height={200}
          alt=""
          className="w-full"
        />
        <div className="px-4 py-3">
          <h3 className="font-poppins text-[24px]">Respira</h3>
          <p className="font-poppins text-[16px] text-[#898989]">
            Stylish cafe chair
          </p>
          <div className="flex justify-between gap-1 items-center">
            <p className="font-poppins text-[20px]">Rp 2.500.000</p>
            <span className="text-[#898989] text-[16px]" style={{ textDecoration: 'line-through' }}>Rp 3.500.000</span>
          </div>
        </div>
        <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
            Add to cart
          </button>
          <div className="flex gap-5 mt-5">
            <p className="font-poppins font-bold text-white flex items-center">
              <CiShare2 />
              Share
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              <MdOutlineCompareArrows />
              Compare
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              {" "}
              <CiHeart />
              Like
            </p>
          </div>
        </div>
      </Link>
    </div>
    <div className="flex justify-between gap-5">
      <div className="w-[25%] bg-[#F4F5F7] product-card relative">
        <Image
          src="/pro4.png"
          width={200}
          height={200}
          alt=""
          className="w-full"
        />
        <div className="px-4 py-3">
          <h3 className="font-poppins text-[24px]">Grifo</h3>
          <p className="font-poppins text-[16px] text-[#898989]">
            Stylish cafe chair
          </p>
          <div className="flex justify-between gap-1 items-center">
            <p className="font-poppins text-[20px]">Rp 2.500.000</p>
            <span className="text-[#898989] text-[16px]" style={{ textDecoration: 'line-through' }}>Rp 3.500.000</span>
          </div>
        </div>
        <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
            Add to cart
          </button>
          <div className="flex gap-5 mt-5">
            <p className="font-poppins font-bold text-white flex items-center">
              <CiShare2 />
              Share
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              <MdOutlineCompareArrows />
              Compare
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              {" "}
              <CiHeart />
              Like
            </p>
          </div>
        </div>
      </div>
      <div className="w-[25%] bg-[#F4F5F7] product-card relative">
        <Image
          src="/pro6.png"
          width={200}
          height={200}
          alt=""
          className="w-full"
        />
        <div className="px-4 py-3">
          <h3 className="font-poppins text-[24px]">Muggo</h3>
          <p className="font-poppins text-[16px] text-[#898989]">
            Stylish cafe chair
          </p>
          <div className="flex justify-between gap-1 items-center">
            <p className="font-poppins text-[20px]">Rp 2.500.000</p>
            <span className="text-[#898989] text-[16px]" style={{ textDecoration: 'line-through' }}>Rp 3.500.000</span>
          </div>
        </div>
        <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
            Add to cart
          </button>
          <div className="flex gap-5 mt-5">
            <p className="font-poppins font-bold text-white flex items-center">
              <CiShare2 />
              Share
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              <MdOutlineCompareArrows />
              Compare
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              {" "}
              <CiHeart />
              Like
            </p>
          </div>
        </div>
      </div>
      <div className="w-[25%]  bg-[#F4F5F7] product-card relative">
        <Image
          src="/pro(07).jpg"
          width={200}
          height={200}
          alt=""
          className="w-full  h-[309px] object-cover"
        />
        <div className="px-4 py-3">
          <h3 className="font-poppins text-[24px]">Pingky</h3>
          <p className="font-poppins text-[16px] text-[#898989]">
            Stylish cafe chair
          </p>
          <div className="flex justify-between gap-1 items-center">
            <p className="font-poppins text-[20px]">Rp 2.500.000</p>
            <span className="text-[#898989] text-[16px]"style={{ textDecoration: 'line-through' }}>Rp 3.500.000</span>
          </div>
        </div>
        <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
            Add to cart
          </button>
          <div className="flex gap-5 mt-5">
            <p className="font-poppins font-bold text-white flex items-center">
              <CiShare2 />
              Share
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              <MdOutlineCompareArrows />
              Compare
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              {" "}
              <CiHeart />
              Like
            </p>
          </div>
        </div>
      </div>
      <div className="w-[25%]  bg-[#F4F5F7] product-card relative">
        <Image
          src="/potty.jpg"
          width={200}
          height={200}
          alt=""
          className="w-full h-[309px] object-cover"
        />
        <div className="px-4 py-3">
          <h3 className="font-poppins text-[24px]">Potty</h3>
          <p className="font-poppins text-[16px] text-[#898989]">
            Stylish cafe chair
          </p>
          <div className="flex justify-between gap-1 items-center">
            <p className="font-poppins text-[20px]">Rp 2.500.000</p>
            <span className="text-[#898989] text-[16px]" style={{ textDecoration: 'line-through' }}>Rp 3.500.000</span>
          </div>
        </div>
        <div className="hover-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <button className="bg-white px-8 py-2 font-poppins font-bold text-[#B88E2F]">
            Add to cart
          </button>
          <div className="flex gap-5 mt-5">
            <p className="font-poppins font-bold text-white flex items-center">
              <CiShare2 />
              Share
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              <MdOutlineCompareArrows />
              Compare
            </p>
            <p className="font-poppins font-bold text-white flex items-center">
              {" "}
              <CiHeart />
              Like
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-5 mb-5">
      <button className="border border-[#B88E2F] text-[#B88E2F] px-7 py-3 font-bold">
        Show more{" "}
      </button>
    </div>
  </div>
  );
}

export default Product;
