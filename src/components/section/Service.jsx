import React from "react";
import Header from "../layout/Header";
import ServiceCard from "../layout/ServiceCard";
import serviceOneImage from "../../../public/images/service-one.png";
import serviceTwoImage from "../../../public/images/service-two.png";
import serviceThreeImage from "../../../public/images/service-three.png";
import serviceFourImage from "../../../public/images/service-four.png";

const Service = () => {
  return (
    <section className="container py-[75px]">
      <Header
        heading={"Services"}
        description={"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"}
        className={"text-center w-[900px] mx-auto mb-[62px]"}
      />

      <div className="flex flex-wrap gap-[31px]">
        <ServiceCard
          image={serviceOneImage}
          title={"UI/UX"}
          description={"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"}
          className={"w-[23%]"}
        />
        <ServiceCard
          image={serviceTwoImage}
          title={"Web Design "}
          description={"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"}
          className={"w-[23%]"}
        />
        <ServiceCard
          image={serviceThreeImage}
          title={"App Design"}
          description={"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"}
          className={"w-[23%]"}
        />
        <ServiceCard
          image={serviceFourImage}
          title={"Graphic Design"}
          description={"Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"}
          className={"w-[23%]"}
        />
      </div>
    </section>
  );
};

export default Service;
