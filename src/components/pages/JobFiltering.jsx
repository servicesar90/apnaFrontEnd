import React, { use, useState } from "react";
import { useEffect } from "react";
import { getJobs } from "../../API/ApiFunctions";
import JobCard from "../ui/jobCard";
import Sidebar from "../ui/sidebar";
import { useOutletContext } from "react-router-dom";
const tabIcons = {
  "For You": "/icon-park-twotone_more-app.png",
  "High Salary": "/Vector.png",
  "Nearby": "/material-symbols_explore-nearby.png",
  "New Jobs": "/fluent_form-new-20-filled.png",
};



const ToggleTabs = ({ selectedTab, setSelectedTab }) => {
  const tabs = ["For You", "High Salary", "Nearby", "New Jobs"];
  return (
    <div className="flex gap-2 p-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelectedTab(tab)}
          className={`px-4 py-2 rounded-3xl flex items-center gap-2 ${selectedTab === tab
            ? "bg-[#4294FF33] text-black"
            : "border border-gray-300 text-gray-700"
            }`}
        >
          <img
            src={tabIcons[tab]}
            alt={tab}
            className="w-6 h-6 rounded-3xl object-cover"
          />
          <span className="text-sm font-semibold">{tab}</span>
        </button>

      ))}
    </div>
  );
};

export default function JobPortal() {
  const [filters, setFilters] = useState({ datePosted: "All", distance: "All" });
  const [selectedTab, setSelectedTab] = useState("For You");
  const [salary, setSalary] = useState(75000);
  const [isOpen, setIsOpen] = useState(true);
  const [showfilters, setShowfilters] =useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = (e) => {
      if (e.matches) {
        setIsOpen(false); // Close if screen is small
      } else {
        setIsOpen(true)
      }
    };

    // Initial check
    if (mediaQuery.matches) {
      setIsOpen(false);
    }

    // Listen for screen size changes
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

 
  const {jobs} = useOutletContext();

  return (
    <>
    {isOpen?
      <div className="flex flex-row min-h-screen bg-gray-50">
        <div className="flex flex-col mt-4 w-1/3 max-w-[250px]">
        <h2 className="font-bold text-lg ml-4">Filters</h2>
        <Sidebar filters={filters} setFilters={setFilters} salary={salary} setSalary={setSalary} />
        </div>
           
        <div className="w-full md:w-3/4 p-4">
          <h1 className="text-2xl font-bold mb-4">
            Showing {jobs?.length} jobs based on your profile
          </h1>
          <ToggleTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="mt-4">
            {jobs?.map((job, i) => (
              <JobCard
                key={i}
                job={job}
              />
            ))}
          </div>
        </div>
      </div>:
    <div className="flex flex-col items-start min-h-screen bg-gray-50">
      <button className="m-4 mb-0 border px-4 py-2 rounded-[10px] bg-white font-bold text-lg" onClick={()=>setShowfilters(!showfilters)}>Filters</button>

      {showfilters && (
        <div className="absolute bg-white mt-20 max-w-[250px] rounded-[10px] max-h-[100vh] overflow-scroll">
          <Sidebar filters={filters} setFilters={setFilters} salary={salary} setSalary={setSalary} />
      </div>
      )}
  <div className="w-full md:w-3/4 p-4">
          <h1 className="text-2xl font-bold mb-4">
            Showing {jobs?.length} jobs based on your profile
          </h1>
          <ToggleTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="mt-4">
            {jobs?.map((job, i) => (
              <JobCard
                key={i}
                job={job}
              />
            ))}
          </div>
        </div>

      </div>}
      
      
    </>

  );
}
