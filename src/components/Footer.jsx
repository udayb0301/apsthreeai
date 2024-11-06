import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img
            src="./src/assets/logo_footer.png"
            alt=""
            className="h-8 w-auto"
          />
          <p className="pt-10 flex items-center gap-3">
            <span className="pr-2">
              <IoIosCall />
            </span>
            +916356561125
          </p>
          <p className="pt-4 flex items-center gap-3">
            <span className="pr-2">
              <MdOutlineMail />
            </span>
            admin@apsthreeai.ai
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start">
          <p className="font-semibold">Location</p>
          <p className="pt-2">H-203, Shukan Platinum Appt,</p>
          <p>Opp. Satyam Hospital, Nr.</p>
          <p>Vandemataram City,</p>
          <p>Ahmedabad, Gujarat, India -</p>
          <p> 382481</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start space-y-2">
          <p className="font-semibold">Quick Links</p>
          <a href="/home" className="hover:underline">
            Home
          </a>
          <a href="/features" className="hover:underline">
            Features
          </a>
          <a href="/pricing" className="hover:underline">
            Pricing
          </a>
          <a href="/blogs" className="hover:underline">
            Blogs
          </a>
        </div>

        {/* Subscribe */}
        <div className="flex flex-col items-start">
          <p className="font-semibold">Subscribe</p>
          <div className="flex mt-6">
            <input
              type="email"
              placeholder="Get updates"
              className="p-2 rounded-l bg-white text-black outline-none"
            />
            <button className="p-2 bg-blue-500 rounded-r">
              <span className="text-white">&#10140;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col lg:flex-row justify-between  mt-10 border-t border-gray-700 pt-5 space-y-5 lg:space-y-0">
        <div className="flex space-x-4">
          <a href="#" className="border-2 border-white rounded-full p-2 ">
            <FaLinkedinIn className="h-4 w-auto" />
          </a>
          <a href="#" className="border-2 border-white rounded-full p-2">
            <FaFacebookF />
          </a>
        </div>

        {/* Privacy Links */}
        <div className="flex flex-col items-start space-y-4 lg:space-y-0 lg:flex-row lg:space-x-10">
          {/* <div className="flex space-x-10 justify-between items-center "> */}
          <a href="#" className="underline lg:ml-40 sm: py-2">
            Privacy Statement
          </a>
          <a href="#" className="underline sm: py-2">
            Terms & Condition
          </a>
        </div>

        {/* Bottom Section */}
        <div className="text-sm text-left  lg:text-right sm: py-2">
          <p>
            &copy; 2024, made with by APS THREEAI LLP, Inc. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
