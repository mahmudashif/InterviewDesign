import React from "react";

const ServiceCard = ({ image, title, description, className }) => {
  return (
    <div
      className={`${className} bg-[#f8f8f8] rounded-[14px] overflow-hidden px-7 pt-10 pb-10`}
    >
      <img
        src={image}
        alt={title}
        className="w-[70px] h-[82px] object-contain mb-7"
      />

      <h3 className="font-semibold font-poppins text-[32px] tracking-[3%] text-black mb-[15px]">
        {title}
      </h3>

      <p className="font-poppins text-[19px] text-gray-500 tracking-[3%] w-[290px]">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
