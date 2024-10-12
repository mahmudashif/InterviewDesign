import React, { useState } from "react";
import Header from "../layout/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "../layout/TestimonialCard";
import { tesimonials } from "../../data/tesimonials";

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "38px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "57px",
                height: "16px",
                borderRadius: "8px",
                background: "#fd6f00",
                marginTop: "25px",
              }
            : {
                width: "57px",
                height: "16px",
                borderRadius: "8px",
                background: "#d9d9d9",
                marginTop: "25px",
              }
        }
      />
    ),
  };

  return (
    <section id="testimonials" className="container px-3 md:px-0 pt-[145px]">
      <Header
        heading={"Testimonials"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
        }
        className={
          "text-center px-2 md:px-0 w-full md:w-[900px] mx-auto mb-[50px]"
        }
      />

      <div className="w-full md:w-[1050px] mx-auto">
        <div className="slider-container">
          <Slider {...settings}>
            {tesimonials.map((item, index) => (
              <div>
                <TestimonialCard
                  image={item.image}
                  word={item.word}
                  name={item.name}
                  position={item.position}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
