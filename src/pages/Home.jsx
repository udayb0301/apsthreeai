import React from "react";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <div className="bg-slate-200">
      <div className=" p-8 space-y-8">
        {/* Upper Block */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg p-8">
          {/* Left Side - Image */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="./src/assets/erp-home.png"
              alt="ERP Dashboard"
              className="w-full max-w-sm"
            />
          </div>

          {/* Right Side - Text and Button */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">
              Efficiently Manage Patient Health Data With Our ERP Software
            </h2>
            <p className="text-gray-600">
              Our platform offers a range of features, including invoice
              creation, inventory management, detailed reporting, and much more,
              to streamline your healthcare operations.
            </p>
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4 inline-flex items-center">
              See Demo
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
        {/* Lower Block */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-4 text-center">
          <h3 className="text-2xl font-bold text-gray-800">
            Empowering Healthcare with Advanced ERP Solutions
          </h3>
          <p className="text-gray-600">
            We support the key players in the Healthcare Industry
          </p>
          <div className="flex justify-center space-x-8">
            {/* Icon Blocks */}
            <div className="text-center space-y-2">
              <img
                src="./src/assets/doctor.png"
                alt="Doctors"
                className="w-16 mx-auto"
              />
              <p className="font-semibold text-gray-700">Doctors</p>
            </div>
            <div className="text-center space-y-2">
              <img
                src="./src/assets/patients.png"
                alt="Patients"
                className="w-16 mx-auto"
              />
              <p className="font-semibold text-gray-700">Patients</p>
            </div>
            <div className="text-center space-y-2">
              <img
                src="./src/assets/medicines.png"
                alt="Pharmacies"
                className="w-16 mx-auto"
              />
              <p className="font-semibold text-gray-700">Pharmacies</p>
            </div>
          </div>
        </div>
        {/* idhar se nikala div */}
        {/* // second part billing */}
        <div className="container mx-auto p-4">
          {/* First Block */}
          <div className="flex flex-col lg:flex-row items-center bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex-1 p-4">
              <h3 className="text-blue-600 text-sm font-medium mb-2">
                Unveiling Features
              </h3>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Billing & Sales Management
              </h1>
              <p className="text-gray-600 mb-4">
                Our Billing and Sales Management system provides a user-friendly
                Windows executable for offline billing, ensuring smooth
                operations without internet. It streamlines pricing, discounts,
                tax management, and offers real-time access to billing history
                and product tracking, making it ideal for both one-time
                transactions and repeat orders.
              </p>
              <ul className="mb-4">
                <li className="text-green-600 mb-2 flex items-center">
                  <span className="mr-2">✔</span> Offline Billing with Windows
                  Executable
                </li>
                <li className="text-green-600 mb-2 flex items-center">
                  <span className="mr-2">✔</span> Sales Price, Discount, and Tax
                  Management
                </li>
                <li className="text-green-600 flex items-center">
                  <span className="mr-2">✔</span> Recent Product, Customer
                  History, and Repeat Orders
                </li>
              </ul>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
              >
                All Features
              </a>
            </div>
            <div className="flex-1 p-4">
              <img
                src="./src/assets/billing.png"
                alt="Billing & Invoices"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Second Block */}
          <div className="flex flex-col lg:flex-row items-center bg-gray-50 rounded-lg p-6">
            <div className="flex-1 p-4">
              <img
                src="./src/assets/empoweing.png"
                alt="Empowering Efficiency"
                className="w-full rounded-lg "
              />
            </div>
            <div className="flex-1 p-4">
              <h3 className="text-blue-600 text-sm font-medium mb-2">Blogs</h3>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                How to Use the APS3 ERP Platform: A Quick Guide
              </h2>
              <p className="text-gray-600 mb-4">
                Unlock the full potential of the APS3 ERP platform with this
                simple guide. Learn how to navigate key features like inventory
                management, sales tracking, and customer relations. Whether
                you’re streamlining operations or optimizing workflow, APS3 ERP
                makes it easy to manage your business efficiently, all from one
                intuitive platform. Dive in and see how it transforms your
                day-to-day tasks!
              </p>
              <a href="#" className="text-blue-600 font-bold">
                Read more
              </a>
            </div>
          </div>
        </div>

        {/* only images */}
        <div className="container mx-auto p-6">
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

        <div className="flex-grow m-0 p-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
