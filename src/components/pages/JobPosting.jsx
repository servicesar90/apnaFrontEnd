
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jobs } from '../../employeeData';
import { employeeData } from '../../employeeData';


export default function JobPosting() {

  const [employeData, setEmployeData] = useState(null);

  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  useEffect(() => {

    const employee = employeeData.filter((employe) => employe.id == id);
    setEmployeData(employee[0]);
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f6] p-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        <div className="bg-white p-4 rounded-xl col-span-1 space-y-6">
        </div>
        <div className="col-span-3 space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-5 rounded-xl shadow-sm border hover:shadow transition cursor-pointer"
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              {job.urgent && <div className="text-orange-600 text-sm font-semibold mb-1">Urgently hiring</div>}
              <h2 className="text-lg font-bold text-gray-800">{job.jobTitle}</h2>
              <p className="text-sm text-gray-700">{job.companyName}</p>
              <p className="text-sm text-gray-500 mt-1">{job.location}</p>
              <p className="text-sm text-gray-600 font-medium mt-1">{job.minimumSalary} - {job.maximumSalary}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                
                  <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {job.workLocationType}
                  </span>

                  <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {job.jobType}
                  </span>

                  <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {job.payType}
                  </span>
          
              </div>
            </div>
          ))}
        </div>


        <div className="bg-white p-4 rounded-xl col-span-1 space-y-4 h-fit shadow-md">
          <div className="flex flex-col items-center text-center space-y-2">
            {/* Profile Picture */}
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />

            {/* Name and Title */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{employeData?.name}</h3>
              <p className="text-sm text-gray-500">{employeData?.experience[0].jobTitle}</p>
              <p className="text-sm text-gray-500">{employeData?.experience[0].companyName}</p>
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
