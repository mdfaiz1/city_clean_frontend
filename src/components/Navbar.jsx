import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex flex-wrap place-items-center ">
      <section className="relative mx-auto">
        <nav className="flex justify-between bg-[#006D5B] text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            {/* Logo */}
            <NavLink
              to="/"
              className="text-3xl font-bold font-heading text-yellow-400"
            >
              <img className="h-9" src="/logo.png" alt="Logo" />
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <NavLink
                  to="/"
                  className="text-yellow-400  text-lg font-semibold"
                >
                  Home
                  <hr className="border-none outline-none h-0.5 bg-yellow-400  w-3/5 m-auto hidden" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-yellow-400 text-lg font-semibold"
                >
                  About
                  <hr className="border-none outline-none h-0.5 bg-yellow-400  w-3/5 m-auto hidden" />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className=" text-yellow-400 text-lg font-semibold"
                >
                  Contact Us
                  <hr className="border-none outline-none h-0.5 bg-yellow-400  w-3/5 m-auto hidden" />
                </NavLink>
              </li>
            </ul>

            {/* Icons */}
            <div className="hidden xl:flex items-center space-x-5">
              {/* <Link className="hover:text-yellow-400" aria-label="User Profile"> */}
              {token ? (
                <div className="cursor-pointer group relative">
                  <img
                    className="w-10 rounded-full"
                    src="assets/profileImage.jpg"
                    alt="profile"
                  />
                  <div className="absolute top-0 right-0 pt-14 text-base font-medium text-yellow-400  z-20 hidden group-hover:block">
                    <div className="min-w-48 bg-[#006D5B] rounded flex flex-col gap-4 py-4 px-2">
                      <NavLink to="/my-profile">
                        <p className="hover:bg-yellow-400 hover:text-black cursor-pointer px-3 rounded-full">
                          My Profile
                        </p>
                      </NavLink>
                      <NavLink to="/mycomplains">
                        <p className="hover:bg-yellow-400 hover:text-black cursor-pointer px-3 rounded-full">
                          My Complains
                        </p>
                      </NavLink>
                      <NavLink to="/logout">
                        <p className="hover:bg-yellow-400 hover:text-black cursor-pointer px-3 rounded-full">
                          Sign Out
                        </p>
                      </NavLink>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => navigate("/register")}
                  className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold"
                >
                  Create Account
                </button>
              )}
              {/* </Link> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              className="navbar-burger self-center mr-12 text-yellow-400"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-[#FDFD96]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#006D5B] text-center text-yellow-400">
            <ul className="px-4 py-6 space-y-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block text-black text-lg bg-blue-400"
                      : "block text-yellow-400 text-lg "
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "block text-black text-lg bg-blue-400"
                      : "block text-yellow-400 text-lg "
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "block text-black text-lg bg-blue-400"
                      : "block text-yellow-400 text-lg "
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-profile"
                  className={({ isActive }) =>
                    isActive
                      ? "block text-black text-lg bg-blue-400"
                      : "block text-yellow-400 text-lg "
                  }
                >
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

export default Navbar;
