import React, { useState } from "react";
import Header from "../layout/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "../layout/TestimonialCard";
import clientOne from "../../../public/images/client-one.png";

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
    <section className="container px-3 md:px-0 py-[75px] mt-[40px]">
      <Header
        heading={"Testimonials"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
        }
        className={"text-center px-2 md:px-0 w-full md:w-[900px] mx-auto mb-[50px]"}
      />

      <div className="w-full md:w-[1050px] mx-auto">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <TestimonialCard
                image={clientOne}
                word={
                  "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
                }
                name={"Ahmed Shanto"}
                position={"CEO"}
              />
            </div>
            
            <div>
              <TestimonialCard
                image={clientOne}
                word={
                  "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
                }
                name={"Ahmed Shanto"}
                position={"CEO"}
              />
            </div>

            <div>
              <TestimonialCard
                image={clientOne}
                word={
                  "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
                }
                name={"Ahmed Shanto"}
                position={"CEO"}
              />
            </div>

            <div>
              <TestimonialCard
                image={clientOne}
                word={
                  "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices."
                }
                name={"Ahmed Shanto"}
                position={"CEO"}
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
