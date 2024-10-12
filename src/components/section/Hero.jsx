import React from "react";
import heroRight from "../../../public/images/hero-right-image.png";
import Button from "../layout/Button";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  let social = [
    { icon: <FaFacebook />, link: "" },
    { icon: <FaTwitter />, link: "" },
    { icon: <FaInstagram />, link: "" },
    { icon: <FaLinkedin />, link: "" },
  ];

  return (
    <section className="container flex items-center pt-[150px] pb-[70px]">
      <div className="w-[60%]">
        <p className="font-poppins font-semibold text-xl tracking-[3%] text-black">
          Hi I am
        </p>

        <h3 className="font-poppins font-semibold text-[32px] tracking-[3%] text-primary-color">
          Muhammad Umair{" "}
        </h3>

        <h2 className="font-poppins font-bold text-[100px] tracking-[3%] leading-[120%] text-black">
          UI & UX
        </h2>

        <h2 className="font-poppins font-bold text-[100px] tracking-[3%] leading-[120%] text-black ml-[225px]">
          Designer
        </h2>

        <p className="font-poppins font-normal text-[21px] tracking-[3%] text-gray-700 mt-[28px] mb-[22px] w-[698px]">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>

        <Button>Hire me</Button>
      </div>

      <div className="w-[40%]">
        <div>
          <img
            src={heroRight}
            alt="hero-right-image"
            className="w-[538px] mx-auto"
          />
        </div>

        <ul className="flex items-center justify-center gap-x-6 mt-9 !mx-auto">
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
    </section>
  );
};

export default Hero;
