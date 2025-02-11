import React, { useState } from "react";
import logo from "../../../public/images/user-logo.png";
import { navitem } from "../../data/navItem";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import resume from "../../../public/resume/AshifMahmud.pdf";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(navitem[0].item);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container px-3 md:px-0 py-[20px] flex items-center justify-between">
        <a href={"#"} className="w-[120px] md:w-[200px]">
          <img src={logo} alt="user-logo" className="w-full" />
        </a>

        <button onClick={() => setShow(!show)} className="block md:hidden">
          <HiMiniBars3BottomRight className="text-2xl" />
        </button>

        {/* phone */}
        <nav
          className={
            show
              ? "absolute top-0 left-0 w-full h-dvh backdrop-blur-[15px] text-center pt-[80px] transition-all duration-150 ease-in-out"
              : "absolute top-0 left-full w-full h-dvh backdrop-blur-[15px] text-center pt-[80px] transition-all duration-150 ease-in-out"
          }
        >
          <button
            onClick={() => setShow(!show)}
            className="absolute top-5 right-3"
          >
            <RxCross2 className="text-2xl" />
          </button>

          <ul className="space-y-2.5">
            {navitem.map((menu, index) => (
              <li>
                <a
                  key={index}
                  href={menu.path}
                  onClick={() => setActive(menu.item)}
                  className={
                    active === menu.item
                      ? "font-poppins text-[20px] font-normal text-[#000] relative z-10 hover:text-primary-color after:absolute after:-bottom-[1px] after:left-2/4 after:-translate-x-2/4 after:w-[120%] after:h-[2.5px] after:bg-primary-color after:rounded-[8px] after:-z-10 after:transition-all after:duration-150 after:ease-in-out"
                      : "font-poppins text-[20px] font-normal text-[#000] relative z-10 hover:text-primary-color after:absolute after:-bottom-[1px] after:left-2/4 after:-translate-x-2/4 after:w-[0%] hover:after:w-[120%] after:h-[2.5px] after:bg-primary-color after:rounded-[8px] after:-z-10 after:transition-all after:duration-150 after:ease-in-out"
                  }
                >
                  {menu.item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="../../public"
            download
            className="inline-block bg-primary-color text-white text-[18px] font-poppins font-normal rounded-[10px] py-2.5 px-6 border border-primary-color relative z-10 hover:text-primary-color after:absolute after:top-0 after:left-0 after:w-0 hover:after:w-full after:h-full after:bg-white after:rounded-[8px] after:-z-10 after:transition-all after:duration-150 after:ease-in-out mt-5"
          >
            Download CV
          </a>
        </nav>

        {/* big screen */}
        <nav className={`hidden md:flex items-center gap-x-10`}>
          <ul className="flex items-center gap-x-10">
            {navitem.map((menu, index) => (
              <li>
                <a
                  key={index}
                  href={menu.path}
                  onClick={() => setActive(menu.item)}
                  className={
                    active === menu.item
                      ? "font-poppins text-[20px] font-normal text-[#000] relative z-10 hover:text-primary-color after:absolute after:-bottom-[1px] after:left-2/4 after:-translate-x-2/4 after:w-[120%] after:h-[2.5px] after:bg-primary-color after:rounded-[8px] after:-z-10 after:transition-all after:duration-150 after:ease-in-out"
                      : "font-poppins text-[20px] font-normal text-[#000] relative z-10 hover:text-primary-color after:absolute after:-bottom-[1px] after:left-2/4 after:-translate-x-2/4 after:w-[0%] hover:after:w-[120%] after:h-[2.5px] after:bg-primary-color after:rounded-[8px] after:-z-10 after:transition-all after:duration-150 after:ease-in-out"
                  }
                >
                  {menu.item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={resume}
            download
            className="bg-primary-color text-white text-[18px] font-poppins font-normal rounded-[10px] py-2.5 px-6 border border-primary-color relative z-10 hover:text-primary-color after:absolute after:top-0 after:left-0 after:w-0 hover:after:w-full after:h-full after:bg-white after:rounded-[8px] after:-z-10 after:transition-all after:duration-150 after:ease-in-out"
          >
            Download CV Ashif
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
