import React, { useEffect, useState } from "react";
import { BadgeIndianRupee } from "lucide-react";

import MainContent from "../../components/ui/MainContent";
import { Mail, Phone, MapPin, Calendar, Briefcase, Timer } from "lucide-react";
import QuickLinks from "./Quicklinks";
import { useOutletContext } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import UserForm from "../modals/profileUpdateModals/resumeUpload";
import { uploadProfileApi } from "../../API/APIs";

const HomePageCandidateProfile = () => {
  const user = JSON.parse(localStorage.getItem("User"));
  const [showDrawer, setShowDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {employee} = useOutletContext();
  const [showContent, setShowContent] = useState(false);
  const [modalName, setModalName] = useState("")

  // Prevent background scroll when drawer is open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowDrawer(false); // auto-close drawer on large screen
        setIsMobile(false);
      }
      if (window.innerWidth < 768) {
        setIsMobile(true); // auto-close drawer on large screen
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

   useEffect(() => {
    if (employee) {
      const timeout = setTimeout(() => {
        setShowContent(true);
      }, 1500); // 1.5 seconds delay

      return () => clearTimeout(timeout); // cleanup
    }
  }, [employee]);

 
  return (
    <>
      {/* <div className="w-full p-6 bg-red-500 flex justify-center flex-row gap-10"> */}

      {/* {top  Section} */}
      <div className="flex flex-col border rounded-lg w-full max-w-4xl mx-auto p-4 space-y-4 bg-white shadow-xl ">
        {/* Profile Header */}
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div onClick={()=> setModalName("editImage")} className="relative cursor-pointer border rounded-[50%]   w-20 h-20">
              {employee && showContent?<> <img
              src={employee?.profileImage || "/user.png"}
              alt="avatar"
              className="rounded-[50%] w-20 h-20 object-cover"
            />
             <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-lg">
              100%
            </span>
            </>
            :<Skeleton variant="circular" width={80} height={80} sx={{margin: 0}} />}
          
           
           
          </div>

          {/* Profile Info */}
          <div className="flex flex-col  ">
            <div className="flex-1 ">
              {employee && showContent?<h2 className="text-16 font-gray-800">{employee?.fullName}</h2>:<Skeleton animation="wave" variant="text" width={200} height={20} />}
               {employee && showContent?<p className="text-14 text-gray-650">
                {employee?.EmployeeExperiences[0]?.jobTitle}
              </p>:<Skeleton animation="wave" variant="text" width={200} height={20} />}
            
             {employee && showContent? <p className="text-14 text-gray-650">
                at {employee?.EmployeeExperiences[0]?.companyName}
              </p>:<Skeleton animation="wave" variant="text" width={200} height={20} />} 
             
            </div>

            {/* Last Updated */}
            <div className="text-12 text-gray-650   hidden lg:block">
              Profile last updated ·  {employee?.updatedAt.split("T")[0] && showContent?employee?.updatedAt.split("T")[0] : <Skeleton variant="text" width={20} height={20}  animation="wave" />}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[] border-secondary" />

        {/* Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-14 text-gray-650">
              {(employee && showContent) ? (employee.currentLocation? employee.currentLocation:"Location not updated"): <Skeleton animation="wave" variant="text" width={100} height={30} />}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-secondary" />
            <span className="text-14 text-gray-650">
              {(user.phone && showContent) ? user.phone: <Skeleton animation="wave" variant="text" width={100} height={30} />}
    
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-secondary" />
            <span className="text-14 text-gray-650">
              {(employee && showContent)? (employee?.TotalExperience?.years ? `${employee?.TotalExperience?.years} years ${employee?.TotalExperience?.months} months Experience`: "Experience not provided"):
                <Skeleton animation="wave" variant="text" width={100} height={30} />}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-secondary" />
            <span className="text-14 text-gray-650">
              {(employee && showContent) ?employee.email : <Skeleton animation="wave" variant="text" width={100} height={30} />}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <BadgeIndianRupee className="w-4 h-4 text-secondary" />
            <span className="text-14 text-gray-650">
              {(employee && showContent)
                ? (employee.salary? ` ${employee.salary}`: "Salary not Provided")
                : <Skeleton animation="wave" variant="text" width={100} height={30} />}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Timer className="w-4 h-4 text-secondary" />
            <span className="text-14 text-gray-650">
              {(employee && showContent) ? employee?.noticePeriod : <Skeleton animation="wave" variant="text" width={100} height={30} />}
            </span>
          </div>
        </div>
      </div>

      {/* {Body Section} */}

      {isMobile ? (
        <div className="flex flex-col w-full bg-black-500">
          <div className="flex justify-start mt-5 ml-5 ">
            <div className="block">
              <button
                onClick={() => setShowDrawer(true)}
                className="  bg-secondary text-14 text-white px-3 py-2 rounded-lg font-medium shadow-md "
              >
                Quick Links
              </button>
            </div>
          </div>
          <div className="flex flex-row mt-5 w-full">
            <div className="flex flex-col w-full  mt-5 mb-10 mr-2 shadow-xl rounded-lg justify-center items-center pr-4 pl-4 border">
              <MainContent employee={employee} showContent={showContent} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-row mt-5 gap-4 lg:flex-row  w-full">
            {/* Left: Quick Links of width 1/3 */}
            <div className="w-full lg:w-1/3 pl-6">
              <QuickLinks />
            </div>

            {/* Right Main Content of width 2/3*/}
            <div className="flex flex-col w-full lg:w-2/3 sm:w-full  mt-5 mb-10 mr-5 shadow-xl rounded-lg justify-start right-6 pr-6 pl-6 border">
             <MainContent employee={employee} showContent={showContent} />
            </div>
          </div>
        </div>
      )}

      {/* Drawer from Bottom for Mobile */}
      {showDrawer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end"
          onClick={() => setShowDrawer(false)}
        >
          <div
            className="bg-white w-full rounded-t-xl max-h-[80vh] overflow-y-auto p-4 shadow-2xl transform transition-transform duration-300 translate-y-0"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside drawer
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-16 font-medium text-gray-800">Quick Links</h2>
              <button
                onClick={() => setShowDrawer(false)}
                className="text-14 text-blue-600 font-medium"
              >
                Close
              </button>
            </div>
             <ul className="space-y-4">
        {[
          { label: 'Resume', action: 'Update' },
          { label: 'Resume headline' },
          { label: 'Key skills' },
          { label: 'Employment', action: '+ Add' },
          { label: 'Education', action: '+ Add' },
          { label: 'IT skills' },
          { label: 'Projects' },
          { label: 'Profile summary' },
          { label: 'Accomplishments' },
          { label: 'Career profile' },
          { label: 'Personal Details' },
        ].map((link, index) => (
          <li
            key={index}
            className="flex justify-between text-14 text-gray-650 pb-1 "
          >
            <span>{link.label}</span>
            {link.action && (
              <button className="text-blue-600 hover:underline">
                {link.action}
              </button>
            )}
          </li>
        ))}
      </ul>
            
            
          </div>

          
        </div>
      )}

  {modalName === "editImage" && (
        <UserForm open={modalName === "editImage"} label={"Upload Profile Image"} onClose={() => setModalName("")} metaData={{ field: "profileImage", Api: uploadProfileApi, default: employee?.profileImage }} />

      )}
      
    </>
  );
};

export default HomePageCandidateProfile;
