import React, { useState } from "react";
import logo from "../Images/logo.png";
import userLogo from "../Images/account-btn.png";
import spin from "../Images/spin-wheel.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="lg:fixed w-screen navbar">
      <nav class="bg-white">
        <div class="max-w-7xl mx-auto px-0 md:px-2">
          <div class="relative flex items-center justify-between h-auto py-2 lg:p-0 lg:h-24">
            <div class="inset-y-0 left-0 flex items-center lg:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center px-2 rounded-md text-gray-600 hover:text-gray-400 "
                onClick={menuToggle}
              >
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex-1 flex ">
              <div class="flex-shrink-0 flex brand-logo-container">
                <a href="/">
                  <img class="block brand-logo" src={logo} alt="Workflow" />
                </a>
              </div>
              <div class="hidden lg:block lg:ml-2">
                <div class="h-full flex">
                  <a
                    href="#"
                    class="text-black hover:text-gray-600 my-auto px-2 rounded-md text-sm font-normal block"
                  >
                    Flight
                  </a>

                  <a
                    href="#"
                    class="st-text-blue hover:text-gray-600 my-auto px-2 rounded-md text-sm font-normal"
                  >
                    Bus
                  </a>

                  <a
                    href="#"
                    class="text-black hover:text-gray-600 my-auto px-2 rounded-md text-sm font-normal"
                  >
                    Hotel
                  </a>

                  <a
                    href="#"
                    class="text-black hover:text-gray-600 my-auto px-2 rounded-md text-sm font-normal"
                  >
                    Holiday
                  </a>

                  <a
                    href="#"
                    class="text-black hover:text-gray-600 my-auto px-2 rounded-md text-sm font-normal"
                  >
                    Visa
                  </a>

                  <a
                    href="#"
                    class="text-black hover:text-gray-600 my-auto px-2 rounded-md text-sm font-normal"
                  >
                    Visa Guide
                  </a>

                  <a
                    href="#"
                    class="text-black hover:text-gray-600 my-auto px-2 rounded-md text-sm font-normal"
                  >
                    Group Request
                  </a>

                  <a
                    href="#"
                    class="text-black hover:text-gray-600 my-auto px-2 rounded-md text-sm font-normal"
                  >
                    Travel Advisory
                  </a>

                  <a
                    href="#"
                    class="text-black hover:text-gray-600 my-auto px-2 rounded-md text-sm font-normal"
                  >
                    Promotion
                  </a>

                  <a
                    href="#"
                    class="text-black hover:text-gray-600 my-auto px-2 rounded-md text-sm font-normal"
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="mr-4 relative hidden lg:block">
                <div>
                  <button type="button" className="flex">
                    <img class="h-5 w-auto" src={spin} alt="User Menu" />
                    <span className="ml-1 font-medium text-sm my-auto">
                      Spin To Win
                    </span>
                  </button>
                </div>
              </div>
              <div class="relative flex">
                <button type="button" className="my-auto">
                  <img
                    class="h-6 md:h-8 lg:h-12 w-auto"
                    src={userLogo}
                    alt="User Menu"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {openMenu && (
          <div class="lg:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                class="text-gray-300 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-normal"
              >
                Flight
              </a>

              <a
                href="#"
                class="st-text-blue  hover:text-gray-600 block px-3 py-2 rounded-md text-base font-normal"
              >
                Bus
              </a>

              <a
                href="#"
                class="text-gray-300 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-normal"
              >
                Hotel
              </a>

              <a
                href="#"
                class="text-gray-300 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-normal"
              >
                Holiday
              </a>

              <a
                href="#"
                class="text-gray-300 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-normal"
              >
                Visa
              </a>

              <a
                href="#"
                class="text-gray-300 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-normal"
              >
                Visa Guide
              </a>

              <a
                href="#"
                class="text-gray-300 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-normal"
              >
                Group Request
              </a>

              <a
                href="#"
                class="text-gray-300 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-normal"
              >
                Travel Advisory
              </a>

              <a
                href="#"
                class="text-gray-300 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-normal"
              >
                Promotion
              </a>

              <a
                href="#"
                class="text-gray-300 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-normal"
              >
                Blog
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
