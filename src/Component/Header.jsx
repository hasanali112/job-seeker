import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BriefcaseIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 px-10 py-5  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12">
      <div className="bg-gray-100 px-10 flex items-center justify-between relative">
        <Link to="/" className="inline-flex items-center">
          <BriefcaseIcon className="h-6 w-6 text-blue-800"></BriefcaseIcon>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            JobSeeker
          </span>
        </Link>

        <ul className="item-center hidden space-x-8 lg:flex font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "default"
            }
          >
            
            Home
          </NavLink>
          <NavLink
            to="/applied"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "default"
            }
          >
            Applied Job
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "default"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/statistic"
            className={({ isActive }) =>
              isActive ? "text-blue-600" : "default"
            }
          >
            Statistic
          </NavLink>
        </ul>
        <div className="hidden lg:inline-flex items-center" >
        <button className="ml-6  h-10 px-4 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700">
          Start Applying
        </button>

        </div>
        
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          <button
            aria-label="open-menu"
            title="open-menu"
            onClick={() => setisMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                    <BriefcaseIcon className="h-6 w-6 text-blue-800"></BriefcaseIcon>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                      JobSeeker
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setisMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4 font-sans font-bold">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "text-blue-600" : "default"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/applied"
                        className={({ isActive }) =>
                          isActive ? "text-blue-600" : "default"
                        }
                      >
                        Applied Job
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                          isActive ? "text-blue-600" : "default"
                        }
                      >
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/statistic"
                        className={({ isActive }) =>
                          isActive ? "text-blue-600" : "default"
                        }
                      >
                        Statistic
                      </NavLink>
                    </li>
                    <li>
                      <button className="ml-6  inline-flex items-center h-10 px-4 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700">
                        Start Applying
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
