import React from "react";
import ContactForm from "../components/ContactForm";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-slate-200">
      <div className="p-6 space-y-2">
        <div className="p-6 lg:p-4 flex flex-col lg:flex-row gap-6  max-w-6xl mx-auto ">
          <div className="overflow-hidden ">
            <img
              src="./src/assets/erp-home.png"
              alt="ERP Dashboard"
              className="w-full max-w-xl"
            />
          </div>

          {/* Right Side - Text Card with background and button inside */}
          <div className="bg-white py-12 px-12  rounded-[24px] flex-1 w-full lg:max-w-md space-y-12 md:text-left  relative mx-auto ">
            <h2 className="text-3xl font-bold text-gray-800">
              Efficiently Manage Patient Health Data With Our ERP Software
            </h2>
            <p className="text-gray-600 ">
              Our platform offers a range of features, including invoice
              creation, inventory management, detailed reporting, and much more,
              to streamline your healthcare operations.
            </p>

            <div className="flex justify-start mt-8">
              <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full inline-flex items-center  hover:bg-blue-700">
                SEE DEMO
                <span className="ml-4">
                  <FaArrowCircleRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* second part */}
        {/* Lower Block */}
        <div className="bg-white rounded-[24px] p-8 sm:p-12 lg:p-20 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between space-y-8 lg:space-y-0">
          {/* Left Text Block */}
          <div className="text-center lg:text-left space-y-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#16184C] pb-4 lg:pb-8">
              Empowering Healthcare with Advanced ERP Solutions
            </h3>
            <p className="text-gray-600 mt-2 sm:mt-6">
              We support the key players in the Healthcare Industry
            </p>
          </div>

          {/* Right Icon Blocks */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 space-y-6 lg:space-y-0">
            {/* Doctors Icon Block */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-blue-100 p-4 rounded-lg">
                <img
                  src="./src/assets/doctor.png"
                  alt="Doctors"
                  className="w-16 mx-auto"
                />
              </div>
              <p className="text-[#16184C] font-semibold uppercase text-sm">
                Doctors
              </p>
            </div>

            {/* Divider (visible only on large screens) */}
            <div className="hidden lg:block h-16 border-l border-gray-300"></div>

            {/* Patients Icon Block */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-blue-100 p-4 rounded-lg">
                <img
                  src="./src/assets/patients.png"
                  alt="Patients"
                  className="w-16 mx-auto"
                />
              </div>
              <p className="text-[#16184C] font-semibold uppercase text-sm">
                Patients
              </p>
            </div>

            {/* Divider (visible only on large screens) */}
            <div className="hidden lg:block h-16 border-l border-gray-300"></div>

            {/* Pharmacies Icon Block */}
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-blue-100 p-4 rounded-lg">
                <img
                  src="./src/assets/medicines.png"
                  alt="Pharmacies"
                  className="w-16 mx-auto"
                />
              </div>
              <p className="text-[#16184C] font-semibold uppercase text-sm">
                Pharmacies
              </p>
            </div>
          </div>
        </div>

        {/* // second part billing */}

        <div className="container mx-auto p-4">
          {/* Flex container for the cards */}
          <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8 lg:ml-24">
            {/* Content Card */}
            <div className="flex-1 bg-gray-50 rounded-[24px] shadow-lg p-6 sm:p-8 lg:p-8 ">
              <div className="flex justify-center lg:justify-start text-blue-600 mb-6">
                <span className="mr-2 mt-2 mb-6">
                  <FaStar />
                </span>
                <h2 className="text-blue-600 text-xl lg:text-2xl font-medium">
                  Unveiling Features
                </h2>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#16184C] mb-6 lg:mb-8">
                Billing & Sales Management
              </h1>
              <p className="text-gray-600 text-sm sm:text-base mb-6 lg:mb-12">
                Our Billing and Sales Management system provides a user-friendly
                Windows executable for offline billing, ensuring smooth
                operations without internet. It streamlines pricing, discounts,
                tax management, and offers real-time access to billing history
                and product tracking, making it ideal for both one-time
                transactions and repeat orders.
              </p>
              <ul className="mb-8 lg:mb-16 space-y-3">
                <li className="flex items-center">
                  <span className="mr-2 ">✔</span> Offline Billing with Windows
                  Executable
                </li>
                <li className="flex items-center">
                  <span className="mr-2 ">✔</span> Sales Price, Discount, and
                  Tax Management
                </li>
                <li className="flex items-center">
                  <span className="mr-2 ">✔</span> Recent Product, Customer
                  History, and Repeat Orders
                </li>
              </ul>
              <a
                href="#"
                className="flex items-center bg-blue-600 text-white font-bold py-3 px-6 rounded-full w-max hover:bg-blue-700"
              >
                ALL FEATURES
                <span className="ml-2">
                  <FaArrowCircleRight />
                </span>
              </a>
            </div>

            {/* Image Card */}
            <div className="flex-1 rounded-lg p-4 sm:p-6 lg:p-8 flex justify-center items-center">
              <img
                src="./src/assets/billing.png"
                alt="Billing & Invoices"
                className="w-full max-w-sm sm:max-w-md lg:max-w-xl rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Second Block- 4th part*/}
        <div className="flex flex-col lg:flex-row items-center  rounded-[24px] p-6">
          {/* Image Card */}
          <div className=" p-4 lg:mr-2 overflow-hidden rounded-[24px] ">
            <img
              src="./src/assets/empoweing.png"
              alt="Empowering Efficiency"
              className="w-full lg:w-auto h-auto max-w-sm lg:max-w-lg rounded-[24px]"
            />
          </div>

          {/* Content Card */}
          <div className="flex-1 p-8 lg:p-16 text-center lg:text-left bg-white rounded-[24px]">
            <div className="flex justify-center lg:justify-start text-blue-600 mb-6">
              <span className="mr-2 mt-2 mb-4">
                <FaStar />
              </span>
              <h2 className="font-medium text-xl lg:text-2xl">Blogs</h2>
            </div>

            <h1 className="text-xl lg:text-2xl font-bold text-[#16184C] mb-6">
              How to Use the APS3 ERP Platform: A Quick Guide
            </h1>
            <p className="text-gray-600 mb-4 text-sm lg:text-base">
              Unlock the full potential of the APS3 ERP platform with this
              simple guide. Learn how to navigate key features like inventory
              management, sales tracking, and customer relations. Whether you’re
              streamlining operations or optimizing workflow, APS3 ERP makes it
              easy to manage your business efficiently, all from one intuitive
              platform. Dive in and see how it transforms your day-to-day tasks!
              <a href="#" className="text-blue-600 font-bold ml-2 underline">
                read more
              </a>
            </p>
          </div>
        </div>
        {/* only images */}
        <div className="container mx-auto p-6 pb-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left Section - Large Image */}
            <div className="lg:col-span-2">
              <img
                src="./src/assets/invoicemanagement.png"
                alt="Mobile Dashboard"
                className="w-full rounded-lg"
              />
            </div>

            {/* Right Section - Stacked images with flex layout */}
            <div className="flex flex-col gap-4">
              {/* Top Image */}
              <div className="flex-grow p-0 m-0">
                <img
                  src="./src/assets/cost-effective.png"
                  alt="Cost Effective Plans"
                  className="w-full h-auto block"
                  style={{ margin: 0, padding: 0 }}
                />
              </div>

              {/* Bottom Image */}
              <div className="flex-grow p-0 m-0">
                <img
                  src="./src/assets/cost.png"
                  alt="Demo ERP"
                  className="w-full h-auto block"
                  style={{ margin: 0, padding: 0 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-0 pb-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
