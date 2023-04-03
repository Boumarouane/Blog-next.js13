"use client";

import { useState } from "react";
import Link from "next/link";
import SVGHomeIcon from "./SVGHomeIcon";
// import SVGHamburgerMenu from "./SVGHamburgerMenu";

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu */}
      <div className="block md:hidden p-4">
        <button onClick={() => setIsOpen(!isOpen)} className="relative">
          <div
            className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-0 ring-gray-100 hover:ring-2 ring-opacity-30 duration-200 shadow-md"
          >
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div
                className={`bg-white h-[2px] w-12 transform transition-all duration-300 origin-left ${
                  isOpen ? "translate-x-10" : ""
                }`}
              ></div>
              <div
                className={`bg-white h-[2px] w-12 rounded transform transition-all duration-300 ${
                  isOpen ? "translate-x-10" : ""
                } delay-75`}
              ></div>
              <div
                className={`bg-white h-[2px] w-12 transform transition-all duration-300 origin-left ${
                  isOpen ? "translate-x-10" : ""
                } delay-150`}
              ></div>

              <div
                className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
                  isOpen ? "translate-x-0" : ""
                } flex w-0 ${isOpen ? "w-12" : ""}`}
              >
                <div
                  className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                ></div>
                <div
                  className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                    isOpen ? "-rotate-45" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </button>
      </div>
      {/* ***************** */}

      {/* Link */}
      <ul
        className={`flex-col md:flex md:flex-row justify-center divide-y divide-slate-400/25  ${
          isOpen ? "block " : "hidden"
        }`}
      >
        <Link href="/about" className="flex justify-center hover:backdrop-blur-md md:hover:backdrop-filter-none" onClick={() => setIsOpen(!isOpen)}>
          <li className="md:mr-[100px] xl:mr-[200px] my-6 md:my-14 text-slate-300 ">
            ABOUT
          </li>
        </Link>
        <Link href="/explore" className="flex justify-center  hover:backdrop-blur-md md:hover:backdrop-filter-none" onClick={() => setIsOpen(!isOpen)}>
          <li className="md:mr-[100px] xl:mr-[200px] my-6 md:my-14 text-slate-300">
            EXPLORE
          </li>
        </Link>
        <Link href="/" className="flex justify-center hover:backdrop-blur-md md:hover:backdrop-filter-none" onClick={() => setIsOpen(!isOpen)}>
          <li className="hidden md:block mr-[100px] xl:mr-[200px] my-10 ">
            <SVGHomeIcon />
          </li>
          <li className="block md:hidden my-6  text-slate-300">HOME</li>
        </Link>
        <Link href="/journal" className="flex justify-center hover:backdrop-blur-md md:hover:backdrop-filter-none" onClick={() => setIsOpen(!isOpen)}>
          <li className="md:mr-[100px] xl:mr-[200px] my-6 md:my-14 text-slate-300">
            JOURNAL
          </li>
        </Link>
        <Link href="/contact" className="flex justify-center hover:backdrop-blur-md md:hover:backdrop-filter-none" onClick={() => setIsOpen(!isOpen)}>
          <li className="my-6 md:my-14  text-slate-300">CONTACT</li>
        </Link>
      </ul>
      {/* *********** */}
    </>
  );
}
