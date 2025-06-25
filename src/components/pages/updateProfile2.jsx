// import { useEffect, useState, useRef } from "react";
// import { BadgeIndianRupee } from "lucide-react";
// import MainContent from "../../components/ui/MainContent";
// import { Mail, Phone, MapPin, Calendar, Timer } from "lucide-react";
// import QuickLinks from "./Quicklinks";
// import Skeleton from "@mui/material/Skeleton";
// import UserForm from "../modals/profileUpdateModals/resumeUpload";
// import { uploadProfileApi, uploadResumeApi } from "../../API/APIs";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchUserProfile } from "../../Redux/getData";

// const HomePageCandidateProfile = () => {
//   const sectionRefs = {
//     Resume: useRef(null),
//     Employment: useRef(null),
//     Education: useRef(null),
//     Skills: useRef(null),
//     "Basic Details": useRef(null),
//   };
//   const user = JSON.parse(localStorage.getItem("User"));
//   const [showDrawer, setShowDrawer] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [showContent, setShowContent] = useState(false);
//   const [modalName, setModalName] = useState("");
//    const [resumeModal, openResmeModal] = useState(false);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchUserProfile());
//   }, [dispatch]);

//   const { employee, loading, error } = useSelector(
//     (state) => state.getDataReducer
//   );

