import React from "react";

function ERPFeatures() {
  return (
    <div className="bg-slate-200">
      <div className="bg-white p-4 sm:p-6 md:p-14 rounded-[24px] max-w-7xl mx-auto my-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Left Section: Title and Description */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left px-4">
            <h2 className="text-blue-600 font-semibold mb-2">
              Unveiling Features
            </h2>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Revolutionize Your Business with Our Comprehensive ERP Features
            </h1>
            <p className="text-gray-600 mb-6">
              Transform your business operations with seamless solutions for
              invoicing, inventory control, billing, and customer management.
              Designed with advanced technologies and mobile accessibility, this
              all-in-one platform ensures efficiency and growth at every step.
            </p>
          </div>

          {/* Right Section: Image Only */}
          <div className="w-full lg:w-1/2 flex justify-center px-2">
            <img
              src="./src/assets/feature.png"
              alt="ERP Features Illustration"
              className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full max-w-2xl rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* // second part */}
      <div className="flex flex-col md:flex-row gap-0 p-4 md:p-12 ">
        {/* Invoice Management Image */}
        <div className="  rounded-xl overflow-hidden flex justify-center items-center p-4">
          <img
            src="./src/assets/feature1.png"
            alt="Invoice Management"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Schedule Notification Image */}
        <div className=" rounded-xl overflow-hidden flex justify-center items-center p-4">
          <img
            src="./src/assets/feature2.png"
            alt="Schedule Notification"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Powerful Analytics Image */}
        <div className=" rounded-xl overflow-hidden flex justify-center items-center p-4">
          <img
            src="./src/assets/feature3.png"
            alt="Powerful Analytics"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* third part */}
      <div className="min-h-screen p-4 md:p-12">
        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Explore More Powerful Features for Enhanced Business Efficiency
        </h1>

        {/* Card Layout */}
        <div className="flex flex-col lg:flex-row  mx-auto">
          {/* Streamlined Sales Operations Image */}
          <div className=" rounded-xl overflow-hidden flex justify-center items-center p-4 lg:w-1/3">
            <img
              src="./src/assets/explore1.png"
              alt="Streamlined Sales Operations"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Inventory Management Image */}
          <div className=" rounded-xl overflow-hidden flex justify-center items-center p-4 lg:w-1/3">
            <img
              src="./src/assets/explore2.png"
              alt="Inventory Management"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Effortless Multi-Device Support Image */}
          <div className=" rounded-xl overflow-hidden flex justify-center items-center p-4 lg:w-1/3">
            <img
              src="./src/assets/explore3.png"
              alt="Effortless Multi-Device Support"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Fourth part */}
      <div className="m-4 mt-2 lg:max-w-7xl lg:ml-32">
        <img
          src="./src/assets/windows.png"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>

      {/* Fifth Part */}
      <div className="min-h-screen p-4 md:p-12">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Explore More Powerful Features for Enhanced Business Efficiency
        </h1>

        {/* Card Layout */}
        <div className="flex flex-col lg:flex-row mx-auto">
          {/* Streamlined Sales Operations Image */}
          <div className=" rounded-xl overflow-hidden flex justify-center items-center p-4 lg:w-1/3">
            <img
              src="./src/assets/discover1.png"
              alt="Streamlined Sales Operations"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Inventory Management Image */}
          <div className=" rounded-xl overflow-hidden flex justify-center items-center p-4 lg:w-1/3">
            <img
              src="./src/assets/discover2.png"
              alt="Inventory Management"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Effortless Multi-Device Support Image */}
          <div className=" rounded-xl overflow-hidden flex justify-center items-center p-4 lg:w-1/3">
            <img
              src="./src/assets/discover3.png"
              alt="Effortless Multi-Device Support"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ERPFeatures;
 