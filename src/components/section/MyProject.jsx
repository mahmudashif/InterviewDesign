import React, { act, useState } from "react";
import Header from "../layout/Header";
import ProjectCard from "../layout/ProjectCard";
import projectOneImage from "../../../public/images/project-one.png";
import projectTwoImage from "../../../public/images/project-two.png";
import projectThreeImage from "../../../public/images/project-three.png";

const MyProject = () => {
  let category = [
    { text: "All" },
    { text: "UI/UX" },
    { text: "Web Design" },
    { text: "App Design" },
    { text: "Graphic Design" },
  ];

  const [active, setActive] = useState(category[0].text);

  let project = [
    {
      name: "AirCalling Landing Page Design",
      category: "UI/UX",
      thumbnail: projectOneImage,
    },
    {
      name: "Business Landing Page",
      category: "Web Design",
      thumbnail: projectTwoImage,
    },
    {
      name: "AirCalling Landing Page Design",
      category: "App Design",
      thumbnail: projectThreeImage,
    },
    {
      name: "Ecom Web Page Design",
      category: "Graphic Design",
      thumbnail: projectTwoImage,
    },
    {
      name: "Orebi ecommarce",
      category: "UI/UX",
      thumbnail: projectThreeImage,
    },
    {
      name: "Ripple social media",
      category: "Web Design",
      thumbnail: projectOneImage,
    },
    {
      name: "shopify e-commarce",
      category: "App Design",
      thumbnail: projectTwoImage,
    },
    {
      name: "Business Landing Page",
      category: "Graphic Design",
      thumbnail: projectThreeImage,
    },
    {
      name: "AirCalling Landing Page Design",
      category: "UI/UX",
      thumbnail: projectOneImage,
    },
    {
      name: "Business Landing Page",
      category: "Web Design",
      thumbnail: projectTwoImage,
    },
    {
      name: "AirCalling Landing Page Design",
      category: "App Design",
      thumbnail: projectThreeImage,
    },
    {
      name: "Business Landing Page",
      category: "Graphic Design",
      thumbnail: projectTwoImage,
    },
  ];

  const result = project.filter(checkProject);

  function checkProject(project) {
    return active === category[0].text ? project : project.category == active;
  }

  return (
    <section className="container py-[75px]">
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
