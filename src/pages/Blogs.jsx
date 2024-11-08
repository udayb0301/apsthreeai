import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { IoIosCalendar } from "react-icons/io";

const Blogs = () => {
  return (
    <>
      <div className="bg-slate-200">
        {/* ye div daala */}
        <div className="p-4 sm:p-6 lg:p-10 ml-3">
          {/* First Section */}
          <div className="p-6 lg:p-4 flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto lg:my-0">
            {/* Left Section - Large Image */}
            <div className="flex-1  overflow-hidden">
              <img
                src="./src/assets/erp.png"
                alt="Main Healthcare Image"
                className="w-full h-full object-fit rounded-[24px] "
              />
            </div>

            {/* Right Section - Blog Images with Titles */}
            <div className="bg-white p-6 rounded-[24px]  flex-1 w-full lg:max-w-md space-y-4">
              <h3 className="text-gray-800 text-xl font-semibold mb-2 space-y-2">
                Other Blogs
              </h3>

              {/* Blog List */}
              <div className="space-y-2">
                {/* Blog Item 1 */}
                <div className="flex items-center gap-5 border-t-[2px] ">
                  <img
                    src="./src/assets/blog-image1.png"
                    alt="Blog 1"
                    className="w-16 h-16 lg:w-[138px] lg:h-[96px] m-2  rounded-md object-cover space-y-2"
                  />
                  <p className="text-gray-700 text-sm font-medium m-4">
                    Revolutionizing Pharmacy Management with ERP Solutions
                  </p>
                </div>

                {/* Blog Item 2 */}
                <div className="flex items-center gap-4 border-t-[2px] ">
                  <img
                    src="./src/assets/blog-image2.png"
                    alt="Blog 2"
                    className="w-16 h-16  lg:w-[138px] lg:h-[96px] m-2 rounded-md object-cover"
                  />
                  <p className="text-[#16184C] text-sm font-medium m-4">
                    How ERP Systems Drive Efficiency in Healthcare Inventory
                    Management
                  </p>
                </div>

                {/* Blog Item 3 */}
                <div className="flex items-center gap-4 border-t-[2px]">
                  <img
                    src="./src/assets/blog-image3.png"
                    alt="Blog 3"
                    className="w-16 h-16 lg:w-[138px] lg:h-[96px] m-2 rounded-md object-cover"
                  />
                  <p className="text-gray-700 text-sm font-medium m-4">
                    The Future of Pharmacy: Integrating Technology for Better
                    Patient Care
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Another code */}
          {/* idhar se div nikala */}
          {/* ERP Solutions Section */}
          <section className="max-w-6xl mx-auto p-8 sm:p-6 lg:p-20 bg-white shadow-md rounded-[24px] mb-12 ">
            <header className="mb-6">
              <p className="text-xs sm:text-sm text-blue-600 flex items-center space-x-2">
                <span className="material-icons text-blue-600">
                  <FaRegClock />
                </span>
                <span className="pr-4">6 min read</span>
                <span>
                  <IoIosCalendar />
                </span>
                <span className="space-y-4">20 Oct, 2024</span>
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 pt-4">
                How ERP Solutions Are Revolutionizing Healthcare Management
              </h1>
            </header>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 pt-6">
                Introduction
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-700 pt-4">
                In today’s fast-paced world, healthcare institutions require
                more than just good doctors and modern facilities. Efficient
                resource management, inventory control, and streamlined patient
                care processes are essential for providing quality healthcare
                services. This is where ERP (Enterprise Resource Planning)
                software steps in, offering a unified platform to manage
                everything from billing and inventory to patient data and
                communication channels.
              </p>
              <p className="mt-2 text-sm sm:text-base text-gray-700 pt-4">
                At APS Three AI, we understand the challenges faced by
                healthcare providers. Our ERP solutions are designed to simplify
                operations, improve patient care, and ensure seamless
                communication, all while keeping costs manageable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                Key Features of ERP in Healthcare
              </h2>

              {/* Features List */}
              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 pt-2 underline">
                  1. Integrated Billing & Sales Management
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">
                  One of the most time-consuming activities in healthcare is
                  managing patient billing. With APS Three AI’s invoice
                  management system, healthcare providers can easily track and
                  generate invoices for services, including doctor
                  consultations, treatments, and pharmacy sales. Automated
                  payment reminders ensure that no bill goes unnoticed,
                  improving cash flow and reducing delays.
                  <br /> Our multi-device support allows staff to access the
                  platform from desktop and mobile, ensuring billing can happen
                  even on-the-go.
                </p>
                <p className="mt-2 text-sm sm:text-base text-gray-700"></p>
              </div>

              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 pt-4 underline">
                  2. Smart Inventory Management for Pharmacies
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">
                  Maintaining stock levels of medicines and medical supplies is
                  critical. APS Three AI’s inventory management system enables
                  hospitals and pharmacies to monitor stock in real-time, set up
                  alerts for low inventory levels, and prevent overstocking.
                </p>
                <p className="mt-2 text-sm sm:text-base text-gray-700">
                  Our plans are scalable, ranging from managing inventories of
                  100 to 2 lakh items, making it perfect for both small clinics
                  and large hospitals.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 underline pt-4">
                  3. Seamless Communication Channels
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">
                  Communication is at the heart of effective healthcare. APS
                  Three AI’s ERP integrates SMS, WhatsApp, and Email
                  notifications to enhance communication between doctors,
                  patients, and administration.
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 ml-2">
                  <li>Appointment reminders reduce no-shows.</li>
                  <li>
                    Prescription notifications keep patients updated with their
                    medication schedules.
                  </li>
                  <li>
                    Critical alerts can reach multiple stakeholders without
                    delay.
                  </li>
                </ul>
                <p className="mt-2 text-sm sm:text-base text-gray-700">
                  Our ERP also allows bulk messaging within defined limits, as
                  per the selected plan.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 underline pt-4">
                  4. Offline Access with Windows App
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">
                  APS Three AI’s ERP is offline-accessible via a Windows
                  application, ensuring critical data is accessible even during
                  internet outages. It synchronizes automatically when
                  reconnected.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 underline pt-4">
                  5. Custom Healthcare Apps for Different Stakeholders
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">
                  The healthcare system involves multiple participants –
                  doctors, patients, and administrators. APS Three AI offers
                  separate applications for each:
                </p>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 pt-2 ml-2">
                  <li>
                    Doctor App: Manage appointments, view patient history, and
                    coordinate with pharmacy staff.
                  </li>
                  <li>
                    Patient App: View prescriptions, schedule appointments, and
                    track bills.
                  </li>
                  <li>
                    Hospital App: Centralize all administrative tasks, including
                    staffing and equipment management.
                  </li>
                </ul>
                <p className="mt-2 text-sm sm:text-base text-gray-700">
                  This ensures that everyone involved in patient care is on the
                  same platform, working together effectively.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-700  pt-10">
                  Why Choose APS Three AI ERP?
                </h3>
                <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 pt-2 ml-2">
                  <li>
                    Scalable Plans for Every Need: From small clinics to large
                    hospitals, APS Three AI offers customized pricing plans with
                    inventory limits, communication credits, and multi-year
                    subscriptions.
                  </li>
                  <li>
                    Affordable and Transparent Pricing: Whether you need a
                    one-month plan or a 5-year commitment, our plans offer
                    flexibility and value for money.
                  </li>
                  <li>
                    Easy Onboarding and Demo Access: Get started with our free
                    demo trials to experience the ERP’s capabilities firsthand.
                    Our dedicated support team assists with quick onboarding and
                    training.
                  </li>
                  <li>
                    Location Independence: Our cloud-based ERP ensures that you
                    stay connected to your business anytime, anywhere.
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-700  pt-10">
                  Conclusion
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-700">
                  In the ever-evolving landscape of healthcare, ERP solutions
                  are no longer a luxury but a necessity. APS Three AI ERP
                  stands out with its focus on efficiency, scalability, and
                  seamless communication. Whether you're managing pharmacy
                  stocks, patient records, or doctor schedules, our ERP offers
                  everything you need to ensure smooth operations and superior
                  patient care. <br />
                  By adopting APS Three AI’s ERP, healthcare providers can focus
                  on what truly matters – delivering exceptional care to their
                  patients, while the platform takes care of the rest.
                </p>
              </div>
            </section>

            <footer className="pt-4 border-t border-gray-200 mt-20">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                Get in Touch
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-700">
                Ready to transform your healthcare operations? Contact us at{" "}
                <a href="tel:+916356561125" className="text-blue-500">
                  +91 6356561125
                </a>{" "}
                or email{" "}
                <a href="mailto:admin@apsthreeai.ai" className="text-blue-500">
                  admin@apsthreeai.ai
                </a>{" "}
                to schedule a demo or learn more about our pricing plans.
              </p>
            </footer>
          </section>

          <section className="py-14 px-8 md:px-8 lg:px-24 ">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-left text-[#16184C] mb-8 ">
              Explore More Powerful Blog Insights for Enhanced Business
              Efficiency
            </h2>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {/* Image 1 */}
              <div className="rounded-lg ">
                <img
                  src="./src/assets/blog-image4.png"
                  alt="Blog Insight 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2 */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src="./src/assets/blog-image4.png"
                  alt="Blog Insight 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3 */}
              <div className="rounded-lg overflow-hidden">
                <img
                  src="./src/assets/blog-image4.png"
                  alt="Blog Insight 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Blogs




