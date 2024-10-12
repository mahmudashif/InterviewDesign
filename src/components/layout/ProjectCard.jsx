import React from "react";

const ProjectCard = ({ thumbnail, catagory, title, className }) => {
  return (
    <div className={className}>
      <img src={thumbnail} alt={title} className="w-full mb-[37px]" />

      <p className="font-poppins text-[19px] text-primary-color mb-2.5">
        {catagory}
      </p>

      <h4 className="font-poppins font-bold text-2xl text-black">{title}</h4>
    </div>
  );
};

export default ProjectCard;
