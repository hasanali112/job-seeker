import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { getShoppingCart } from "../Utils/fakeDb";

const Applied = () => {
  const [jobLoad, setjobLoad] =useState([])
  const [jobCardSet, setjobCardSet] = useState([])

  useEffect(()=>{
    fetch('featurejob.json')
    .then(res=> res.json())
    .then(data=> setjobLoad(data))
  },[])

  useEffect(()=>{
    const storeCart = getShoppingCart()
    const saveJob =[]
    for (const id in storeCart){
        const addedJob= jobLoad.find(jobCard => jobCard.id === id)
        if(addedJob){
          const quantity = addedJob[id]
          addedJob.quantity = quantity;
          saveJob.push(addedJob)
        }
      }

    setjobCardSet(saveJob)
  },[jobLoad])

  return (
    <div>
      <h1 className="text-center mb-20 text-4xl font-bold bg-gray-100 p-10">Applied job here</h1>

      <div>
        {jobCardSet.map((jobcart) => (
             <div className="flex items-center border mb-4 mx-40">
             <div className="p-6 bg-slate-100 mx-4">
               <img src={jobcart.companyLogo} alt="company logo" />
             </div>
             <div className="p-6">
               <h1 className="text-lg font-sans font-bold">{jobcart.jobTitle}</h1>
               <h1 className="mt-2 text-base font-sans font-semibold text-gray-600"></h1>
               <div className="flex">
                 <button className="border-2 border-indigo-500 mr-4 mt-2 p-1 px-2 text-indigo-500">
                   {jobcart.remoteOrOnsite}
                 </button>
                 <button className="border-2 border-indigo-500 mr-4 mt-2 p-1 px-2 text-indigo-500">
                 {jobcart.fullTimeOrPartTime}
                 </button>
               </div>
               <div className="flex">
                      <h1 className="mt-2 mr-8 text-base font-sans font-semibold text-gray-600">{jobcart.location}</h1>
                      <h4 className="mt-2  text-base font-sans font-semibold text-gray-600">{jobcart.salary}</h4>
                    </div>
             </div>
              <div className="ml-36">
                 <Link to={`../job/${jobcart.id}`}>
                 <button className="mt-4   inline-flex items-center h-9 px-4  font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-indigo-600 hover:bg-blue-700">View Details</button>
                 </Link>
              </div>
                   
             </div>
          
        ))}
      </div>
    </div>
  );
};

export default Applied;
