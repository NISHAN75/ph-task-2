import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  //     Online Learining Anytime, anywhere!

  // Discover Your Roots

  return (
    <div>
      <Carousel>
        <div className="font-bold relative">
          <img src="https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="font-bold absolute lg:top-52 md:top-28 sm:top-18 top-4  text-left lg:left-24 md:left-20 sm:left-12 left-8">
            <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-sm  text-primary">
              Online Learining Anytime, anywhere!
              <br />
              Discover Your Roots
            </h1>
            <p className=" lg:mt-10 mt-5 text-white lg:text-xl md:text-xl text-sm">
              An online training software is an application that facilitates
              eLearning within
              <br /> organizations. It is used by any size of organization from
              various industries to
              <br /> train internal employees, customers and partners
              seamlessly.{" "}
            </p>
          </div>
        </div>
        <div className="font-bold relative">
          <img src="https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="font-bold absolute lg:top-52 md:top-28 sm:top-18 top-4  text-left lg:left-24 md:left-20 sm:left-12 left-8">
            <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-sm  text-primary">
              Online Learining Anytime, anywhere!
              <br />
              Discover Your Roots
            </h1>
            <p className=" lg:mt-10 mt-5 text-white lg:text-xl md:text-xl text-sm">
              An online training software is an application that facilitates
              eLearning within
              <br /> organizations. It is used by any size of organization from
              various industries to
              <br /> train internal employees, customers and partners
              seamlessly.{" "}
            </p>
          </div>
        </div>
        <div className="font-bold relative">
          <img src="https://images.pexels.com/photos/5905713/pexels-photo-5905713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <div className="font-bold absolute lg:top-52 md:top-28 sm:top-18 top-4  text-left lg:left-24 md:left-20 sm:left-12 left-8">
            <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-sm  text-primary">
              Online Learining Anytime, anywhere!
              <br />
              Discover Your Roots
            </h1>
            <p className=" lg:mt-10 mt-5 text-white lg:text-xl md:text-xl text-sm">
              An online training software is an application that facilitates
              eLearning within
              <br /> organizations. It is used by any size of organization from
              various industries to
              <br /> train internal employees, customers and partners
              seamlessly.{" "}
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
