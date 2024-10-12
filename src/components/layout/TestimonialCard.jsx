import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCard = ({ image, word, name, position }) => {
  return (
    <div className="w-full md:w-[1050px] px-5 md:px-[48px] py-7 md:py-[55px] rounded-[14px] bg-[#F8F8F8] md:flex items-center">
      <div className="w-full md:w-[30%]">
        <div className="w-[150px] md:w-[235px] mx-auto md:mx-0">
          <img
            src={image}
            alt={name}
            className="w-full aspect-square rounded-full"
          />
        </div>

        <div className="md:hidden text-center">
          <p className="font-poppins font-medium text-lg md:text-2xl text-black mt-2">
            {name}
          </p>

          <p className="font-poppins font-medium md:text-[19px] text-[#424242] mt-1">
            {position}
          </p>
        </div>
      </div>

      <div className="w-full md:w-[70%]">
        <q className="font-poppins font-normal text-center text-[14px] md:text-[21px] text-[#424242] tracking-[2%]">
          {word}
        </q>

        <p className="font-poppins font-medium text-2xl text-black mt-2 hidden md:block">
          {name}
        </p>

        <p className="font-poppins font-medium text-[19px] text-black mt-1 hidden md:block">
          {position}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
