import React, {useState} from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className=" bg-white shadow-md p-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/home" className="flex items-center">
            <img
              src="./src/assets/logo.png"
              alt=""
              className="h-8 w-auto px-6"
            />
          </Link>
        </div>
        {/* logo end */}

        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4  18h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/home" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>

          <Link to="/features" className="text-gray-700 hover:text-blue-600">
            Features
          </Link>

          <Link to="/pricing" className="text-gray-700 hover:text-blue-600">
            Pricing
          </Link>

          <Link to="/blogs" className="text-gray-700 hover:text-blue-600">
            Blogs
          </Link>

          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </div>
        {/* Login/Signup button */}

        <div className="hidden md:block px-5">
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Login / Signup
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {isOpen ? (
        <ul className="flex-col  md:hidden">
          <li className="px-6 pt-4 pb-2">
            <Link to="/home" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li className="px-6 py-2">
            <Link to="/features" className="text-gray-700 hover:text-blue-600">
              Features
            </Link>
          </li>
          <li className="px-6 py-2">
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
          </li>
          <li className="px-6 py-2">
            <Link to="/blogs" className="text-gray-700 hover:text-blue-600">
              Blogs
            </Link>
          </li>

          <li className="px-6 py-2">
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </li>

          <div className=" md:block px-6 py-2" >
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Login / Signup
          </button>
        </div>
      
        </ul>
    
      ) : null}


    </nav>
  );
}

export default Navbar;




