// import React, { useEffect, useState } from "react";
// import { useOutletContext, useParams } from "react-router-dom";
// // import AppliedModal from "../modals/jobsModal/AppliedModal";
// // import { applyJobs, getJobs } from "../../API/ApiFunctions";
// import "react-quill-new/dist/quill.snow.css";
// import {
//   BookUser,
//   Briefcase,
//   Building,
//   CalendarArrowUp,
//   CircleGauge,
//   GraduationCap,
//   IndianRupee,
//   MapPin,
//   SunMoon,
//   Timer,
//   Users,
//   Share,
//   X,
//   CheckCircle,
//   Phone,
//   Mail,
//   AlertTriangle,
// } from "lucide-react";
// // import { showErrorToast } from "../ui/toast";
// // import { Skeleton } from "@mui/material";
// // import { useDispatch, useSelector } from "react-redux";
// // import { fetchJobs } from "../../Redux/getData";

// const faqData = [
//   {
//     question:
//       "How much salary can I expect as a Computer Hardware Technician in Arvind Solution in Delhi-NCR?",
//     answer:
//       "You can expect a salary as per industry standards based on your experience and skillset. The job posting mentions a fixed salary of ₹10,000 to ₹15,000 per month.",
//   },
//   {
//     question:
//       "What is the eligibility criteria to apply for Computer Hardware Technician in Arvind Solution in Delhi-NCR?",
//     answer:
//       "You should have relevant experience or educational qualifications in Computer Hardware or related fields. Basic troubleshooting knowledge is preferred.",
//   },
//   {
//     question: "Is there any specific skill required for this job?",
//     answer:
//       "Yes, basic knowledge of computer hardware troubleshooting, assembling, and networking is required.",
//   },
//   {
//     question: "Who can apply for this job?",
//     answer:
//       "Anyone with the required skills and availability in the specified location can apply.",
//   },
//   {
//     question: "Is it a work from home job?",
//     answer: "No, this is an on-site job and not work-from-home.",
//   },
//   {
//     question:
//       "Are there any charges or deposits required while applying for the role or while joining?",
//     answer:
//       "No, there are no charges or deposits required to apply for or join this job.",
//   },
//   {
//     question: "How can I apply for this job?",
//     answer:
//       "You can apply by clicking on the 'Apply' button provided in this page. Make sure you are logged in to your account.",
//   },
//   {
//     question: "What is the last date to apply?",
//     answer:
//       "The last date is not specified, but it's recommended to apply as soon as possible due to urgent hiring.",
//   },
// ];

// // Mock data - replace with your actual data source
// const mockJobData = {
//   id: "1",
//   jobTitle: "Computer Hardware Technician",
//   companyName: "Arvind Solution",
//   location: "Delhi-NCR",
//   minimumSalary: "10000",
//   maximumSalary: "15000",
//   incentive: "5000",
//   workLocationType: "On-site",
//   jobType: "Full-time",
//   experience: "1-2 years",
//   payType: "Monthly",
//   english: "Basic",
//   walkIn: true,
//   walkInAddress: "Sector 62, Noida",
//   WalkInEndDate: "2024-01-31",
//   walkInStartTime: "10:00 AM",
//   walkInInstruction: "Bring original documents and one copy each",
//   joiningFee: true,
//   joiningFeeAmount: "2000",
//   joiningFeeAmountTime: "Before joining",
//   joiningFeeReason: "Training",
//   joiningFeeReasonDetail: "Initial training and certification costs",
//   jobRoles: "Hardware troubleshooting and maintenance",
//   nightShift: "Day shift",
//   otherRecruiterName: "Rakesh Kumar",
//   otherRecruiterNumber: "+91 9876543210",
//   otherRecruiterEmail: "rakesh@arvindsolution.com",
//   candidateType: "Fresher/Experienced",
//   education: "12th Pass or ITI",
//   gender: "Any",
//   employerId: "emp1",
//   description:
//     "We are looking for a skilled Computer Hardware Technician to join our team. The candidate will be responsible for assembling, maintaining, and repairing computer hardware components. You will diagnose hardware problems, install new hardware, and provide technical support to our clients. This role requires hands-on experience with computer systems, troubleshooting skills, and the ability to work independently.",
//   JobApplications: [
//     {
//       id: "app1",
//       employeeId: "emp123",
//       status: "Under Review",
//     },
//   ],
//   Employer: {
//     company: {
//       companyName: "Arvind Solution",
//       location: "New Delhi, India",
//       about:
//         "Arvind Solution is a leading technology services company specializing in computer hardware solutions, networking, and IT support. We have been serving businesses across Delhi-NCR for over 10 years with reliable and professional services.",
//     },
//   },
// };

// // Mock Applied Modal Component
// const AppliedModal = ({ onClose }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//     <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-scale-in">
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
//       >
//         <X className="w-6 h-6" />
//       </button>

//       <div className="text-center">
//         <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//           <CheckCircle className="w-8 h-8 text-green-600" />
//         </div>

//         <h3 className="text-2xl font-bold text-gray-900 mb-4">
//           Application Submitted!
//         </h3>

