import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";

const Page = () => {
  return (
    <div>
      <Header />
      
      {/* Banner Section */}
      <div className="h-[313px] w-full relative">
        <Image
          src="/shopbanner.png"
          width={1440}
          height={100}
          className="absolute w-full h-full"
          alt="Shop Banner"
        />
        <div className="flex justify-center items-center flex-col h-full z-50 relative">
          <h2 className="text-[40px] font-poppins font-bold text-center">Blog</h2>
          <div className="flex">
            <p className="font-poppins font-semibold flex items-center">
              Home
              <IoChevronForwardSharp />
            </p>
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* First Blog Post */}
      <div className="font-poppins mt-6 ml-7">
        <Image
          src="/blog{1}.jpg"
          width={817}
          height={500}
          className="w-817 h-[500] pt-[0px] pb-[0px] rounded-[10px]"
          alt="Blog Image 1"
        />
        <h5 className="font-bold text-[30px] leading-[25px] mt-2 mb-2 text-[#000000]">
          Going all-in with millennial design
        </h5>
        <p className="text-[#9F9F9F] font-normal text-[15px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          <br />
          dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
          <br />
          aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
          <br />
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
          <br />
          ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
      </div>

      <div className="font-poppins text-[16px] text-justify mt-3 ml-7">
        <h2 className="underline">Read more</h2>
      </div>

      {/* Second Blog Post */}
      <div className="font-poppins ml-7">
        <Image
          src="/blog(02).jpg"
          width={817}
          height={500}
          className="w-817 h-[500] pt-[0px] pb-[0px] rounded-[10px] mt-4"
          alt="Blog Image 2"
        />
        <h5 className="font-bold text-[30px] leading-[25px] mt-2 mb-2 text-[#000000]">
          Exploring new ways of decorating
        </h5>
        <p className="text-[#9F9F9F] font-normal text-[15px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          <br />
          dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
          <br />
          aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
          <br />
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
          <br />
          ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
      </div>

      <div className="font-poppins text-[16px] text-justify mt-3 ml-7">
        <h2 className="underline">Read more</h2>
      </div>

      <div className="font-poppins ml-7">
        <Image
          src="/blog(03).jpg"
          width={817}
          height={500}
          className="w-817 h-[500] pt-[0px] pb-[0px] rounded-[10px] mt-4"
          alt="Blog Image 2"
        />
        <h5 className="font-bold text-[30px] leading-[25px] mt-2 mb-2 text-[#000000]">
          Exploring new ways of decorating
        </h5>
        <p className="text-[#9F9F9F] font-normal text-[15px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          <br />
          dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
          <br />
          aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
          <br />
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
          <br />
          ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
      </div>

      <div className="font-poppins text-[16px] text-justify mt-3 ml-7">
        <h2 className="underline">Read more</h2>
      </div>



      <div className="text-center mt-5 mb-5 flex justify-center ">
          <ul className="flex gap-5">
            <li className="w-14 h-14 bg-[#B88E2F] text-white rounded-md flex justify-center items-center">
              1
            </li>
            <li className="w-14 h-14 bg-[#F9F1E7] rounded-md flex justify-center items-center">
              1
            </li>
            <li className="w-14 h-14 bg-[#F9F1E7] rounded-md flex justify-center items-center">
              1
            </li>
            <li className="w-20 h-14 bg-[#F9F1E7] rounded-md flex justify-center items-center">
              Next
            </li>
          </ul>
        </div>














     

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Page;
