import React from "react";
import Button from "../Button";
import data from "../../yourData";
import { useState } from "react";
import Link from "next/link";

const Header = ({
  handleWorkScroll,
  handleAboutScroll,
  handleContactScroll,
}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap items-center justify-between sticky top-0 z-10">
        <div className="w-full ez sticky flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            href="/"
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          >
            <img
              className="laptop:mx-4"
              src="assets/JuliusAlfredo.png"
              width="50vw"
            />
          </Link>
          <button
            className="text-xl px-3 py-1"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <img width="30vw" src="assets/moon2.svg" />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center fixed" +
            (navbarOpen ? "flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Button
                className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                onClick={handleAboutScroll}
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">About</span>
              </Button>
            </li>
            <li className="nav-item">
              <Button
                className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                onClick={handleWorkScroll}
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Project</span>
              </Button>
            </li>
            <li className="nav-item">
              <Button
                className="px-3 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                onClick={handleContactScroll}
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Contact</span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
