import React from "react";
import logo from "../../../public/images/user-logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
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
        <a href="#" className="w-[200px] mx-auto">
          <img src={logo} alt="user-logo" className="w-full" />
        </a>

        <ul className="flex justify-center items-center gap-x-10">
          {navitem.map((menu, index) => (
            <li>
              <a
                key={index}
                href={menu.path}
                onClick={() => setActive(menu.item)}
                className={
                  "font-poppins text-[20px] font-normal text-[#000] relative z-10 hover:text-primary-color after:absolute after:-bottom-[1px] after:left-2/4 after:-translate-x-2/4 after:w-[0%] hover:after:w-[120%] after:h-[2.5px] after:bg-primary-color after:rounded-[8px] after:-z-10 after:transition-all after:duration-150 after:ease-in-out"
                }
              >
                {menu.item}
              </a>
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
