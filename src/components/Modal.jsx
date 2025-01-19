import React from "react";
import { SlLock } from "react-icons/sl";
import Image from "next/image"; // Next.js Image component import
import { IoIosCloseCircle } from "react-icons/io";
import Link from "next/link";

const Modal = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <>
      {/* Background Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark semi-transparent background
          zIndex: 1000, // Below the modal content
        }}
      ></div>
  
      {/* Modal content */}
      <div
        style={{
          position: "fixed",
          top: "0%",
          right: "0%",
          backgroundColor: "white",
          padding: "20px",
          zIndex: 1001, // Higher than the overlay
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)", // Adds the shadow effect
          width: "100%",
          maxWidth: "400px", // For smaller screens, max width to keep the modal compact
          // height: "100%",
          overflowY: "auto", // Allows scroll on smaller screens
        }}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-[24px] font-[600px] font-poppins">Shopping Cart</h2>
          
          {/* Lock Icon with onClick to close modal */}
          <button onClick={onClose} className="focus:outline-none">
            <SlLock className="h-[30px] text-[#9F9F9F]" />
          </button>
        </div>
  
        <hr className="mb-10" />
        
        {/* Product Details */}
        <div className="flex justify-between flex-col h-full">
        <div >
        <div className="flex flex-row items-center gap-5 md:gap-10">
          {/* Product Image */}
          <Image
            src="/p-main.png"
            width={114}
            height={105}
            alt="Product Image"
            className="h-[100px] w-[100px] bg-[#F9F1E7] rounded-md"
          />
          
          {/* Product Information */}
          <div className="flex flex-col gap-1 font-poppins">
            <p className="font-[400px] text-[#000000] text-[19px]">Asgaard Sofa</p>
            <div className="flex items-center gap-4">
              <p className="text-gray-500">1</p>
              <p className="text-gray-500">X</p>
              <span className="font-semibold text-[#B88E2F]">Rs. 250,000.00</span>
              
              {/* Close Button to remove product */}
              <button
                onClick={() => console.log("Item removed")}
                className="flex items-center justify-center h-[30px] w-[30px] rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
              >
                <IoIosCloseCircle className="h-[20px] w-[20px] text-[#9F9F9F]" />
              </button>
            </div>
          </div>
        </div>
  
        <div className="flex  flex-row items-center gap-5 md:gap-10 mt-3">
          {/* Second Product Image */}
          <Image
            src="/cart-1.jpg"
            width={114}
            height={105}
            alt="Product Image"
            className="h-[100px] w-[100px] bg-[#F9F1E7] rounded-md"
          />
          
          {/* Second Product Information */}
          <div className="flex flex-col gap-1 font-poppins">
            <p className="font-[400px] text-[#000000] text-[19px]">Casaliving Wood</p>
            <div className="flex items-center gap-4">
              <p className="text-gray-500">1</p>
              <p className="text-gray-500">X</p>
              <span className="font-semibold text-[#B88E2F]">Rs. 250,000.00</span>
              <IoIosCloseCircle className="h-[20px] w-[20px] text-[#9F9F9F]" />
            </div>
          </div>
        </div>
        </div>

        {/* Subtotal Section */}
        <div className="mt-5 lg:mt-20 md:20">
        <div className="flex justify-between  font-poppins text-[16px]">
          <p className="text-[#000000] font-bold">Subtotal</p>
          <span className="text-[#B88E2F] text-[16px] font-bold">Rs. 520,000.00</span>
        </div>
  
        <hr className="mb-10" />
        
        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-5 font-poppins">
          {/* Cart Button */}
          <Link href="/cart" className="px-6 py-2 border border-[#000000] rounded-full text-gray-700 hover:bg-gray-100 w-full md:w-auto">
            Cart
          </Link>
          
          {/* Checkout Button */}
          <Link href="/checkout" className="px-6 py-2 border border-[#000000] rounded-full text-gray-700 hover:bg-gray-100 w-full md:w-auto">
            Checkout
          </Link>
  
          {/* Comparison Button */}
          <Link href="/comparision" className="px-6 py-2 border border-[#000000] rounded-full text-gray-700 hover:bg-gray-100 w-full md:w-auto">
            Comparison
          </Link>
        </div>
        </div>
        </div>
      </div>
    </>
  );
  

};

export default Modal;
