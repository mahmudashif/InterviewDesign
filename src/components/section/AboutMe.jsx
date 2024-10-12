import React from "react";
import aboutLeftImage from "../../../public/images/about-left-image.png";
import Header from "../layout/Header";
import Skill from "../layout/Skill";

const AboutMe = () => {
  return (
    <section className="container flex items-center py-[75px]">
      <div className="w-[45%]">
        <div>
          <img
            src={aboutLeftImage}
            alt="hero-right-image"
            className="w-[538px]"
          />
        </div>
      </div>

      <div className="w-[55%]">
        <Header
          heading={"About me"}
          description={"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra"}
          className={"w-[750px]"}
        />

        <div className="mt-4">
          <Skill name={"UI"} percentage={"90"} />
          <Skill name={"Web Design "} percentage={"85"} />
          <Skill name={"App Design"} percentage={"75"} />
          <Skill name={"Graphic Design"} percentage={"90"} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
