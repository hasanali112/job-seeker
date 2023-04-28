import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Jobdetail = () => {
  const jobData = useLoaderData();
  const { id } = useParams();
  const [jobDetails, setjobDetails] = useState({});
  console.log(jobDetails);

  useEffect(() => {
    const jobDetail = jobData.find((jobId) => jobId.id == id);
    setjobDetails(jobDetail);
  }, []);
  return (
    <div>
      <h1 className="text-center mb-20 text-4xl font-bold bg-gray-100 p-10">Job Detail</h1>
      <div className="grid gap-6 lg:ml-40 mb-8 lg:grid-cols-2 sm:grid-cols-1">
        <div>
           <h1 className="text-xl font-bold mb-4"> Job description: <span className="text-base font-semibold text-gray-600 "> {jobDetails.jobDescription}</span> </h1>
            <p className="text-xl font-bold mb-4">
              Job Responsibility: <span className="text-base font-semibold text-gray-600 ">{jobDetails.jobResponsibility}</span>
            </p>
            <p className="text-xl font-bold mb-4">
              Educational Requirements: <br />{" "}
              <span className="text-base font-semibold text-gray-600 ">{jobDetails.educationalRequirements}</span>
            </p>
            <p className="text-xl font-bold mb-4">
              Experiences: <br /> <span className="text-base font-semibold text-gray-600 ">{jobDetails.experiences}</span>
            </p>
        </div>

        <div >
            <div className="bg-purple-100 p-8 w-80 h-96 ml-10 rounded">
            <h1 className="text-xl font-bold mt-2">Job detail</h1>
            <hr className="bg-purple-800 h-1"/>
            <div>
                <h1 className="mt-4 text-base font-bold">Salary : <span className="text-gray-600">{jobDetails.salary}</span></h1>
                <h1 className="mt-4 text-base font-bold">Job Title : <span className="text-gray-600">{jobDetails.jobTitle}</span></h1>
            </div>
            <div className="mt-10">
                <h1 className="text-xl font-bold">Contact information</h1>
                <hr className="bg-purple-800 h-1"/>
                <div>
                    <h1 className="mt-4 text-base font-bold">Phone: <span className="text-gray-600">{jobDetails.contactInformation.phone}</span></h1>
                    <h1 className="mt-4 text-base font-bold">Email : <span className="text-gray-600">{jobDetails.contactInformation.email}</span></h1>
                    <h1 className="mt-4 text-base font-bold">Address : <span className="text-gray-600">{jobDetails.location}</span></h1>
                </div>
            </div>
            </div>
            <button className="ml-10 mt-4  h-10 w-80 text-center mb-3  font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-blue-400 hover:bg-blue-700" >Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Jobdetail;
