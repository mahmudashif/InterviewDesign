import React, { act, useState } from "react";
import Header from "../layout/Header";
import ProjectCard from "../layout/ProjectCard";
import { ProjectList } from "../../data/ProjectList";

const MyProject = () => {
  let category = [
    { text: "All" },
    { text: "UI/UX" },
    { text: "Web Design" },
    { text: "App Design" },
    { text: "Graphic Design" },
  ];

  const [active, setActive] = useState(category[0].text);

  const result = ProjectList.filter(checkProject);

  function checkProject(project) {
    return active === category[0].text ? project : project.category == active;
  }

  return (
    <section id="project" className="container pt-[145px]">
      <Header
        heading={"My Projects"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
        }
        className={"text-center w-[900px] mx-auto mb-[50px]"}
      />

      <div className="text-center space-x-6 mb-[40px]">
        {category.map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(item.text)}
            className={
              active == item.text
                ? "bg-primary-color text-white text-[18px] font-poppins font-normal rounded-[8px] py-2.5 px-6 border border-primary-color"
                : "bg-[#f8f8f8] text-black text-[18px] font-poppins font-normal rounded-[8px] py-2.5 px-6 border border-[#545454] relative z-10 hover:bg-primary-color hover:text-white hover:border-white transition-all duration-150 ease-in-out"
            }
          >
            {item.text}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-10">
        {result.map((item , index) => (
          <ProjectCard
            key={index}
            thumbnail={item.thumbnail}
            catagory={item.category}
            title={item.name}
            className={"w-[31.5%]"}
          />
        ))}
      </div>
    </section>
  );
};

export default MyProject;
