import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import { IoChevronForwardSharp } from "react-icons/io5";
import Link from "next/link";
import Footer from "@/components/Footer";

function checkout() {
  return (
    <div>
      <Header />
      <div className="h-[313px] w-full relative ">
        <Image
          src="/shopbanner.png"
          width={1440}
          height={100}
          className="absolute w-full h-full object-cover"
          alt="Shop Banner"
        />
        <div className="flex justify-center items-center flex-col h-full z-50 relative">
          <h2 className="text-[40px] font-poppins font-bold text-center">
            Checkout{" "}
          </h2>
          <div className="flex">
            <Link
              href="/"
              className="font-poppins font-semibold flex items-center"
            >
              Home <IoChevronForwardSharp />
            </Link>
            <span>Checkout</span>
          </div>
        </div>
      </div>
 
      <div className="block lg:flex md:flex gap-6 py-10 lg:py-20 px-4 md:px-10 lg:px-10  ">
      <div className="pt-10 pl-0  md:pl-10 lg:pl-10font-poppins">
  <h1 className="font-bold text-[36px] pb-5">Billing details</h1>
  
  {/* First Name and Last Name Section */}
  <div className="flex flex-wrap gap-5">
    <div className="w-full sm:w-[211px]">
      <p>First Name</p><br/>
      <input
        type="text"
        className="border-2 border-gray-300 rounded-md p-2 w-full h-[75px]"
      />
    </div>
    <div className="w-full sm:w-[211px]">
      <p>Last Name</p><br/>
      <input
        type="text"
        className="border-2 border-gray-300 rounded-md p-2 w-full h-[75px]"
      />
    </div>
  </div>

  {/* Company Name */}
  <div className="mt-10 w-full sm:w-[453px]">
    <p>Company Name (Optional)</p><br/>
    <input
      type="text"
      className="border-2 border-gray-300 rounded-md p-2 w-full h-[75px]"
    />
  </div>

  {/* Country / Region */}
  <div className="mt-10 w-full sm:w-[453px]">
    <p>Country / Region</p><br/>
    <select className="border-2 border-gray-300 rounded-md p-2 w-full h-[75px]">
      <option value="pakistan">Pakistan</option>
      <option value="srilanka">Sri Lanka</option>
      <option value="india">India</option>
      <option value="usa">USA</option>
      <option value="uk">UK</option>
      <option value="canada">Canada</option>
    </select>
  </div>

  {/* Street Address */}
  <div className="mt-10 w-full sm:w-[453px]">
    <p>Street address</p><br/>
    <input
      type="text"
      className="border-2 border-gray-300 rounded-md p-2 w-full h-[75px]"
    />
  </div>

  {/* Province */}
  <div className="mt-10 w-full sm:w-[453px]">
    <p>Province</p><br/>
    <select className="border-2 border-gray-300 rounded-md w-full h-[75px]">
      <option value="punjab">Punjab</option>
      <option value="sindh">Sindh</option>
      <option value="kpk">Khyber Pakhtunkhwa</option>
      <option value="balochistan">Balochistan</option>
      <option value="gilgit-baltistan">Gilgit-Baltistan</option>
      <option value="ajk">Azad Jammu and Kashmir</option>
      <option value="islamabad">Islamabad Capital Territory</option>
    </select>
  </div>

  {/* ZIP Code */}
  <div className="mt-10 w-full sm:w-[453px]">
    <p>ZIP code</p><br/>
    <input
      type="text"
      className="border-2 border-gray-300 rounded-md p-2 w-full h-[75px]"
    />
  </div>

  {/* Phone */}
  <div className="mt-10 w-full sm:w-[453px]">
    <p>Phone</p><br/>
    <input
      type="text"
      className="border-2 border-gray-300 rounded-md p-2 w-full h-[75px]"
    />
  </div>

  {/* Email Address */}
  <div className="mt-10 w-full sm:w-[453px]">
    <p>Email address</p><br/>
    <input
      type="text"
      className="border-2 border-gray-300 rounded-md p-2 w-full h-[75px]"
    />
  </div>

  {/* Additional Information */}
  <div className="mt-10 w-full sm:w-[453px]">
    <input
      type="text"
      id="Additional information"
      placeholder="Additional information"
      className="border-2 border-gray-300 rounded-md p-2 w-full h-[75px]"
    />
  </div>
</div>




<div>
          <div className="mt-10 pl-0 flex gap-20 font-poppins lg:pl-10 md:pl-10">
            <div>
              <div className="mt-10 pl-0 lg:pl-10 md:pl-10 flex lg:flex md:flex gap-20">
                {/* Left Column */}
                <div className="mt-10 pl-5 space-y-2 ">
                  <h3 className="mb-2 text-[24px] font-semibold">Product</h3>
                  <p className="mb-2 text-[#9F9F9F]">Asgaard sofa X 1</p>
                  <p className="mb-2 text-[#000000]">Subtotal</p>
                  <p>Total</p>
                </div>

                {/* Right Column */}
                <div className="mt-10 pl-5 text-center mr-5">
                  <h1 className="mb-2 text-[24px] font-semibold">Subtotal</h1>
                  <p className="mb-2 text-[#000000]">Rs. 250,000.00</p>
                  <p className="mb-2 text-[#000000]">Rs. 250,000.00</p>
                  <h1 className="mb-2 text-[#B88E2F] text-[24px] font-semibold">
                    Rs. 250,000.00
                  </h1>
                </div>
              </div>
              <hr />

              {/* Section Below */}
            </div>
          </div>
          <div className="mt-10 lg:pl-10 md:pl-10">
            <p className="text-[#000000] font-semibold">Direct Bank Transfer</p>
            <br />
            <p className="text-[#9F9F9F] font-[300px]">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>

            <div className="space-y-4 mt-4 text-[#9F9F9F]">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="bankTransfer"
                  name="paymentMethod"
                  value="Direct Bank Transfer"
                  className="mr-2"
                />
                <label htmlFor="bankTransfer">Direct Bank Transfer</label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="cashOnDelivery"
                  name="paymentMethod"
                  value="Cash On Delivery"
                  className="mr-2"
                />
                <label htmlFor="cashOnDelivery">Cash On Delivery</label>
              </div>
              <p className="mt-6 text-[#000000] text-[16px] font-[300px]">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </p>

              <div className="mt-8 text-center">
                <button className="text-black border w-[318px] h-[64px] text-[20px] border-[#000000] px-6 py-3 text-lg rounded-xl hover:text-black hover:border-gray-600">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div><hr/>








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
          </div><hr/>

      <Footer />
    </div>
  );
}

export default checkout;