//         <p className="text-gray-600 mb-6 leading-relaxed">
//           Your application has been submitted successfully. The employer will
//           review your application and get back to you soon.
//         </p>

//         <div className="bg-blue-50 rounded-xl p-4 mb-6 text-left">
//           <h4 className="font-semibold text-gray-900 mb-3">
//             What happens next?
//           </h4>
//           <div className="space-y-2 text-sm text-gray-600">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//               <span>Employer reviews within 2-3 business days</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//               <span>You'll receive updates via email and SMS</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//               <span>Direct contact for further steps</span>
//             </div>
//           </div>
//         </div>

//         <button
//           onClick={onClose}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
//         >
//           Continue Browsing
//         </button>
//       </div>
//     </div>
//   </div>
// );

// // Mock functions - replace with your actual API functions
// const showErrorToast = (message) => {
//   alert(`Error: ${message}`);
// };

// const applyJobs = async (id, employerId) => {
//   // Simulate API call
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return {
//     data: {
//       application: {
//         id: "new-app",
//         status: "Applied",
//       },
//     },
//   };
// };

// const getJobs = async () => {
//   return mockJobData;
// };

// const JobDetails = () => {
//   const [data, setData] = useState(null);
//   const [showFullDescription, setShowFullDescription] = useState(false);
//   const [showAppliedModal, setShowAppliedModal] = useState(false);
//   const [applied, setApplied] = useState(false);
//   const [appliedData, setAppliedData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Mock user data - replace with your actual user context
//   const user = { id: "user123", name: "John Doe" };
//   const id = "1"; // Mock job ID

//   useEffect(() => {
//     // Simulate data loading
//     setTimeout(() => {
//       setData(mockJobData);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   useEffect(() => {
//     if (data) {
//       const alreadyApplied = data?.JobApplications.filter(
//         (ids) => ids.employeeId === user?.id,
//       );

//       if (alreadyApplied?.length > 0) {
//         setApplied(true);
//         setAppliedData(alreadyApplied[0]);
//       } else {
//         setApplied(false);
//       }
//     }
//   }, [data, user?.id]);

//   const handleApplyClick = async () => {
//     setApplied(true);
//     try {
//       const response = await applyJobs(id, data?.employerId);
//       if (response) {
//         setShowAppliedModal(true);
//         setAppliedData(response.data.application);
//       }
//     } catch (error) {
//       showErrorToast("could not apply");
//       setApplied(false);
//     }
//   };

//   const DetailRow = ({ icon, label, value }) => (
//     <div className="flex items-center justify-between py-4 px-6 border-b border-gray-100 last:border-b-0 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-200">
//       <div className="flex items-center gap-3">
//         <div className="text-blue-600 bg-blue-50 p-2.5 rounded-xl shadow-sm">
//           {icon}
//         </div>
//         <span className="text-gray-700 font-medium text-sm">{label}</span>
//       </div>
//       <div className="text-gray-900 font-semibold text-sm max-w-[200px] text-right">
//         {value}
//       </div>
//     </div>
//   );

//   const LoadingSkeleton = () => (
//     <div className="animate-pulse">
//       <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
//       <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//     </div>
//   );

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
//         <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
//           <div className="text-center">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               Loading Job Details
//             </h3>
//             <p className="text-gray-600">
//               Please wait while we fetch the latest information...
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       <div className="max-w-5xl mx-auto px-4 py-8">
//         <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20">
//           {/* Hero Header Section */}
//           <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white relative overflow-hidden">
//             <div className="absolute inset-0 bg-black/10"></div>
//             <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full transform translate-x-32 -translate-y-32"></div>
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full transform -translate-x-32 translate-y-32"></div>

//             <div className="relative p-8 lg:p-12">
//               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
//                 {/* Job Title & Company */}
//                 <div className="flex-1">
//                   <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
//                     <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                     <span className="text-sm font-medium">Urgently Hiring</span>
//                   </div>

//                   <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
//                     {data?.jobTitle}
//                   </h1>

//                   <div className="flex items-center gap-3 text-blue-100 mb-3">
//                     <Building className="w-6 h-6" />
//                     <span className="text-2xl font-semibold">
//                       {data?.companyName}
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-3 text-blue-100">
//                     <MapPin className="w-5 h-5" />
//                     <span className="text-lg">{data?.location}</span>
//                   </div>
//                 </div>

//                 {/* Stats Grid */}
//                 <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:w-80">
//                   <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
//                     <div className="flex items-center justify-center gap-2 mb-2">
//                       <Users className="w-5 h-5 text-blue-200" />
//                       <span className="text-sm font-medium text-blue-200">
//                         Applicants
//                       </span>
//                     </div>
//                     <div className="text-2xl font-bold">
//                       {data?.JobApplications.length}
//                     </div>
//                     <div className="text-sm text-blue-100">Applied</div>
//                   </div>

//                   <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
//                     <div className="flex items-center justify-center gap-2 mb-2">
//                       <IndianRupee className="w-5 h-5 text-blue-200" />
//                       <span className="text-sm font-medium text-blue-200">
//                         Salary
//                       </span>
//                     </div>
//                     <div className="text-lg font-bold">
//                       ₹{data?.minimumSalary} - ₹{data?.maximumSalary}
//                     </div>
//                     <div className="text-sm text-blue-100">Monthly</div>
//                   </div>

//                   {data?.incentive && (
//                     <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 col-span-2">
//                       <div className="flex items-center justify-center gap-2 mb-2">
//                         <CircleGauge className="w-5 h-5 text-blue-200" />
//                         <span className="text-sm font-medium text-blue-200">
//                           Total Earning Potential
//                         </span>
//                       </div>
//                       <div className="text-2xl font-bold">
//                         ₹{data?.maximumSalary}+ {data?.incentive}
//                       </div>
//                       <div className="text-sm text-blue-100">
//                         Including Incentives
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Job Type Tags */}
//           <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
//             <div className="flex flex-wrap gap-3">
//               <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200 shadow-sm">
//                 {data?.workLocationType}
//               </span>
//               <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium border border-green-200 shadow-sm">
//                 {data?.jobType}
//               </span>
//               <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium border border-purple-200 shadow-sm">
//                 {data?.experience}
//               </span>
//               <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium border border-orange-200 shadow-sm">
//                 {data?.payType}
//               </span>
//               <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium border border-indigo-200 shadow-sm">
//                 {data?.english} English
//               </span>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="px-8 py-6 bg-white border-b border-gray-100">
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="flex-1 sm:flex-none bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200">
//                 <div className="flex items-center justify-center gap-2">
//                   <Share className="w-5 h-5" />
//                   Share
//                 </div>
//               </button>
//               <button
//                 onClick={handleApplyClick}
//                 disabled={applied}
//                 className={`flex-1 sm:flex-none font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
//                   applied
//                     ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
//                     : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
//                 }`}
//               >
//                 {applied ? (
//                   <div className="flex items-center justify-center gap-2">
//                     <CheckCircle className="w-5 h-5" />
//                     {appliedData?.status ? appliedData.status : "Applied"}
//                   </div>
//                 ) : (
//                   "Apply Now"
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Content Sections */}
//           <div className="p-8 space-y-8">
//             {/* Urgent Hiring Badge */}
//             {data && (
//               <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 border-l-4 border-red-500 rounded-2xl p-6 shadow-lg">
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
//                     <AlertTriangle className="w-5 h-5 text-red-600" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-bold text-red-800 text-lg mb-2">
//                       Urgently hiring
//                     </h3>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
//                       {data.walkIn && (
//                         <div className="flex items-center gap-2 text-blue-700 bg-blue-50 px-3 py-2 rounded-lg">
//                           <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                           <span className="font-medium">Walk In Available</span>
//                         </div>
//                       )}
//                       <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
//                         <Users className="w-4 h-4" />
//                         <span>
//                           {data?.JobApplications.length} applicants so far
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Joining Fee Section */}
//             {data?.joiningFee && (
//               <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl overflow-hidden shadow-lg">
//                 <div className="bg-gradient-to-r from-yellow-100 to-orange-100 px-6 py-4 border-b border-yellow-200">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center">
//                       <AlertTriangle className="w-5 h-5 text-yellow-700" />
//                     </div>
//                     <h3 className="text-xl font-bold text-yellow-800">
//                       Pay For Job
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="bg-white/60 backdrop-blur-sm space-y-0">
//                   <DetailRow
//                     icon={<IndianRupee className="h-4 w-4" />}
//                     label="Joining Fee Amount:"
//                     value={`₹${data?.joiningFeeAmount}`}
//                   />
//                   <DetailRow
//                     icon={<Timer className="h-4 w-4" />}
//                     label="Payment Time:"
//                     value={data.joiningFeeAmountTime}
//                   />
//                   <DetailRow
//                     icon={<BookUser className="h-4 w-4" />}
//                     label="Reason:"
//                     value={data.joiningFeeReason}
//                   />
//                   <DetailRow
//                     icon={<BookUser className="h-4 w-4" />}
//                     label="Details:"
//                     value={data.joiningFeeReasonDetail}
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Job Role */}
//             <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
//               <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-blue-100">
//                 <h3 className="text-xl font-bold text-blue-900 flex items-center gap-3">
//                   <Briefcase className="w-6 h-6 text-blue-600" />
//                   Job Role
//                 </h3>
//               </div>
//               <div className="space-y-0">
//                 <DetailRow
//                   icon={<MapPin className="h-4 w-4" />}
//                   label="Work location:"
//                   value={data?.location}
//                 />
//                 <DetailRow
//                   icon={<Briefcase className="h-4 w-4" />}
//                   label="Department:"
//                   value={data?.jobTitle}
//                 />
//                 <DetailRow
//                   icon={<BookUser className="h-4 w-4" />}
//                   label="Role:"
//                   value={data?.jobRoles}
//                 />
//                 <DetailRow
//                   icon={<Timer className="h-4 w-4" />}
//                   label="Employment type:"
//                   value={data?.jobType}
//                 />
//                 <DetailRow
//                   icon={<SunMoon className="h-4 w-4" />}
//                   label="Shift:"
//                   value={data?.nightShift}
//                 />
//               </div>
//             </div>

