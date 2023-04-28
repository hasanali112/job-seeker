import React from 'react';
import { Link } from 'react-router-dom';

const Featuresjob = ({featurejob}) => {
    return (
        <div>
            <div className="border p-8 rounded">
                 <img src={featurejob.companyLogo} alt="comapany logo" />
                 <h1 className="mt-4 text-lg font-sans font-bold">{featurejob.jobTitle}</h1>
                 <h4 className="mt-2 text-base font-sans font-semibold text-gray-600">{featurejob.companyName}</h4>
                   <div className="flex">
                      <button className="border-2 border-indigo-500 mr-4 mt-2 p-1 px-2 text-indigo-500">{featurejob.remoteOrOnsite}</button>
                      <button className="border-2 border-indigo-500 mr-4 mt-2 p-1 px-2 text-indigo-500">{featurejob.fullTimeOrPartTime}</button>
                   </div>
                   <div className="flex">
                     <h1 className="mt-2 mr-8 text-base font-sans font-semibold text-gray-600">{featurejob.location}</h1>
                     <h4 className="mt-2  text-base font-sans font-semibold text-gray-600">{featurejob.salary}</h4>
                   </div>
                   <Link to={`./job/${featurejob.id}`}>
                   <button className="mt-4   inline-flex items-center h-9 px-4  font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-indigo-600 hover:bg-blue-700">View Details</button>
                   </Link>
                 
              </div>
        </div>
    );
};

export default Featuresjob;