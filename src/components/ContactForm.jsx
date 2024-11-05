import React, { useState } from "react";


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
            {/* <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="text-gray-500 mb-6">
              Fill out this form for trying out free demo
            </p> */}

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
                  <label className="block text-gray-700 space-x-8">Last name</label>
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
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                  rows="4"
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
          <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 m-10 flex flex-col justify-center rounded-[24px]">
            <h2 className="text-3xl font-semibold mb-2">Get Connected</h2>
            <p className="text-xl mb-6">Contact Us</p>
            <p className="text-lg">
              Fill out this form for trying out a free demo
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a1 1 0 001.12 0L21 8m0 0a11.05 11.05 0 01-9 5c-4.47 0-8.42-2.61-9-5m9 5v5m-3-5h3v5h3m3 0v5m-6-5a11.05 11.05 0 019-5c4.47 0 8.42 2.61 9 5M3 8h3v10m-3 0v2a10.97 10.97 0 009 5c4.47 0 8.42-2.61 9-5m0 0v-2m-9 5v5m-3-5h3v5"
                  />
                </svg>
                <span>+916356561125</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 10-8 0v4m5 0v-4m5 0v4m0 0v6a4 4 0 01-8 0v-6m8 0H5"
                  />
                </svg>
                <span>admin@apsthreeai.ai</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h4m0 0v4m0-4l-4 4m0-4l-4 4m-4 0H7m4 4H7v-4h4l-4-4m12 4V8m0 0L17 4M7 8v4H4V8h3zm0 4l-4 4m4 4v-4m0 4l4-4"
                  />
                </svg>
                <span>
                  H-203, Shukan Platinum Appt, Opp. Satyam Hospital, Nr.
                  Vandemataram City, Ahmedabad, Gujarat, India - 382481
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ContactFormWithImage;