//             {/* WalkIn Details */}
//             {data?.walkIn && (
//               <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
//                 <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 border-b border-green-100">
//                   <h3 className="text-xl font-bold text-green-900 flex items-center gap-3">
//                     <MapPin className="w-6 h-6 text-green-600" />
//                     WalkIn Details
//                   </h3>
//                 </div>
//                 <div className="space-y-0">
//                   <DetailRow
//                     icon={<MapPin className="h-4 w-4" />}
//                     label="WalkIn Address:"
//                     value={data.walkInAddress}
//                   />
//                   <DetailRow
//                     icon={<CalendarArrowUp className="h-4 w-4" />}
//                     label="End Date:"
//                     value={data.WalkInEndDate}
//                   />
//                   <DetailRow
//                     icon={<Timer className="h-4 w-4" />}
//                     label="Start Time:"
//                     value={data.walkInStartTime}
//                   />
//                   <DetailRow
//                     icon={<BookUser className="h-4 w-4" />}
//                     label="Instructions:"
//                     value={data.walkInInstruction}
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Contact Details */}
//             {data?.otherRecruiterName && (
//               <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
//                 <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-4 border-b border-purple-100">
//                   <h3 className="text-xl font-bold text-purple-900 flex items-center gap-3">
//                     <Phone className="w-6 h-6 text-purple-600" />
//                     Contact
//                   </h3>
//                 </div>
//                 <div className="space-y-0">
//                   <DetailRow
//                     icon={<Users className="h-4 w-4" />}
//                     label="Recruiter Name:"
//                     value={data.otherRecruiterName}
//                   />
//                   <DetailRow
//                     icon={<Phone className="h-4 w-4" />}
//                     label="Phone Number:"
//                     value={data.otherRecruiterNumber}
//                   />
//                   <DetailRow
//                     icon={<Mail className="h-4 w-4" />}
//                     label="Email:"
//                     value={data.otherRecruiterEmail}
//                   />
//                   <DetailRow
//                     icon={<Users className="h-4 w-4" />}
//                     label="Candidate Type:"
//                     value={data.candidateType}
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Job Description */}
//             <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
//               <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4 border-b border-indigo-100">
//                 <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-3">
//                   <BookUser className="w-6 h-6 text-indigo-600" />
//                   Job Description
//                 </h3>
//               </div>
//               <div className="p-6">
//                 <div
//                   className={`text-gray-700 leading-relaxed prose prose-gray max-w-none ${
//                     !showFullDescription ? "line-clamp-4" : ""
//                   }`}
//                 >
//                   {data?.description}
//                 </div>
//                 <button
//                   onClick={() => setShowFullDescription(!showFullDescription)}
//                   className="text-blue-600 hover:text-blue-700 font-medium text-sm mt-4 transition-colors duration-200 hover:underline"
//                 >
//                   {showFullDescription ? "Show Less" : "Show More"}
//                 </button>
//               </div>
//             </div>

