import React from "react";

const Button = ({ children , className }) => {
  return (
    <button
      className={`${className} bg-primary-color text-white text-[18px] font-poppins font-normal rounded-[10px] py-2.5 px-6 border border-primary-color relative z-10 hover:text-primary-color after:absolute after:top-0 after:left-0 after:w-0 hover:after:w-full after:h-full after:bg-white after:rounded-[8px] after:-z-10 after:transition-all after:duration-150 after:ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
