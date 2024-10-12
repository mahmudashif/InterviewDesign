import React from "react";

const Skill = ({ name, percentage }) => {

  return (
    <div className="mb-[25px]">
      <p className="font-poppins font-semibold text-xl text-black tracking-[3%] mb-[18px]">
        {name}
      </p>

      <div className="w-full h-3 bg-[#edecec] rounded-[6px]">
        <div
          style={{width: `${percentage}%`}}
          className={`h-3 bg-primary-color rounded-[6px] relative`}
        >
          <div className="w-7 aspect-square border-[3px] border-primary-color rounded-full bg-white  absolute top-2/4 -translate-y-2/4 right-0" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
