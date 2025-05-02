import React, { useState } from "react";
import { jobs } from "../../employeeData";



const tabIcons = {
  "For You": "/icons/heart.svg",
  "High Salary": "/icons/money.svg",
  "Nearby": "/icons/map-pin.svg",
  "New Jobs": "/icons/briefcase.svg",
};


const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow border p-4 ${className || ""}`}>
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);


const JobCard = ({ title, company, location, salary, tags = [], interview }) => (
  <Card className="mb-4 border-orange-300">
    <CardContent className="p-4">
      <div className="text-orange-500 font-semibold">Urgently hiring</div>
      <div className="text-xl font-bold mt-2">{title || "Untitled Job"}</div>
      <div className="text-sm text-gray-600">{company}</div>
      <div className="text-sm text-gray-600">📍 {location}</div>
      <div className="text-sm text-gray-800 font-medium">{salary}</div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, i) => (
          <span key={i} className="bg-gray-200 text-xs px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      {interview && <div className="text-blue-500 mt-2">📅 Walk-in interview</div>}
    </CardContent>
  </Card>
);


const Sidebar = ({ filters, setFilters, salary, setSalary }) => {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-full md:w-1/4 p-4">
      <h2 className="font-bold text-lg mb-2"
      
      onClick={() => setIsOpen(!isOpen)} >Filters</h2>

      <div className="mb-4">
        <h3 className="font-semibold">Date posted</h3>
        {["All", "Last 24 hours", "Last 3 days", "Last 7 days"].map((option) => (
          <div key={option}>
            <label className="inline-flex items-center mt-1">
              <input
                type="radio"
                className="form-radio"
                name="datePosted"
                checked={filters.datePosted === option}
                onChange={() => updateFilter("datePosted", option)}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
      </div>


      <div className="mb-4">
        <h3 className="font-semibold">Work Mode</h3>
        {["work from Home", "Work from Office", "Work from Fields"].map((option) => (
          <div key={option}>
            <label className="inline-flex items-center mt-1">
              <input
                type="radio"
                className="form-radio"
                name="datePosted"
                checked={filters.datePosted === option}
                onChange={() => updateFilter("datePosted", option)}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
      </div>

     
      <div className="mb-4">
        <h3 className="font-semibold">Work Type</h3>
        {["Full time", "Part Time", "Internship"].map((option) => (
          <div key={option}>
            <label className="inline-flex items-center mt-1">
              <input
                type="radio"
                className="form-radio"
                name="datePosted"
                checked={filters.datePosted === option}
                onChange={() => updateFilter("datePosted", option)}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
      </div>

     
      <div className="mb-4">
        <h3 className="font-semibold">Work Shift</h3>
        {["Day Shift", "Night Shift "].map((option) => (
          <div key={option}>
            <label className="inline-flex items-center mt-1">
              <input
                type="radio"
                className="form-radio"
                name="datePosted"
                checked={filters.datePosted === option}
                onChange={() => updateFilter("datePosted", option)}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
      </div>

     
      <div className="mb-4">
        <h3 className="font-semibold">Department</h3>
        {["Advertising / Communication", "Aviation & Aerospace", "Consulting", "Data Science & Analytics"].map((option) => (
          <div key={option}>
            <label className="inline-flex items-center mt-1">
              <input
                type="radio"
                className="form-radio"
                name="datePosted"
                checked={filters.datePosted === option}
                onChange={() => updateFilter("datePosted", option)}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Sort By</h3>
        {["Relevant", "Salary - High to low", "Date posted - New to Old"].map((option) => (
          <div key={option}>
            <label className="inline-flex items-center mt-1">
              <input
                type="radio"
                className="form-radio"
                name="datePosted"
                checked={filters.datePosted === option}
                onChange={() => updateFilter("datePosted", option)}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
      </div>

     

     
      <div className="mb-4">
        <h3 className="font-semibold">Distance</h3>
        {["All", "Within 5 km", "Within 10 km", "Within 20 km", "Within 50 km"].map((option) => (
          <div key={option}>
            <label className="inline-flex items-center mt-1">
              <input
                type="radio"
                className="form-radio"
                name="distance"
                checked={filters.distance === option}
                onChange={() => updateFilter("distance", option)}
              />
              <span className="ml-2">{option}</span>
            </label>
          </div>
        ))}
      </div>

   
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Salary</h3>
        <input
          type="range"
          min="30000"
          max="150000"
          step="5000"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full"
        />
        <p className="mt-1 text-sm text-gray-700">Up to ₹{salary}</p>
      </div>
    </div>
  );
};


const ToggleTabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = ["For You", "High Salary", "Nearby", "New Jobs"];
  return (
    <div className="flex gap-2 p-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-3xl ${
            selectedTab === tab
              ? "bg-blue-600 text-white"
              : "border border-gray-300 text-gray-700"
          }`}
          onClick={() => setSelectedTab(tab)}
          
        >

<img src={tabIcons[tab]} alt={tab} className="w-4 h-4" />
          {tab}
        </button>
      ))}
    </div>
  );
};

export default function JobPortal() {
  const [filters, setFilters] = useState({ datePosted: "All", distance: "All" });
  const [selectedTab, setSelectedTab] = useState("For You");
  const [salary, setSalary] = useState(75000); 
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      <Sidebar filters={filters} setFilters={setFilters} salary={salary} setSalary={setSalary} />
      <div className="w-full md:w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">
          Showing {jobs.length} jobs based on your profile
        </h1>
        <ToggleTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="mt-4">
          {jobs.map((job, i) => (
            <JobCard
              key={i}
              title={job.title || job.jobTitle}
              company={job.company || job.companyName}
              location={job.location}
              salary={job.salary || `₹${job.minimumSalary} - ₹${job.maximumSalary}`}
              tags={job.tags || job.perks || []}
              interview={job.walkIn === "yes"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
