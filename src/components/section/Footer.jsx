import React from "react";
import logo from "../../../public/images/user-logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { navitem } from "../../data/navItem";

const Footer = () => {
  let social = [
    { icon: <FaFacebook />, link: "" },
    { icon: <FaTwitter />, link: "" },
    { icon: <FaInstagram />, link: "" },
    { icon: <FaLinkedin />, link: "" },
  ];

  return (
    <section>
      <div className="pt-[100px] pb-[62px] bg-[#f8f8f8] flex flex-col gap-y-[75px]">
        <div className="w-[200px] mx-auto">
          <img src={logo} alt="user-logo" className="w-full" />
        </div>

        <ul className="flex justify-center items-center gap-x-10">
          {navitem.map((menu, index) => (
            <li>
              <NavLink
                key={index}
                to={menu.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-poppins text-[21px] text-primary-color font-medium"
                    : "font-poppins text-[21px] text-black font-medium hover:text-primary-color transition-all duration-150 ease-in-out"
                }
              >
                {menu.item}
              </NavLink>
            </li>
          ))}
        </ul>

        <ul className="flex items-center justify-center gap-x-6">
          {social.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                target="_blank"
                className="text-[32px] text-black hover:text-primary-color transition-all duration-150 ease-in-out"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#545454] py-[26px] text-center">
        <p className="font-poppins font-medium text-[21px] tracking-[3%] text-white">
          © 2023 <span className="text-primary-color">Mumair</span> All Rights
          Reserved , Inc.
        </p>
      </div>
    </section>
  );
};

export default Footer;
