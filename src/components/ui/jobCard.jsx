import React from 'react'

export default function JobCard({job}) {
    return (
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
    )
}
