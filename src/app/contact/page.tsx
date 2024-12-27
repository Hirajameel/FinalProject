import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <Header />
      <div className="h-[313px] w-full relative ">
        <Image
          src="/shopbanner.png"
          width={1440}
          height={100}
          className="absolute w-full h-full  "
          alt=""
        />
        <div className="flex justify-center items-center flex-col h-full z-50 relative">
          <h2 className="text-[40px] font-poppins font-bold text-center">
            Contact
          </h2>
          <div className="flex ">
            <Link href="/" className="font-poppins font-semibold flex items-center">
              Home
              <IoChevronForwardSharp />
            </Link>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[1183px] mb-5 sec1 mx-auto my-0 px-4 lg:px-0">
  <div className="text-center font-poppins mb-10 mt-8">
    <h5 className="font-bold text-[28px] lg:text-[36px]">Get In Touch With Us</h5>
    <p className="text-[#9F9F9F] text-[14px] lg:text-[16px]">
      For More Information About Our Product & Services. Please Feel Free To Drop Us
      <br className="hidden lg:block" />
      An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
    </p>
  </div>
  <div className="flex flex-wrap lg:flex-nowrap gap-6">
    {/* Left Section */}
    <div className="w-full lg:w-[399px] h-auto">
      <div className="flex gap-2 mb-4">
        <FaLocationDot />
        <div>
          <h3 className="font-bold">Address</h3>
          <p>236 5th SE Avenue, New York NY10000, United States</p>
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        <FaPhoneAlt />
        <div>
          <h3 className="font-bold">Phone</h3>
          <p>
            Mobile: +(84) 546-6789
            <br />
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <MdAccessTimeFilled />
        <div>
          <h3 className="font-bold">Working Time</h3>
          <p>
            Monday-Friday: 9:00 -22:00
            <br />
            Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-full lg:w-[60%] px-2 lg:px-20">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Your Name
        </label>
        <input
          type="text"
          className="w-full border rounded-md h-12 lg:h-16 border-[#9F9F9F] px-5"
          placeholder="Abc"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email Address
        </label>
        <input
          type="text"
          className="w-full border rounded-md h-12 lg:h-16 border-[#9F9F9F] px-5"
          placeholder="Abc@def.com"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-2 text-sm font-medium">
          Subject
        </label>
        <input
          type="text"
          className="w-full border rounded-md h-12 lg:h-16 border-[#9F9F9F] px-5"
          placeholder="This is optional"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 text-sm font-medium">
          Your Message
        </label>
        <textarea
          className="w-full border rounded-md h-20 lg:h-28 border-[#9F9F9F] px-5 pt-3"
          placeholder="Hi! I’d like to ask about..."
        ></textarea>
      </div>
      <button className="mt-3 w-full lg:w-[222px] py-3 font-poppins font-bold bg-[#B88E2F] text-[#FFFFFF]">
        Submit
      </button>
    </div>
  </div>
</div><br/>


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
  );
};

export default page;
