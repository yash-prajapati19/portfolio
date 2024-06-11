import React from "react";

const Hero = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center">
      <div className="h-full flex justify-center items-center">
        <div className="w-[80vw] text-6xl text-center font-bold bg-gradient-to-r from-white via-gray-500 to-gray-700 inline-block text-transparent bg-clip-text">
          Hey,I’m Yash -{" "}
          <span className="bg-gradient-to-r from-blue-500 to-gray-700 bg-clip-text">
            Full Stack Web Developer
          </span>{" "}
          building his ideas. This is my little corner on the internet, where
          you can learn about me and my work.
        </div>
      </div>
    </div>
  );
};

export default Hero;
