import React from "react";
import Header from "../layout/Header";
import Button from "../layout/Button";

const ContactMe = () => {
  return (
    <section className="pt-[75px] pb-[130px]">
      <Header
        heading={"Lets Design Together"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
        }
        className={"text-center w-[900px] mx-auto mb-[70px]"}
      />

      <div className="text-center">
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          className="bg-[#f8f8f8] rounded-[12px] border border-[#afafaf] focus:outline-primary-color px-[26px] py-[9px] font-poppins font-normal text-[19px] tracking-[3%] w-[697px] mr-[25px]"
        />

        <Button>Contact Me</Button>
      </div>
    </section>
  );
};

export default ContactMe;
