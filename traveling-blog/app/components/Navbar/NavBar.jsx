"use client";

import { useState } from "react";
import Link from "next/link";
import SVGHomeIcon from "./SVGHomeIcon";
import SVGHamburgerMenu from "./SVGHamburgerMenu";

export default function NavBar() {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Hamburger Menu */}
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-5 py-4"
        >
          <SVGHamburgerMenu toggle={isOpen} />
        </button>
      </div>
      {/* ***************** */}

      {/* Link */}
      <ul
        className={`flex-col md:flex md:flex-row justify-center ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/about" onClick={() => setIsOpen(!isOpen)}>
          <li className="mr-[100px] xl:mr-[200px] my-6 md:my-14 text-slate-300">
            ABOUT
          </li>
        </Link>
        <Link href="/explore" onClick={() => setIsOpen(!isOpen)}>
          <li className="mr-[100px] xl:mr-[200px] my-6 md:my-14 text-slate-300">
            EXPLORE
          </li>
        </Link>
        <Link href="/" onClick={() => setIsOpen(!isOpen)}>
          <li className="hidden md:block mr-[100px] xl:mr-[200px] my-10 ">
            <SVGHomeIcon />
          </li>
          <li className="block md:hidden my-6  text-slate-300">HOME</li>
        </Link>
        <Link href="/journal" onClick={() => setIsOpen(!isOpen)}>
          <li className="mr-[100px] xl:mr-[200px] my-6 md:my-14 text-slate-300">
            JOURNAL
          </li>
        </Link>
        <Link href="/contact" onClick={() => setIsOpen(!isOpen)}>
          <li className="my-6 md:my-14  text-slate-300">CONTACT</li>
        </Link>
      </ul>
      {/* *********** */}
    </>
  );
}