//             {/* Job Requirements */}
//             <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
//               <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4 border-b border-orange-100">
//                 <h3 className="text-xl font-bold text-orange-900 flex items-center gap-3">
//                   <GraduationCap className="w-6 h-6 text-orange-600" />
//                   Job Requirements
//                 </h3>
//               </div>
//               <div className="space-y-0">
//                 <DetailRow
//                   icon={<Timer className="h-4 w-4" />}
//                   label="Experience:"
//                   value={data?.experience}
//                 />
//                 <DetailRow
//                   icon={<GraduationCap className="h-4 w-4" />}
//                   label="Education:"
//                   value={data?.education}
//                 />
//                 <DetailRow
//                   icon={<Briefcase className="h-4 w-4" />}
//                   label="Past Role:"
//                   value={data?.jobTitle}
//                 />
//                 <DetailRow
//                   icon={<Users className="h-4 w-4" />}
//                   label="Gender:"
//                   value={data?.gender}
//                 />
//                 <DetailRow
//                   icon={<BookUser className="h-4 w-4" />}
//                   label="English Level:"
//                   value={data?.english}
//                 />
//               </div>
//             </div>

//             {/* About Company */}
//             <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
//               <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 py-4 border-b border-emerald-100">
//                 <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-3">
//                   <Building className="w-6 h-6 text-emerald-600" />
//                   About Company
//                 </h3>
//               </div>
//               {data?.Employer?.company?.companyName ? (
//                 <div className="p-6 space-y-4">
//                   <div>
//                     <h4 className="text-xl font-bold text-gray-900 mb-2">
//                       {data?.Employer.company.companyName}
//                     </h4>
//                     <div className="flex items-center gap-2 text-gray-600 mb-4">
//                       <MapPin className="w-4 h-4" />
//                       <span>{data?.Employer.company.location}</span>
//                     </div>
//                     <p className="text-gray-700 leading-relaxed">
//                       {data?.Employer.company.about}
//                     </p>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="p-6">
//                   <p className="text-gray-500 italic text-center py-8">
//                     No company information provided.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Applied Modal */}
//       {showAppliedModal && (
//         <AppliedModal onClose={() => setShowAppliedModal(false)} />
//       )}
//     </div>
//   );
// };

