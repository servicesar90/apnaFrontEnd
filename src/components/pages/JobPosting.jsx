
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { employeeData, jobs } from '../../employeeData';
import JobCard from '../ui/jobCard';


export default function JobPosting() {

  const [employe, setEmployee] = useState(null)
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("User"));


  useEffect(()=>{
    const id= user?.id;
    const employee=employeeData.filter((data)=> data.id== id);
    setEmployee(employee[0])
  },[])


  return (
    <div className="min-h-screen bg-[#f5f5f6] p-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        <div className="bg-white p-4 rounded-xl col-span-1 space-y-6">
          Filter
        </div>
        <div className="col-span-3 space-y-4">
          {jobs.map((job, index)=>(<JobCard key={index} job={job} />))}
        </div>


        <div className="bg-white p-4 rounded-xl col-span-1 space-y-4 h-fit shadow-md">
          <div className="flex flex-col items-center text-center space-y-2">
            {/* Profile Picture */}
            <img
              src={user?.imageURL}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />

            {/* Name and Title */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{employe?.fullName}</h3>
              <p className="text-sm text-gray-500">{employe?.experiences[0].jobTitle}</p>
              <p className="text-sm text-gray-500">{employe?.experiences[0].companyName}</p>
            </div>

            {/* Update Profile Button */}
            <button onClick={() => navigate("/updateProfile")} className="mt-2 px-4 py-1.5 border border-green-600 text-green-600 rounded-full text-sm font-medium hover:bg-green-50 transition">
              Update profile
            </button>
          </div>
        </div>
      </div>

    </div>
  );
} 
