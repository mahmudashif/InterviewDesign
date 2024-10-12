import React from "react";

const Header = ({ heading, description, className }) => {
  return (
    <div className={className}>
      <h2 className={`capitalize text-[26px] md:text-[49px] font-poppins font-semibold leading-[120%] text-[#000000]`}>
        {heading}
      </h2>
      <p className={`font-poppins text-[15px] md:text-[21px] text-[#000000] tracking-[3%]`}>
        {description}
      </p>
    </div>
  );
};

export default Header;