//   // Prevent background scroll when drawer is open
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setShowDrawer(false); // auto-close drawer on large screen
//         setIsMobile(false);
//       }
//       if (window.innerWidth < 768) {
//         setIsMobile(true); // auto-close drawer on large screen
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     handleResize();

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (employee) {
//       const timeout = setTimeout(() => {
//         setShowContent(true);
//       }, 1500); // 1.5 seconds delay

//       return () => clearTimeout(timeout); // cleanup
//     }
//   }, [employee]);

//   const handleScrollTo = (label) => {
//     const ref = sectionRefs[label];
//     if (ref && ref.current) {
//       ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
//     }
//   };
//   const hanleModalOpen = (link) => {
//     if (link.action == "Update") {
//       openResmeModal(true);
//     }
    
//   };

//   if (loading)
//     return (
//       <div className="flex justify-center items-center w-full min-h-[80vh] bg-black/20">
//         <img
//           src="/unigrowLogo.png"
//           alt="logo"
//           className="w-40 h-16 animate-heartbeat"
//         />
//       </div>
//     );

//   return (
//     <>
//       {/* <div className="w-full p-6 bg-red-500 flex justify-center flex-row gap-10"> */}

//       {/* {top  Section} */}
//       <div className="flex flex-col bg-white border rounded-lg w-full max-w-4xl mx-auto p-4 space-y-4 bg-white shadow-xl ">
//         {/* Profile Header */}
//         <div className="flex items-center gap-4">
//           {/* Profile Image */}
//           <div
//             onClick={() => setModalName("editImage")}
//             className="relative cursor-pointer border rounded-[50%]   w-20 h-20"
//           >
//             {employee && showContent ? (
//               <>
//                 {" "}
//                 <img
//                   src={employee?.profileImage || "/user.png"}
//                   alt="avatar"
//                   className="rounded-[50%] w-20 h-20 object-cover"
//                 />
//                 <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-lg">
//                   100%
//                 </span>
//               </>
//             ) : (
//               <Skeleton
//                 variant="circular"
//                 width={80}
//                 height={80}
//                 sx={{ margin: 0 }}
//               />
//             )}
//           </div>

//           {/* Profile Info */}
//           <div className="flex flex-col  ">
//             <div className="flex-1 ">
//               {employee && showContent ? (
//                 <h2 className="text-16 font-gray-800">{employee?.fullName}</h2>
//               ) : (
//                 <Skeleton
//                   animation="wave"
//                   variant="text"
//                   width={200}
//                   height={20}
//                 />
//               )}
//               {employee && showContent ? (
//                 <p className="text-14 text-gray-650">
//                   {employee?.EmployeeExperiences[0]?.jobTitle}
//                 </p>
//               ) : (
//                 <Skeleton
//                   animation="wave"
//                   variant="text"
//                   width={200}
//                   height={20}
//                 />
//               )}

//               {employee && showContent ? (
//                 <p className="text-14 text-gray-650">
//                   at {employee?.EmployeeExperiences[0]?.companyName}
//                 </p>
//               ) : (
//                 <Skeleton
//                   animation="wave"
//                   variant="text"
//                   width={200}
//                   height={20}
//                 />
//               )}
//             </div>

//             {/* Last Updated */}
//             <div className="text-12 text-gray-650   hidden lg:block">
//               Profile last updated ·{" "}
//               {employee?.updatedAt.split("T")[0] && showContent ? (
//                 employee?.updatedAt.split("T")[0]
//               ) : (
//                 <Skeleton
//                   variant="text"
//                   width={20}
//                   height={20}
//                   animation="wave"
//                 />
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="border-[] border-secondary" />

//         {/* Details Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ">
//           <div className="flex items-center gap-2">
//             <MapPin className="w-4 h-4 text-secondary" />
//             <span className="text-14 text-gray-650">
//               {employee && showContent ? (
//                 employee.currentLocation ? (
//                   employee.currentLocation
//                 ) : (
//                   "Location not updated"
//                 )
//               ) : (
//                 <Skeleton
//                   animation="wave"
//                   variant="text"
//                   width={100}
//                   height={30}
//                 />
//               )}
//             </span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Phone className="w-4 h-4 text-secondary" />
//             <span className="text-14 text-gray-650">
//               {user.phone && showContent ? (
//                 user.phone
//               ) : (
//                 <Skeleton
//                   animation="wave"
//                   variant="text"
//                   width={100}
//                   height={30}
//                 />
//               )}
//             </span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Calendar className="w-4 h-4 text-secondary" />
//             <span className="text-14 text-gray-650">
//               {employee && showContent ? (
//                 employee?.TotalExperience?.years ? (
//                   `${employee?.TotalExperience?.years} years ${employee?.TotalExperience?.months} months Experience`
//                 ) : (
//                   "Experience not provided"
//                 )
//               ) : (
//                 <Skeleton
//                   animation="wave"
//                   variant="text"
//                   width={100}
//                   height={30}
//                 />
//               )}
//             </span>
//           </div>

//           <div className="flex items-start gap-2 w-full max-w-xs">
//             <Mail className="w-4 h-4 min-w-4 text-secondary mt-1" />
//             <span className="text-14 text-gray-650 break-words whitespace-normal w-full">
//               {employee && showContent ? (
//                 employee.email
//               ) : (
//                 <Skeleton
//                   animation="wave"
//                   variant="text"
//                   width={100}
//                   height={30}
//                 />
//               )}
//             </span>
//           </div>

//           <div className="flex items-center gap-2">
//             <BadgeIndianRupee className="w-4 h-4 text-secondary" />
//             <span className="text-14 text-gray-650">
//               {employee && showContent ? (
//                 employee.salary ? (
//                   ` ${employee.salary}`
//                 ) : (
//                   "Salary not Provided"
//                 )
//               ) : (
//                 <Skeleton
//                   animation="wave"
//                   variant="text"
//                   width={100}
//                   height={30}
//                 />
//               )}
//             </span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Timer className="w-4 h-4 text-secondary" />
//             <span className="text-14 text-gray-650">
//               {employee && showContent ? (
//                 employee?.noticePeriod ? (
//                   employee?.noticePeriod
//                 ) : (
//                   "N/A"
//                 )
//               ) : (
//                 <Skeleton
//                   animation="wave"
//                   variant="text"
//                   width={100}
//                   height={30}
//                 />
//               )}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* {Body Section} */}

//       {isMobile ? (
//         <div className="flex flex-col w-full">
//           <div className="flex justify-start mt-5 ml-5 ">
//             <div className="block">
//               <button
//                 onClick={() => setShowDrawer(true)}
//                 className="  bg-secondary text-14 text-white px-3 py-2 rounded-lg font-medium shadow-md "
//               >
//                 Quick Links
//               </button>
//             </div>
//           </div>
//           <div className="flex flex-row mt-5 w-full">
//             <div className="flex flex-col w-full bg-white  mt-5 mb-10 mr-2 shadow-xl rounded-lg justify-center items-center pr-4 pl-4 border">
//               {employee && (
//                 <MainContent
//                   employee={employee}
//                   showContent={showContent}
//                   sectionRefs={sectionRefs}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <div className="flex flex-row mt-5 gap-4 lg:flex-row  w-full">
//             {/* Left: Quick Links of width 1/3 */}
//             <div className="w-full md:w-1/3 pl-6">
//               <QuickLinks employee={employee} onLinkClick={handleScrollTo} />
//             </div>

//             {/* Right Main Content of width 2/3*/}
//             <div className="flex flex-col max-h-[75vh] overflow-scroll w-full lg:w-2/3 sm:w-full bg-white  mt-5 mb-10 mr-5 shadow-xl rounded-lg justify-start right-6 pr-6 pl-6 border">
//               {employee && (
//                 <MainContent
//                   employee={employee}
//                   showContent={showContent}
//                   sectionRefs={sectionRefs}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Drawer from Bottom for Mobile */}
//       {showDrawer && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end"
//           onClick={() => setShowDrawer(false)}
//         >
//           <div
//             className="bg-white w-full rounded-t-xl max-h-[80vh] overflow-y-auto p-4 shadow-2xl transform transition-transform duration-300 translate-y-0"
//             onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside drawer
//           >
//             <div className="flex justify-between items-center mb-5">
//               <h2 className="text-16 font-medium text-gray-800">Quick Links</h2>
//               <button
//                 onClick={() => setShowDrawer(false)}
//                 className="text-14 text-blue-600 font-medium"
//               >
//                 Close
//               </button>
//             </div>
//             <ul className="space-y-4">
//               {[
//                 { label: "Resume", action: "Update" },
//                 { label: "Key skills" },
//                 { label: "Employment"},
//                 { label: "Education" },
//                 { label: "Skills" },
//                 // { label: 'Career profile' },
//                 { label: "Basic Details" },
//               ].map((link, index) => (
//                 <div className="flex flex-row justify-between items-center" key={link.label}>
//                   <li
                  
//                   className="flex justify-between text-14 text-gray-650 pb-1 cursor-pointer"
//                   onClick={() => {
//                     const ref = sectionRefs[link.label];
//                     if (ref?.current) {
//                       ref.current.scrollIntoView({
//                         behavior: "smooth",
//                         block: "center",
//                       });
//                       setTimeout(() => setShowDrawer(false), 300);
//                       setShowDrawer(false); // ✅ close drawer after scrolling
//                     }
//                   }}
//                 >
//                   <span>{link.label}</span>
//                 </li>
//                   {link.action && (
//                     <button className="text-blue-600 hover:underline" onClick={() => hanleModalOpen(link)}>
//                       {link.action}
//                     </button>
//                   )}

//                 </div>
                
//               ))}
//             </ul>
//           </div>
//            {resumeModal && (
//                   <UserForm
//                     open={resumeModal}
//                     label="Resume Update"
//                     onClose={() => openResmeModal(!resumeModal)}
//                     metaData={{
//                       field: "resume",
//                       Api: uploadResumeApi,
//                       default: employee?.resumeURL,
//                     }}
//                   />
//                 )}
//         </div>
        
//       )}

//       {modalName === "editImage" && (
//         <UserForm
//           open={modalName === "editImage"}
//           label={"Upload Profile Image"}
//           onClose={() => setModalName("")}
//           metaData={{
//             field: "profileImage",
//             Api: uploadProfileApi,
//             default: employee?.profileImage,
//           }}
//         />
//       )}
//     </>
//   );
// };

// export default HomePageCandidateProfile;


import { useEffect, useState, useRef } from "react";
import { BadgeIndianRupee } from "lucide-react";
import MainContent from "../../components/ui/MainContent";
import { Mail, Phone, MapPin, Calendar, Timer } from "lucide-react";
import QuickLinks from "./Quicklinks";
import Skeleton from "@mui/material/Skeleton";
import UserForm from "../modals/profileUpdateModals/resumeUpload";
import { uploadProfileApi, uploadResumeApi } from "../../API/APIs";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../Redux/getData";

const HomePageCandidateProfile = () => {
  const sectionRefs = {
    Resume: useRef(null),
    Employment: useRef(null),
    Education: useRef(null),
    Skills: useRef(null),
    "Basic Details": useRef(null),
  };
  const user = JSON.parse(localStorage.getItem("User"));
  const [showDrawer, setShowDrawer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [modalName, setModalName] = useState("");
  const [resumeModal, openResmeModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  const { employee, loading, error } = useSelector(
    (state) => state.getDataReducer,
  );

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

    handleResize();

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

  const handleScrollTo = (label) => {
    const ref = sectionRefs[label];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const hanleModalOpen = (link) => {
    if (link.action == "Update") {
      openResmeModal(true);
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#dff3f9] to-white flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 border-4 border-[#0784C9] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-[#1e40af] font-medium text-sm">
            Loading profile...
          </p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#dff3f9] to-white">
      {/* Profile Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto p-4">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
            {/* Profile Image */}
            <div
              onClick={() => setModalName("editImage")}
              className="relative cursor-pointer group"
            >
              <div className="w-20 h-20 rounded-full border-2 border-[#0784C9] overflow-hidden bg-gradient-to-br from-[#dff3f9] to-[#0784C9] flex items-center justify-center">
                {employee && showContent ? (
                  <img
                    src={employee?.profileImage || "/placeholder.svg"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Skeleton
                    variant="circular"
                    width={76}
                    height={76}
                    className="bg-gray-200"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all duration-200 flex items-center justify-center">
                <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Edit
                </span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-2">
              <div>
                {employee && showContent ? (
                  <h1 className="text-lg font-semibold text-[#1e40af]">
                    {employee?.fullName}
                  </h1>
                ) : (
                  <Skeleton width={200} height={20} />
                )}
                {employee && showContent ? (
                  <p className="text-sm font-medium text-[#0784C9]">
                    {employee?.EmployeeExperiences[0]?.jobTitle}
                  </p>
                ) : (
                  <Skeleton width={150} height={16} />
                )}

                {employee && showContent ? (
                  <p className="text-xs text-gray-600">
                    at {employee?.EmployeeExperiences[0]?.companyName}
                  </p>
                ) : (
                  <Skeleton width={120} height={14} />
                )}
              </div>

              {/* Last Updated */}
              <p className="text-xs text-gray-500">
                Profile last updated ·{" "}
                {employee?.updatedAt.split("T")[0] && showContent ? (
                  employee?.updatedAt.split("T")[0]
                ) : (
                  <Skeleton width={80} height={12} className="inline-block" />
                )}
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex items-center gap-2 bg-[#dff3f9] rounded-lg p-3">
              <MapPin className="w-4 h-4 text-[#0784C9] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#1e40af] mb-0.5">
                  Location
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {employee && showContent ? (
                    employee.currentLocation ? (
                      employee.currentLocation
                    ) : (
                      "Location not updated"
                    )
                  ) : (
                    <Skeleton width={100} height={12} />
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#dff3f9] rounded-lg p-3">
              <Phone className="w-4 h-4 text-[#0784C9] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#1e40af] mb-0.5">
                  Phone
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {user.phone && showContent ? (
                    user.phone
                  ) : (
                    <Skeleton width={90} height={12} />
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#dff3f9] rounded-lg p-3">
              <Timer className="w-4 h-4 text-[#0784C9] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#1e40af] mb-0.5">
                  Experience
                </p>
                <p className="text-xs text-gray-600">
                  {employee && showContent ? (
                    employee?.TotalExperience?.years ? (
                      `${employee?.TotalExperience?.years} years ${employee?.TotalExperience?.months} months`
                    ) : (
                      "Experience not provided"
                    )
                  ) : (
                    <Skeleton width={120} height={12} />
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#dff3f9] rounded-lg p-3">
              <Mail className="w-4 h-4 text-[#0784C9] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#1e40af] mb-0.5">
                  Email
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {employee && showContent ? (
                    employee.email
                  ) : (
                    <Skeleton width={110} height={12} />
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#dff3f9] rounded-lg p-3">
              <BadgeIndianRupee className="w-4 h-4 text-[#0784C9] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#1e40af] mb-0.5">
                  Salary
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {employee && showContent ? (
                    employee.salary ? (
                      `₹ ${employee.salary}`
                    ) : (
                      "Salary not Provided"
                    )
                  ) : (
                    <Skeleton width={80} height={12} />
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-[#dff3f9] rounded-lg p-3">
              <Calendar className="w-4 h-4 text-[#0784C9] flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-[#1e40af] mb-0.5">
                  Notice Period
                </p>
                <p className="text-xs text-gray-600 truncate">
                  {employee && showContent ? (
                    employee?.noticePeriod ? (
                      employee?.noticePeriod
                    ) : (
                      "N/A"
                    )
                  ) : (
                    <Skeleton width={60} height={12} />
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body Section */}
      <div className="max-w-6xl mx-auto p-4">
        {isMobile ? (
          <div className="space-y-4">
            <div className="flex justify-center">
              <button
                onClick={() => setShowDrawer(true)}
                className="bg-gradient-to-r from-[#1e40af] to-[#0784C9] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
              >
                Quick Links
              </button>
            </div>
            <div className="w-full">
              {employee && (
                <MainContent
                  employee={employee}
                  showContent={showContent}
                  sectionRefs={sectionRefs}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-6">
            {/* Left: Quick Links of width 1/3 */}
            <div className="w-1/3">
              <QuickLinks
                handleScrollTo={handleScrollTo}
                hanleModalOpen={hanleModalOpen}
              />
            </div>

            {/* Right Main Content of width 2/3*/}
            <div className="w-2/3">
              {employee && (
                <MainContent
                  employee={employee}
                  showContent={showContent}
                  sectionRefs={sectionRefs}
                />
              )}
            </div>
          </div>
        )}
      </div>

      {/* Drawer from Bottom for Mobile */}
      {showDrawer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          onClick={() => setShowDrawer(false)}
        >
          <div
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-xl p-6 max-h-[70vh] overflow-y-auto transform transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside drawer
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[#1e40af]">
                Quick Links
              </h3>
              <button
                onClick={() => setShowDrawer(false)}
                className="text-sm text-[#0784C9] font-medium px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
            <div className="space-y-3">
              {[
                { label: "Resume", action: "Update" },
                { label: "Key skills" },
                { label: "Employment" },
                { label: "Education" },
                { label: "Skills" },
                { label: "Basic Details" },
              ].map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-[#dff3f9] rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                  onClick={() => {
                    const ref = sectionRefs[link.label];
                    if (ref?.current) {
                      ref.current.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                      setTimeout(() => setShowDrawer(false), 300);
                      setShowDrawer(false); // ✅ close drawer after scrolling
                    }
                  }}
                >
                  <span className="text-sm font-medium text-[#1e40af]">
                    {link.label}
                  </span>
                  {link.action && (
                    <button
                      className="bg-[#0784C9] text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-[#1e40af] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        hanleModalOpen(link);
                      }}
                    >
                      {link.action}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {resumeModal && (
        <UserForm
          onClose={() => openResmeModal(!resumeModal)}
          metaData={{
            field: "resume",
            Api: uploadResumeApi,
            default: employee?.resumeURL,
          }}
        />
      )}

      {/* Profile Image Modal */}
      {modalName === "editImage" && (
        <UserForm
          onClose={() => setModalName("")}
          metaData={{
            field: "profileImage",
            Api: uploadProfileApi,
            default: employee?.profileImage,
          }}
        />
      )}
    </div>
  );
};

export default HomePageCandidateProfile;
