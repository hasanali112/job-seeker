import React from 'react';

const Jobcatagories = ({job}) => {
    return (
        <div>
            <div className="bg-purple-100 p-4">
                        <img src={job.logo} alt="job-catagories-cover" className="mb-5"/>
                        <h4 className="text-base font-sans font-semibold">{job.name}</h4>
                         <p className="text-gray-700 font-sans font-semibold ">{job.jobsAvailable} Jobs Available</p>
                    </div>
        </div>
    );
};

export default Jobcatagories;