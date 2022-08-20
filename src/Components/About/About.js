import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-10 mb-5 gap-5 mx-4">
      <div className="img-area">
        <img
          src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-auto"
        ></img>
      </div>
      <div className="about-content">
        <div className="about-heading mb-10">
          <h3 className="text-3xl text-primary font-bold text-center">
            About us
          </h3>
        </div>
        <div className="about-info">
          <p className="text-xl">
            Students do not learn much just sitting in classes listening to
            teachers, memorizing prepackaged assignments, and spitting out
            answers. They must talk about what they are learning, write
            reflectively about it, relate it to past experiences, and apply it
            to their daily lives. They must make what they learn part of
            themselves.
          </p>

          <div className="point-area mt-10">
            <div>
              <p className="flex justify-center items-center"><BsFillCheckCircleFill className="text-primary mr-5 text-2xl"></BsFillCheckCircleFill>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore</p>
              <p className="flex justify-center items-center"><BsFillCheckCircleFill className="text-primary mr-5 text-2xl"></BsFillCheckCircleFill>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore</p>
              <p className="flex justify-center items-center"><BsFillCheckCircleFill className="text-primary mr-5 text-2xl"></BsFillCheckCircleFill>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
