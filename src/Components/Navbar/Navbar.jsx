import React from "react";
import logo from '/public/logo.png'

function Navbar() {
  return (
    <>
      <nav class="bg-white border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              class="h-8"
              alt="Flowbite Logo"
              style={{width:"103px",height:"47px"}}
            />
            
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-OpenSans font-extrabold text-base flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="#" class="block py-2 px-3 text-black font">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-black">
                  DEALS
                </a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-black">
                  RESOURCES
                </a>
              </li>
              <li>
                <button
                  type="button"
                  class="focus:outline-none font-OpenSans font-extrabold text-base text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300  rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                  JOIN THE CLUB
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;