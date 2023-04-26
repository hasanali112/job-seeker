import React from "react";
import background from "../assets/All Images/bg.png";

const Home = () => {
  return (
    <div className="bg-gray-100 my-container flex flex-col items-center justify-between lg:flex-row px-8 ">
      <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
        <div className="max-w-6/12 mb-6   lg:mt-8">
          <h1 className="max-w-lg mb-6 mx-8 font-sans text-5xl font-bold tracking-tight text-gray-900  sm:text-5xl sm:leading-none">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-blue-400">Dream Job</span>{" "}
          </h1>

          <p className="text-base text-gray-700 mx-8 md:text-lg">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
        </div>
        <div>
          <button className="ml-9 inline-flex items-center h-10 px-4 mb-3 font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
      <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <img src={background} alt="background-cover" />
          </div>
        </div>
    </div>
  );
};

export default Home;
<h1>This is home</h1>;