// export default JobDetails;


import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
// import AppliedModal from "../modals/jobsModal/AppliedModal";
// import { applyJobs, getJobs } from "../../API/ApiFunctions";
import "react-quill-new/dist/quill.snow.css";
import {
  BookUser,
  Briefcase,
  Building,
  CalendarArrowUp,
  CircleGauge,
  GraduationCap,
  IndianRupee,
  MapPin,
  SunMoon,
  Timer,
  Users,
  Share,
  X,
  CheckCircle,
  Phone,
  Mail,
  AlertTriangle,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../Redux/getData";

const faqData = [
  {
    question:
      "How much salary can I expect as a Computer Hardware Technician in Arvind Solution in Delhi-NCR?",
    answer:
      "You can expect a salary as per industry standards based on your experience and skillset. The job posting mentions a fixed salary of ₹10,000 to ₹15,000 per month.",
  },
  {
    question:
      "What is the eligibility criteria to apply for Computer Hardware Technician in Arvind Solution in Delhi-NCR?",
    answer:
      "You should have relevant experience or educational qualifications in Computer Hardware or related fields. Basic troubleshooting knowledge is preferred.",
  },
  {
    question: "Is there any specific skill required for this job?",
    answer:
      "Yes, basic knowledge of computer hardware troubleshooting, assembling, and networking is required.",
  },
  {
    question: "Who can apply for this job?",
    answer:
      "Anyone with the required skills and availability in the specified location can apply.",
  },
  {
    question: "Is it a work from home job?",
    answer: "No, this is an on-site job and not work-from-home.",
  },
  {
    question:
      "Are there any charges or deposits required while applying for the role or while joining?",
    answer:
      "No, there are no charges or deposits required to apply for or join this job.",
  },
  {
    question: "How can I apply for this job?",
    answer:
      "You can apply by clicking on the 'Apply' button provided in this page. Make sure you are logged in to your account.",
  },
  {
    question: "What is the last date to apply?",
    answer:
      "The last date is not specified, but it's recommended to apply as soon as possible due to urgent hiring.",
  },
];

// Mock data - replace with your actual data source
// const mockJobData = {
//   id: "1",
//   jobTitle: "Computer Hardware Technician",
//   companyName: "Arvind Solution",
//   location: "Delhi-NCR",
//   minimumSalary: "10000",
//   maximumSalary: "15000",
//   incentive: "5000",
//   workLocationType: "On-site",
//   jobType: "Full-time",
//   experience: "1-2 years",
//   payType: "Monthly",
//   english: "Basic",
//   walkIn: true,
//   walkInAddress: "Sector 62, Noida",
//   WalkInEndDate: "2024-01-31",
//   walkInStartTime: "10:00 AM",
//   walkInInstruction: "Bring original documents and one copy each",
//   joiningFee: true,
//   joiningFeeAmount: "2000",
//   joiningFeeAmountTime: "Before joining",
//   joiningFeeReason: "Training",
//   joiningFeeReasonDetail: "Initial training and certification costs",
//   jobRoles: "Hardware troubleshooting and maintenance",
//   nightShift: "Day shift",
//   otherRecruiterName: "Rakesh Kumar",
//   otherRecruiterNumber: "+91 9876543210",
//   otherRecruiterEmail: "rakesh@arvindsolution.com",
//   candidateType: "Fresher/Experienced",
//   education: "12th Pass or ITI",
//   gender: "Any",
//   employerId: "emp1",
//   description:
//     "We are looking for a skilled Computer Hardware Technician to join our team. The candidate will be responsible for assembling, maintaining, and repairing computer hardware components. You will diagnose hardware problems, install new hardware, and provide technical support to our clients. This role requires hands-on experience with computer systems, troubleshooting skills, and the ability to work independently.",
//   JobApplications: [
//     {
//       id: "app1",
//       employeeId: "emp123",
//       status: "Under Review",
//     },
//   ],
//   Employer: {
//     company: {
//       companyName: "Arvind Solution",
//       location: "New Delhi, India",
//       about:
//         "Arvind Solution is a leading technology services company specializing in computer hardware solutions, networking, and IT support. We have been serving businesses across Delhi-NCR for over 10 years with reliable and professional services.",
//     },
//   },
// };

// Mock Applied Modal Component
const AppliedModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="text-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: "#dff3f9" }}
        >
          <CheckCircle className="w-6 h-6" style={{ color: "#0784C9" }} />
        </div>

        <h3 className="text-xl font-bold mb-3" style={{ color: "#003B70" }}>
          Application Submitted!
        </h3>

        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
          Your application has been submitted successfully. The employer will
          review your application and get back to you soon.
        </p>

        <div
          className="rounded-lg p-4 mb-6 text-left border"
          style={{ backgroundColor: "#dff3f9", borderColor: "#0784C9" }}
        >
          <h4 className="font-semibold mb-3" style={{ color: "#003B70" }}>
            What happens next?
          </h4>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#0784C9" }}
              ></div>
              <span>Employer reviews within 2-3 business days</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#0784C9" }}
              ></div>
              <span>You'll receive updates via email and SMS</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#0784C9" }}
              ></div>
              
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          style={{ backgroundColor: "#0784C9" }}
        >
          Continue Browsing
        </button>
      </div>
    </div>
  </div>
);

