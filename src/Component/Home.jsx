import React, { useEffect, useState } from "react";
import background from "../assets/All Images/bg.png";
import Jobcatagories from "./Jobcatagories";
import Featuresjob from "./Featuresjob";

const Home = () => {
    const [jobs, setjobs] = useState([]);
    const [featureJobs, setfeatureJobs] =useState([])

    useEffect(()=>{
        fetch('jobcatagories.json')
        .then(res=> res.json())
        .then(data=> setjobs(data))
    },[])

    useEffect(()=>{
      loadData()
    },[])

    const loadData = async () =>{
      await fetch('featurejob.json')
      .then(res=> res.json())
      .then(data=> setfeatureJobs(data))
    }

    console.log(featureJobs)
    

  return (
    <div >
      <div className="bg-gray-100 my-container flex flex-col items-center justify-between lg:flex-row px-8 ">
      <div className="mb-8 lg:max-w-lg  lg:pr-5 lg:mb-0">
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
            <img src={background} alt="background-cover" className="object-cover w-full h-100 md:h-100 xl:h-100'" />
          </div>
        </div>
      </div>
         
      <div>

            <h1 className="mt-20 text-center font-bold text-4xl mb-4">Job Category List</h1>
            <p className="text-center font-semibold text-xl text-gray-700">Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className="flex flex-col space-y-4 mt-10 items-center justify-around lg:flex-row lg:mx-20 lg:mt-10 lg:mb-10">
            {
                jobs.map(job => 
                    <Jobcatagories
                    key={job.id}
                    job={job}></Jobcatagories>
                    )
            }
            </div>
      </div>

      <div className="my-container">

        <h1 className="text-center text-4xl  font-bold">Featured Jobs</h1>
        <p className="text-center font-semibold text-xl text-gray-700 mt-3 mb-14">Explore thousands of job opportunities with all the information you need. Its your future</p>

        <div  className="grid gap-6 lg:mx-40 mb-8 lg:grid-cols-2 sm:grid-cols-1">
           {
            featureJobs.map(featurejob => 
                <Featuresjob key={featurejob.id}
                featurejob={featurejob}></Featuresjob>
              )
           }
        </div>
      </div>
    </div>
  );
};

export default Home;

