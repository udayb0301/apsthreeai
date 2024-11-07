import React, { useState } from "react";
import { IoIosCall } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const ContactFormWithImage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200 p-4 ">
      <div className="max-w-7xl w-full  bg-white  shadow-lg overflow-hidden md:flex rounded-[24px]">
        {/* Left Side - Contact Form */}
        <div className=" md:w-1/2 px-20 py-20 mt-8 ">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 space-x-8">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg space-x-8"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 ">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 p-4  border border-gray-300 rounded-lg resize-none "
                rows="2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-6 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Contact Us Image */}
        <div className="w-full max-w-lg md:w-1/2 bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8  m-16 flex flex-col justify-center rounded-[24px]  mx-auto">
          <p className="flex items-center mx-2 my-2 mt-22 text-yellow-300">
            <span className="pr-2">
              <IoIosCall />
            </span>
            Get Connected
          </p>

          <p className="text-4xl mx-3 mt-3 sm:text-4xl  font-bold">
            Contact Us
          </p>
          <p className="text-sm mx-4 mt-2 sm:text-sm">
            Fill out this form for trying out a free demo
          </p>

          <div className="mt-20 mx-3 space-y-4">
            {/* Phone Number */}
            <div className="flex items-center space-x-2">
              <p className="flex items-center mx-2 my-2 ">
                <span className="pr-6">
                  <IoIosCall />
                </span>
                +916356561125
              </p>
            </div>

            {/* Email */}

            <div className="flex items-center space-x-2">
              <p className="flex items-center mx-2 my-2 ">
                <span className="pr-6">
                  <IoMailSharp />
                </span>
                admin@apsthreeai.ai
              </p>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-2">
              <p className="flex items-center mx-2  my-2">
                <span className="text-sm sm:text-base pr-6">
                  <FaLocationDot />
                </span>
                H-203, Shukan Platinum Appt, Opp. Satyam Hospital, Nr.
                Vandemataram City, Ahmedabad, Gujarat, India - 382481
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormWithImage;