import LoginImage from "../assets/agents-image-01.jpeg/couple-login-modal.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="absolute top-0 left-0 z-[999] w-full bg-black">
        <div className="flex justify-between items-center px-8 lg:px-20 py-5 relative">
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`ri-${menuOpen ? "close-line" : "menu-line"}`}></i>

          </button>

          <div className="flex items-center space-x-2 text-white font-bold text-4xl">
            <Link to="/">
              <span className="tracking-wider font-bricolage">
                PR<span className="text-[#c2bb43] font-bricolage">E</span>
                M
              </span>
            </Link>
          </div>

          <ul className="hidden nav-menu lg:flex space-x-5 text-white font-medium">
            <li className="hover:text-[#c2bb43] transition-colors duration-300 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#c2bb43] transition-colors duration-300 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-[#c2bb43] transition-colors duration-300 cursor-pointer">
              <Link to="/properties">Properties</Link>
            </li>
            <li className="hover:text-[#c2bb43] transition-colors duration-300 cursor-pointer">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-[#c2bb43] transition-colors duration-300 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-1 text-white text-lg">
              <i className="fas fa-phone-alt"></i>
              <span className="font-[500]">85275 33067</span>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="text-black text-xl"
            >
              <i className="ri-user-3-line hover:text-[#c2bb43] transition"></i>
            </button>

            <button className="nav-btn bg-[#c2bb43] border border-[#c2bb43] btn relative text-black rounded overflow-hidden py-2 px-4 font-[600] text-md">
              <a href="#" className="z-[1] relative">
                Add Listing
              </a>
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden nav-menu trc2bb43m transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 max-h-screen translate-y-0"
              : "opacity-0 max-h-0 -translate-y-4"
          } overflow-hidden bg-black text-white px-8 py-4 space-y-3`}
        >
          <li className="hover:text-[#c2bb43] transition-colors duration-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#c2bb43] transition-colors duration-300 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-[#c2bb43] transition-colors duration-300 cursor-pointer">
            <Link to="/properties">Properties</Link>
          </li>
          <li className="hover:text-[#c2bb43] transition-colors duration-300 cursor-pointer">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-[#c2bb43] transition-colors duration-300 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </div>
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
            <div className="bg-white w-full max-w-5xl rounded-lg flex overflow-hidden">
              {/* Left Side Image */}
              <div className="w-1/2 hidden md:block relative">
               <div className="login-image-overlay"></div>
                <img
                  src={LoginImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 flex items-end w-full h-full font-bold bg-black/60 font-bricolage text-3xl text-white p-6">
                  Welcome to <br /> Premium Real Estate Management
                </div>
              </div>

              {/* Right Side Form */}
              <div className="w-full md:w-1/2 p-8 relative">
                <button
                  className="absolute top-4 right-4 hover:text-black text-3xl"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>

                <h2 className="text-2xl font-semibold text-black mb-6">
                  Sign into your account
                </h2>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full border px-4 py-2 rounded"
                  />
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="w-full border px-4 py-2 rounded"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <i
                        className={`fa-solid ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        }`}
                      ></i>
                    </button>
                  </div>

                  <button className="w-full bg-[#c2bb43] text-white font-semibold py-2.5 text-lg border-2 border-[#c2bb43] c2bb43d transition-all duration-300">
                    Login
                  </button>
                </div>

                <div className="flex justify-between text-end mt-4 text-[#c2bb43]">
                  <button className="hover:underline">Register here </button>
                  <button className="hover:underline">Forgot password </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
