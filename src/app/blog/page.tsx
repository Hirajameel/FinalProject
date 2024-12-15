import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Page = () => {
  return (
    <div>
      <Header />

      <div className="h-[313px] w-full relative">
        <Image
          src="/shopbanner.png"
          width={1440}
          height={100}
          className="absolute w-full h-full"
          alt="Shop Banner"
        />
        <div className="flex justify-center items-center flex-col h-full z-50 relative">
          <h2 className="text-[40px] font-poppins font-bold text-center">
            Blog
          </h2>
          <div className="flex">
            <p className="font-poppins font-semibold flex items-center">
              Home
              <IoChevronForwardSharp />
            </p>
            <span>Blog</span>
          </div>
        </div>
      </div>

      <div className="flex gap-10  w-[85%] mx-auto my-0">
        <div className="w-full">
          <div className="font-poppins mt-6 ml-7">
            <Image
              src="/blog{1}.jpg"
              width={817}
              height={500}
              className="w-full h-[500] pt-[0px] pb-[0px] rounded-[10px]"
              alt="Blog Image 1"
            />
            <h5 className="font-bold text-[30px] leading-[25px] mt-2 mb-2 text-[#000000]">
              Going all-in with millennial design</h5>
            <p className="text-[#9F9F9F] font-normal text-[15px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Mus mauris vitae ultricies leo integer
              malesuada nunc. In nulla posuere sollicitudin
              aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
              imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit
              ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
              ornare aenean euismod elementum.
            </p>
          </div>
          <div className="font-poppins text-[16px] text-justify mt-3 ml-7">
            <h2 className="underline">Read more</h2>
          </div>

          <div className="font-poppins ml-7">
            <Image
              src="/blog(02).jpg"
              width={817}
              height={500}
              className="w-full h-[500] pt-[0px] pb-[0px] rounded-[10px] mt-4"
              alt="Blog Image 2"
            />
            <h5 className="font-bold text-[30px] leading-[25px] mt-2 mb-2 text-[#000000]">
              Exploring new ways of decorating
            </h5>
            <p className="text-[#9F9F9F] font-normal text-[15px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
              
              dolore magna aliqua. Mus mauris vitae ultricies leo integer
              malesuada nunc. In nulla posuere sollicitudin
              
              aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
              imperdiet. Libero enim sed faucibus turpis
              
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit
              
              ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
              ornare aenean euismod elementum.
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
              className="w-full h-[500] pt-[0px] pb-[0px] rounded-[10px] mt-4"
              alt="Blog Image 3"
            />
            <h5 className="font-bold text-[30px] leading-[25px] mt-2 mb-2 text-[#000000]">
              Exploring new ways of decorating
            </h5>
            <p className="text-[#9F9F9F] font-normal text-[15px] text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer
              malesuada nunc. In nulla posuere sollicitudi aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
              imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit
              ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
              ornare aenean euismod elementum.
            </p>
          </div>

          <div className="font-poppins text-[16px] text-justify mt-3 ml-7">
            <h2 className="underline">Read more</h2>
          </div>
        </div>
        <div className="w-[30%] mt-7">
          <div className="relative w-[311px] h-[58px]">
            <input
              type="text"
              placeholder="Enter"
              className="w-full h-full rounded border-2 text-[#9F9F9F] focus:outline-none"
            />
            <CiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[30px] h-[30px] text-gray-500" />
          </div>

          <div className="  text-[#9F9F9F] mt-9 px-8">
            <h1 className="font-poppins text-[24px] font-bold text-[#000000] ">
              Categories
            </h1><br/>
            <div className="space-y-4 flex flex-col justify-center gap-8">
              <div className="flex justify-between items-center">
                <p className="mr-4">Crafts</p>
                <span>2</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="mr-4">Design</p>
                <span>8</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="mr-4">Handmade</p>
                <span>7</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="mr-4">Interior</p>
                <span>1</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="mr-4">Wood</p>
                <span>8</span>
              </div>
            </div>
            
          </div >
          <div className="font-poppins mt-10 px-4 ">
              
                <h1 className="mt-11  text-[24px] font-bold">Recent Posts</h1>
              

                <div  className="grid  grid-cols-2 mt-10 gap-7">                <Image src="/b-1.jpg" width={100} height={80} alt="" className='rounded-[10px] h-20 w-full'/>
                <div className="flex flex-col ">
                 <p>Going all-in with millennial design</p>
                <span className="w-[119px] h-[18px] text-[#9F9F9F] font-[400px] text-[12px]">03 Aug 2022</span>
                </div>  

              </div>

              <div  className="grid grid-cols-2 mt-10 gap-7">                <Image src="/b-2.jpg" width={100} height={80} alt="" className='rounded-[10px] h-20 w-full'/>
                <div className="flex flex-col ">
                 <p>Exploring new ways of decorating</p>
                <span className="w-[119px] h-[18px] text-[#9F9F9F] font-[400px] text-[12px]">03 Aug 2022</span>
                </div> 

              </div>

              <div  className="grid grid-cols-2 mt-10 gap-7">                <Image src="/b-3.jpg" width={100} height={80} alt="" className='rounded-[10px] h-20 w-full'/>
                <div className="flex flex-col ">
                 <p>Handmade pieces that took time to make </p>
                <span className="w-[119px] h-[18px] text-[#9F9F9F] font-[400px] text-[12px]">03 Aug 2022</span>
                </div> 
              </div>
              <div  className="grid grid-cols-2 mt-10 gap-7">
                                <Image src="/b-4.jpg" width={100} height={80} alt="" className='rounded-[10px] h-20 w-full'/>
                <div className="flex flex-col ">
                 <p>Modern home in Milan </p>
                <span className="w-[119px] h-[18px] text-[#9F9F9F] font-[400px] text-[12px]">03 Aug 2022</span>
                </div> 
              </div>
              <div  className="grid grid-cols-2 mt-10 gap-7">
                                <Image src="/b-5.jpg" width={100} height={80} alt="" className='rounded-[10px] h-20 w-full'/>
                <div className="flex flex-col ">
                 <p>Colorful office <br/> redesign </p>
                <span className="w-[119px] h-[18px] text-[#9F9F9F] font-[400px] text-[12px]">03 Aug 2022</span>
                </div> 
              </div>
            </div>
        </div>
     
      </div>

      <div className="text-center mt-5Crafts mb-8 flex justify-center">
        <ul className="flex gap-5">
          <li className="w-14 h-14 bg-[#B88E2F] text-white rounded-md flex justify-center items-center">
            1
          </li>
          <li className="w-14 h-14 bg-[#F9F1E7] rounded-md flex justify-center items-center">
            2
          </li>
          <li className="w-14 h-14 bg-[#F9F1E7] rounded-md flex justify-center items-center">
            3
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
