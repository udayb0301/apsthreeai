import React from "react";
import { FiDollarSign } from "react-icons/fi";


function PricingPlans() {
  return (
    <div className="bg-gray-100 py-12">
      {/* Container for the Top Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 rounded-xl">
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center md:justify-between mb-8">
          {/* Image on the Left */}
          <div className="md:w-1/2 flex justify-start mb-6 md:mb-0">
            <img
              src="./src/assets/price.png" // Replace with actual image URL
              alt="Pricing Illustration"
              className="w-full max-w-sm rounded-lg"
            />
          </div>

          {/* Text Content on the Right */}
          <div className="md:w-1/2 text-center md:text-left mr-24">
            {/* <p>
              <span className="text-blue-600">
                <FiDollarSign />
              </span>
              <h2 className="text-blue-600 font-semibold mb-14 pt-4">
                Pricing Plans
              </h2>
            </p> */}

            <div className="flex items-center space-x-2">
              <h2 className="flex items-center  my-2 text-blue-600 ">
                <span className="pr-2">
                  <FiDollarSign />
                </span>
               Pricing Plans
              </h2>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-[#16184C] pt-4">
              Choose the Right Plan for Seamless Healthcare Management
            </h1>
            <p className="text-gray-600 mb-8">
              Streamline healthcare with plans optimized for patient management,
              pharmacy inventory, and doctor coordination—ensuring efficiency
              for all stakeholders.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Images in Two Columns */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Image 1 */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="./src/assets/price1.png" // Replace with actual pricing card image URL
              alt="Free Trial Plan"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Image 2 */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="./src/assets/price2.png" // Replace with actual pricing card image URL
              alt="Cost Effective Plan"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="./src/assets/price3.png" // Replace with actual pricing card image URL
              alt="Small Business Plan"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 4 */}
          <div className="rounded-lg overflow-hidden">
            <img
              src="./src/assets/price4.png" // Replace with actual pricing card image URL
              alt="Enterprise Plan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlans;