// Mock functions - replace with your actual API functions
const showErrorToast = (message) => {
  alert(`Error: ${message}`);
};

const applyJobs = async (id, employerId) => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    data: {
      application: {
        id: "new-app",
        status: "Applied",
      },
    },
  };
};



const JobDetails = () => {
  const [data, setData] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showAppliedModal, setShowAppliedModal] = useState(false);
  const [applied, setApplied] = useState(false);
  const [appliedData, setAppliedData] = useState(null);
  const dispatch = useDispatch()


  // Mock user data - replace with your actual user context
 const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("User"));



  useEffect(()=>{
    dispatch(fetchJobs());
  },[dispatch])

  const {jobs, loading, error} = useSelector((state)=> state.getDataReducer);

   
  useEffect(() => {

    const newjobs = jobs?.filter((job) => job.id == id);
    setData(newjobs?.[0]);
  }, [jobs]);


  useEffect(() => {
    if (data) {
      const alreadyApplied = data?.JobApplications.filter(
        (ids) => ids.employeeId === user?.id,
      );

      if (alreadyApplied?.length > 0) {
        setApplied(true);
        setAppliedData(alreadyApplied[0]);
      } else {
        setApplied(false);
      }
    }
  }, [data, user?.id]);

  const handleApplyClick = async () => {
    setApplied(true);
    try {
      const response = await applyJobs(id, data?.employerId);
      if (response) {
        setShowAppliedModal(true);
        setAppliedData(response.data.application);
      }
    } catch (error) {
      showErrorToast("could not apply");
      setApplied(false);
    }
  };

  const DetailRow = ({ icon, label, value }) => (
    <div className="flex items-center justify-between py-3 px-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
      <div className="flex items-center gap-3">
        <div
          className="p-2 rounded-lg"
          style={{ backgroundColor: "#dff3f9", color: "#0784C9" }}
        >
          {icon}
        </div>
        <span className="text-gray-700 font-medium text-sm">{label}</span>
      </div>
      <div
        className="font-semibold text-sm max-w-[200px] text-right"
        style={{ color: "#003B70" }}
      >
        {value}
      </div>
    </div>
  );

  const LoadingSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );

  if (loading) {
    return (
      // <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      //   <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-4">
      //     <div className="text-center">
      //       <div
      //         className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
      //         style={{ backgroundColor: "#dff3f9" }}
      //       >
      //         <div
      //           className="w-6 h-6 border-4 border-t-transparent rounded-full animate-spin"
      //           style={{ borderColor: "#0784C9" }}
      //         ></div>
      //       </div>
      //       <h3 className="text-lg font-semibold text-gray-900 mb-2">
      //         Loading Job Details
      //       </h3>
      //       <p className="text-gray-600 text-sm">
      //         Please wait while we fetch the latest information...
      //       </p>
      //     </div>
      //   </div>
      // </div>
      <div className="flex justify-center items-center w-full min-h-[80vh] bg-black/20">
        <img
          src="/unigrowLogo.png"
          alt="logo"
          className="w-40 h-16 animate-heartbeat"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Compact Header Section */}
          <div
            className="text-white relative overflow-hidden"
            style={{ backgroundColor: "#0784C9" }}
          >
            <div className="relative p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Job Title & Company - Compact */}
                <div className="flex-1">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-3 border"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium">Urgently Hiring</span>
                  </div>

                  <h1 className="text-2xl lg:text-3xl font-bold mb-2 leading-tight">
                    {data?.jobTitle}
                  </h1>

                  <div className="flex items-center gap-2 text-blue-100 mb-2">
                    <Building className="w-5 h-5" />
                    <span className="text-lg font-semibold">
                      {data?.companyName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-blue-100">
                    <MapPin className="w-4 h-4" />
                    <span>{data?.location}</span>
                  </div>
                </div>

                {/* Compact Stats */}
                <div className="grid grid-cols-2 gap-3 lg:w-64">
                  <div
                    className="rounded-lg p-3 text-center border"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-medium">Applicants</span>
                    </div>
                    <div className="text-lg font-bold">
                      {data?.JobApplications.length}
                    </div>
                  </div>

                  <div
                    className="rounded-lg p-3 text-center border"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <IndianRupee className="w-4 h-4" />
                      <span className="text-xs font-medium">Salary</span>
                    </div>
                    <div className="text-sm font-bold">
                      ₹{data?.minimumSalary} - ₹{data?.maximumSalary}
                    </div>
                  </div>

                  {data?.incentive && (
                    <div
                      className="rounded-lg p-3 text-center border col-span-2"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <CircleGauge className="w-4 h-4" />
                        <span className="text-xs font-medium">
                          Earning Potential
                        </span>
                      </div>
                      <div className="text-lg font-bold">
                        ₹{data?.maximumSalary}+ {data?.incentive}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Job Type Tags */}
          <div
            className="px-6 py-4 border-b border-gray-100"
            style={{ backgroundColor: "#dff3f9" }}
          >
            <div className="flex flex-wrap gap-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "white",
                  color: "#003B70",
                  borderColor: "#0784C9",
                }}
              >
                {data?.workLocationType}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "white",
                  color: "#003B70",
                  borderColor: "#0784C9",
                }}
              >
                {data?.jobType}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "white",
                  color: "#003B70",
                  borderColor: "#0784C9",
                }}
              >
                {data?.experience}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "white",
                  color: "#003B70",
                  borderColor: "#0784C9",
                }}
              >
                {data?.payType}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs font-medium border"
                style={{
                  backgroundColor: "white",
                  color: "#003B70",
                  borderColor: "#0784C9",
                }}
              >
                {data?.english} English
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 py-4 bg-white border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 sm:flex-none bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                <div className="flex items-center justify-center gap-2">
                  <Share className="w-4 h-4" />
                  Share
                </div>
              </button>
              <button
                onClick={handleApplyClick}
                disabled={applied}
                className={`flex-1 sm:flex-none font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-white`}
                style={{
                  backgroundColor: applied ? "#22c55e" : "#0784C9",
                }}
              >
                {applied ? (
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {appliedData?.status ? appliedData.status : "Applied"}
                  </div>
                ) : (
                  "Apply Now"
                )}
              </button>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-6 space-y-6">
            {/* Urgent Hiring Badge */}
            {data && (
              <div
                className="border rounded-lg p-4"
                style={{ backgroundColor: "#dff3f9", borderColor: "#0784C9" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "white" }}
                  >
                    <AlertTriangle
                      className="w-4 h-4"
                      style={{ color: "#0784C9" }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2" style={{ color: "#003B70" }}>
                      Urgently hiring
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      {data.walkIn && (
                        <div
                          className="flex items-center gap-2 px-3 py-2 rounded-lg"
                          style={{ backgroundColor: "white", color: "#003B70" }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "#0784C9" }}
                          ></div>
                          <span className="font-medium">Walk In Available</span>
                        </div>
                      )}
                      <div
                        className="flex items-center gap-2 px-3 py-2 rounded-lg"
                        style={{ backgroundColor: "white", color: "#003B70" }}
                      >
                        <Users
                          className="w-4 h-4"
                          style={{ color: "#0784C9" }}
                        />
                        <span>
                          {data?.JobApplications.length} applicants so far
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Joining Fee Section */}
            {data?.joiningFee && (
              <div className="border border-yellow-300 rounded-lg overflow-hidden bg-yellow-50">
                <div
                  className="px-4 py-3 border-b border-yellow-200"
                  style={{ backgroundColor: "#fff3cd" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-200 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-yellow-700" />
                    </div>
                    <h3 className="text-lg font-bold text-yellow-800">
                      Pay For Job
                    </h3>
                  </div>
                </div>
                <div className="bg-white space-y-0">
                  <DetailRow
                    icon={<IndianRupee className="h-4 w-4" />}
                    label="Joining Fee Amount:"
                    value={`₹${data?.joiningFeeAmount}`}
                  />
                  <DetailRow
                    icon={<Timer className="h-4 w-4" />}
                    label="Payment Time:"
                    value={data.joiningFeeAmountTime}
                  />
                  <DetailRow
                    icon={<BookUser className="h-4 w-4" />}
                    label="Reason:"
                    value={data.joiningFeeReason}
                  />
                  <DetailRow
                    icon={<BookUser className="h-4 w-4" />}
                    label="Details:"
                    value={data.joiningFeeReasonDetail}
                  />
                </div>
              </div>
            )}

            {/* Job Role */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div
                className="px-4 py-3 border-b border-gray-200"
                style={{ backgroundColor: "#dff3f9" }}
              >
                <h3
                  className="text-lg font-bold flex items-center gap-3"
                  style={{ color: "#003B70" }}
                >
                  <Briefcase className="w-5 h-5" style={{ color: "#0784C9" }} />
                  Job Role
                </h3>
              </div>
              <div className="space-y-0">
                <DetailRow
                  icon={<MapPin className="h-4 w-4" />}
                  label="Work location:"
                  value={data?.location}
                />
                <DetailRow
                  icon={<Briefcase className="h-4 w-4" />}
                  label="Department:"
                  value={data?.jobTitle}
                />
                <DetailRow
                  icon={<BookUser className="h-4 w-4" />}
                  label="Role:"
                  value={data?.jobRoles}
                />
                <DetailRow
                  icon={<Timer className="h-4 w-4" />}
                  label="Employment type:"
                  value={data?.jobType}
                />
                <DetailRow
                  icon={<SunMoon className="h-4 w-4" />}
                  label="Shift:"
                  value={data?.nightShift}
                />
              </div>
            </div>

            {/* WalkIn Details */}
            {data?.walkIn && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div
                  className="px-4 py-3 border-b border-gray-200"
                  style={{ backgroundColor: "#dff3f9" }}
                >
                  <h3
                    className="text-lg font-bold flex items-center gap-3"
                    style={{ color: "#003B70" }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: "#0784C9" }} />
                    WalkIn Details
                  </h3>
                </div>
                <div className="space-y-0">
                  <DetailRow
                    icon={<MapPin className="h-4 w-4" />}
                    label="WalkIn Address:"
                    value={data.walkInAddress}
                  />
                  <DetailRow
                    icon={<CalendarArrowUp className="h-4 w-4" />}
                    label="End Date:"
                    value={data.WalkInEndDate}
                  />
                  <DetailRow
                    icon={<Timer className="h-4 w-4" />}
                    label="Start Time:"
                    value={data.walkInStartTime}
                  />
                  <DetailRow
                    icon={<BookUser className="h-4 w-4" />}
                    label="Instructions:"
                    value={data.walkInInstruction}
                  />
                </div>
              </div>
            )}

            {/* Contact Details */}
            {data?.otherRecruiterName && (
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div
                  className="px-4 py-3 border-b border-gray-200"
                  style={{ backgroundColor: "#dff3f9" }}
                >
                  <h3
                    className="text-lg font-bold flex items-center gap-3"
                    style={{ color: "#003B70" }}
                  >
                    <Phone className="w-5 h-5" style={{ color: "#0784C9" }} />
                    Contact
                  </h3>
                </div>
                <div className="space-y-0">
                  <DetailRow
                    icon={<Users className="h-4 w-4" />}
                    label="Recruiter Name:"
                    value={data.otherRecruiterName}
                  />
                  <DetailRow
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone Number:"
                    value={data.otherRecruiterNumber}
                  />
                  <DetailRow
                    icon={<Mail className="h-4 w-4" />}
                    label="Email:"
                    value={data.otherRecruiterEmail}
                  />
                  <DetailRow
                    icon={<Users className="h-4 w-4" />}
                    label="Candidate Type:"
                    value={data.candidateType}
                  />
                </div>
              </div>
            )}

            {/* Job Description */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div
                className="px-4 py-3 border-b border-gray-200"
                style={{ backgroundColor: "#dff3f9" }}
              >
                <h3
                  className="text-lg font-bold flex items-center gap-3"
                  style={{ color: "#003B70" }}
                >
                  <BookUser className="w-5 h-5" style={{ color: "#0784C9" }} />
                  Job Description
                </h3>
              </div>
              <div className="p-4">
                <div
                  className={`text-gray-700 leading-relaxed ${
                    !showFullDescription ? "line-clamp-4" : ""
                  }`}
                >
                  {data?.description}
                </div>
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="font-medium text-sm mt-3 transition-colors duration-200 hover:underline"
                  style={{ color: "#0784C9" }}
                >
                  {showFullDescription ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>

            {/* Job Requirements */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div
                className="px-4 py-3 border-b border-gray-200"
                style={{ backgroundColor: "#dff3f9" }}
              >
                <h3
                  className="text-lg font-bold flex items-center gap-3"
                  style={{ color: "#003B70" }}
                >
                  <GraduationCap
                    className="w-5 h-5"
                    style={{ color: "#0784C9" }}
                  />
                  Job Requirements
                </h3>
              </div>
              <div className="space-y-0">
                <DetailRow
                  icon={<Timer className="h-4 w-4" />}
                  label="Experience:"
                  value={data?.experience}
                />
                <DetailRow
                  icon={<GraduationCap className="h-4 w-4" />}
                  label="Education:"
                  value={data?.education}
                />
                <DetailRow
                  icon={<Briefcase className="h-4 w-4" />}
                  label="Past Role:"
                  value={data?.jobTitle}
                />
                <DetailRow
                  icon={<Users className="h-4 w-4" />}
                  label="Gender:"
                  value={data?.gender}
                />
                <DetailRow
                  icon={<BookUser className="h-4 w-4" />}
                  label="English Level:"
                  value={data?.english}
                />
              </div>
            </div>

            {/* About Company */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div
                className="px-4 py-3 border-b border-gray-200"
                style={{ backgroundColor: "#dff3f9" }}
              >
                <h3
                  className="text-lg font-bold flex items-center gap-3"
                  style={{ color: "#003B70" }}
                >
                  <Building className="w-5 h-5" style={{ color: "#0784C9" }} />
                  About Company
                </h3>
              </div>
              {data?.Employer?.company?.companyName ? (
                <div className="p-4 space-y-3">
                  <div>
                    <h4
                      className="text-lg font-bold mb-2"
                      style={{ color: "#003B70" }}
                    >
                      {data?.Employer.company.companyName}
                    </h4>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <MapPin
                        className="w-4 h-4"
                        style={{ color: "#0784C9" }}
                      />
                      <span>{data?.Employer.company.location}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {data?.Employer.company.about}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="p-4">
                  <p className="text-gray-500 italic text-center py-6 text-sm">
                    No company information provided.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Applied Modal */}
      {showAppliedModal && (
        <AppliedModal onClose={() => setShowAppliedModal(false)} />
      )}
    </div>
  );
};

export default JobDetails;
