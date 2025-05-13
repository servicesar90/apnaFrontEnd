import React, { use, useEffect, useState } from "react";
import { Building2, Pencil, Plus, GraduationCap, PencilIcon } from "lucide-react";
import UpdateProfileModal from "../modals/profileUpdateModals/updateProfileModal";
import { createEducation, editEducation, updateSkils } from "../../API/ApiFunctions";
import EditExperienceModal from "../modals/profileUpdateModals/experienceModal";
import { Mail, Phone, MapPin, Calendar, Briefcase, Timer } from 'lucide-react';
import QuickLinks from "./Quicklinks";
import { useOutletContext } from "react-router-dom";
import UserForm from "../modals/profileUpdateModals/resumeUpload";
import { uploadProfileApi, uploadResumeApi } from "../../API/APIs";




const ProfileOverviewCard = () => {
    const [modalName, setModalName] = useState(null);
    const [experienceIndex, setExperienceIndex] = useState(null);
    const [selectedEducation, setSelectedEducation] = useState(null);


    const handleEditEducation = (edu) => {
        setSelectedEducation(edu);
        setModalName("education");
    };


    const user = JSON.parse(localStorage.getItem("User"));

    const { employee } = useOutletContext();


    return (
        <>
            {/* <div className="w-full p-6 bg-red-500 flex justify-center flex-row gap-10"> */}
            <div className="flex flex-col w-full max-w-4xl mx-auto p-4 space-y-4 bg-white rounded-xl shadow-md">
                {/* Profile Header */}
                <div className="flex items-center gap-4">
                    {/* Profile Image */}
                    <div onClick={() => setModalName("editImage")} className="relative w-20 h-20">
                        <img
                            src={employee?.profileImage || "/user.png"}
                            alt="avatar"
                            className="rounded-full w-20 h-20 object-cover"
                        />
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                            100%
                        </span>
                    </div>

                    {/* Profile Info */}
                    <div className="flex flex-col  ">
                        <div className="flex-1 ">
                            <h2 className="text-lg font-semibold">{employee?.fullName}</h2>
                            <p className="text-sm text-gray-600">
                                {employee?.EmployeeExperiences[0]?.jobTitle}
                            </p>
                            <p className="text-sm text-gray-500">
                                at  {employee?.EmployeeExperiences[0]?.companyName}
                            </p>
                        </div>


                        {/* Last Updated */}
                        <div className="text-xs text-gray-400   hidden lg:block">
                            Profile last updated · {employee?.lastUpdated || "N/A"}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr />

                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-500" />
                        <span>{employee?.currentLocation || "Location unavailable"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-red-700" />
                        <span>{user?.phone || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-green-700" />
                        <span>{employee?.EmployeeExperiences[0]?.experience || "Experience not provided"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-yellow-500" />
                        <span>{employee?.email || "No email"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/takeover.png" alt="Rupee" className="w-4 h-4" />
                        <span>{employee?.EmployeeExperiences[0]?.currentSalary ? `₹ ${employee.EmployeeExperiences[0].currentSalary}` : "Salary not shared"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Timer className="w-4 h-4 text-red-400" />
                        <span>{employee?.noticePeriod || "No notice period info"}</span>
                    </div>
                </div>
            </div>





            <div>
                <div className="flex flex-col lg:flex-row w-full">
                    {/* Left side - Quick Links */}
                    <div className="w-full hidden sm:block lg:w-1/3">
                        {/* Quick Links content */}
                    </div>

                    {/* Right side - Your div */}
                    <div className="flex flex-col w-full lg:w-2/3 justify-start">
                        {/* Your right-side content */}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 w-full">
                    {/* Left: Quick Links */}
                    <div className="w-full lg:w-1/3">
                        <QuickLinks />
                    </div>


                    <div className="flex flex-col w-full lg:w-2/3 mt-10  justify-start right-6 pr-6">




                        <div className="flex items-center mr-4 justify-between">
                            <h2 className="text-lg  px-8 mt-10  bg-white font-semibold text-gray-800">Work Experience</h2>
                            <button onClick={() => {
                                setModalName("editExperience")
                                setExperienceIndex(null);
                            }} className="text-green-600 text-sm font-medium hover:underline">
                                + Add
                            </button>
                        </div>


                        <div className="bg-white mt-4 rounded-xl  p-4  shadow-md w-full space-y-4">
                            {/* Header */}


                            {/* Work Experience Item 1 */}
                            {employee?.EmployeeExperiences.map((experienc, index) => (
                                <div key={index} className="border rounded-lg p-4 space-y-2 relative">
                                    <button onClick={() => {
                                        setModalName("editExperience")
                                        setExperienceIndex(index)
                                    }} className="absolute top-2 right-2 text-gray-500 hover:text-green-600">
                                        <Pencil size={16} />
                                    </button>
                                    <div className="flex items-center gap-2">
                                        <Building2 className="text-gray-500" size={18} />
                                        <h3 className="text-md font-semibold text-gray-800">{experienc.jobTitle}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600">{experienc.companyName}</p>
                                    <div className="text-sm text-gray-500 space-y-0.5">
                                        <p>
                                            <span className="font-medium">JobRoles:</span> {experienc.jobRole}
                                        </p>
                                        <p>
                                            <span className="font-medium">Industry:</span> {experienc.industry}
                                        </p>
                                    </div>
                                    <div className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                                        Creating project for the company
                                    </div>
                                    <div className="text-sm text-gray-700">
                                        <span className="font-medium">Skills:</span> {experienc.skillsUsed?.map((skill, index) => (<p key={index}>{skill}</p>))}
                                    </div>
                                    <div className="flex gap-2 text-xs text-gray-600 pt-1">
                                        <span className="bg-gray-200 px-2 py-0.5 rounded-full">{experienc.startDate}- {employee?.
                                            EmployeeExperiences[0].endDate ? <span>{employee?.
                                                EmployeeExperiences[0].endDate}</span> : <span>present</span>}</span>
                                        <span className="bg-gray-200 px-2 py-0.5 rounded-full">{experienc.employementType}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                            <div onClick={() => setModalName("yearExperience")} className="flex justify-between items-center text-sm text-gray-700">
                                <p className="font-medium">Total Years of experience:</p>
                                <p className="text-gray-800">{employee?.years} years and {employee?.months} months</p>
                            </div>

                        </div>

                        <div className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                            <div onClick={() => setModalName("salary")} className="flex justify-between items-center text-sm text-gray-700">
                                <p className="font-medium">Current monthly salary:</p>
                                <p className="text-gray-800"> {employee?.EmployeeExperiences[0].currentSalary}</p>
                            </div>

                        </div>

                        <div className="flex mt-6 items-center justify-between">
                            <h2 className="text-lg px-4  font-semibold text-gray-800">Education</h2>
                            <button
                                className="text-green-600 text-sm font-medium hover:underline flex items-center gap-1"
                                onClick={() => setModalName("education")}
                            >
                                <Plus size={14} /> Add
                            </button>
                        </div>
                        {employee?.EmployeeEducations.length > 0 ?
                            <div className="bg-white rounded-xl mt-1 p-4 shadow-md space-y-4 w-full">
                                {/* Education Section */}


                                <div className="space-y-3 pt-2">
                                    {/* Education Cards */}
                                    {employee?.EmployeeEducations?.map((edu, idx) => (
                                        <div key={idx} className="relative border rounded-xl p-4 bg-gray-50 flex gap-4">
                                            {/* Timeline dot */}
                                            <div className="flex flex-col items-center">
                                                <GraduationCap className="text-gray-600 mt-1" size={20} />
                                                <div className="h-full border-l border-dotted border-gray-400 mt-1" />
                                            </div>


                                            {/* Card Content */}
                                            <div className="flex-1 space-y-1">
                                                <h3 className="text-sm font-semibold text-gray-800">
                                                    {edu.degree} {edu.specialization}
                                                </h3>
                                                <p className="text-sm text-gray-600">
                                                    {edu.instituteName} -- {edu.qualification}
                                                </p>
                                                <div className="flex gap-2 pt-1">
                                                    <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
                                                        Batch {edu.startDate} - {edu.endDate}
                                                    </span>
                                                    <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
                                                        {edu.studyMode==="f"? <p>Full-Time</p>: <span>{edu.studyMode==="p"?<p>Part Time</p>:<p>Correspondence</p>}</span>}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Edit icon */}
                                            <button
                                                onClick={() => handleEditEducation(edu)}
                                                className="absolute top-2 right-2 text-gray-500 hover:text-green-600"
                                            >
                                                <Pencil size={16} />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            :
                            <h1
                                onClick={() => setModalName("education")}
                                className="bg-white text-black shadow-md p-4 cursor-pointer hover:bg-gray-100"
                            >
                                No Education added
                            </h1>

                        }
                    </div>
                </div>

                <div className=" w-full sm:w-2/3 ml-auto pr-3 sm:pr-6">
                    <div className="bg-white p-2 rounded-xl flex-col shadow-sm mt-4">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold ml-4">Skills</h3>
                            <button
                                onClick={() => setModalName("skills")}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <Pencil size={18} />
                            </button>
                        </div>

                        {/* Skill Tags */}
                        <div className="flex flex-wrap flex-row  gap-2">
                         
                            {employee?.skills ? (
                               JSON.parse(employee.skills).map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 rounded-full w-auto bg-gray-100 text-sm text-gray-700 border border-gray-300"
                                    >
                                        {skill}
                                    </span>
                                ))
                            ) : (
                                <p className="text-sm px-8 text-gray-400 italic">No skills listed yet.</p>
                            )}
                        </div>

                        {/* Footer Note */}
                        <p className="text-sm text-gray-500 mt-4 flex items-center gap-1">

                        </p>
                    </div>



                    <div className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                        <div onClick={() => setModalName("certification")} className="flex justify-between items-center text-sm bg-gray-50 px-4 py-2 rounded-lg">
                            <p className="text-gray-700">Certification</p>
                            <p className="text-gray-400 italic">+ Add</p>
                        </div>

                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm mt-4">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Language Known</h3>
                            <button onClick={() => setModalName("languageKnown")} className="text-gray-500 hover:text-gray-700">
                                <Pencil size={18} />
                            </button>
                        </div>

                        {/* Skill Tags */}
                        <div className="flex flex-wrap gap-2">

                            <span
                                className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 border border-gray-300"
                            >
                                English <span className="text-green-600">{employee?.englishLevel}</span>
                            </span>
                            {employee?.otherLanguages &&
                                Array.isArray(JSON.parse(employee.otherLanguages)) &&
                                JSON.parse(employee.otherLanguages).map((language, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 border border-gray-300"
                                    >
                                        {language}
                                    </span>
                                ))}

                        </div>


                    </div>


                    <section id="resume" className="px-7 pt-6 pb-10 mr-3 w-full text-lg bg-white rounded-3xl max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                        <div className="flex flex-wrap gap-5 justify-between font-medium text-black max-md:max-w-full">
                            <div className="flex flex-col w-full">
                                <div className="w-full flex flex-row justify-between">
                                    <h2 className="self-start text-xl">Resume</h2>
                                    <PencilIcon onClick={()=>setModalName("editResume")} size={20} />
                                </div>

                                {employee?.resumeURL ?
                                    <div onClick={()=>window.open(employee?.resumeURL, '_blank')}>
                                        <p className="mt-7">{employee?.resumeURL.split("/").pop()}</p>
                                        <p className="mt-2 font-light text-gray-500 max-md:mr-2.5">
                                            Uploaded on {employee?.updatedAt.split("T")[0]}
                                        </p>
                                    </div> :
                                    <div className="flex flex-col justify-center items-center px-20 py-10 mt-6 rounded-2xl border border-gray-500 border-dashed">
                                        <div onClick={() => setModalName("editResume")} className="flex flex-col max-w-full w-[389px]">
                                            <button className="self-center px-5 py-2.5 max-w-full text-indigo-600 rounded-3xl border border-indigo-600 border-solid w-[20rem]">
                                                Update resume
                                            </button>
                                            <p className="mt-1.5 font-light text-gray-500">
                                                Supported Formats: doc, docx, rtf, pdf,upto 2 MB{" "}
                                            </p>
                                        </div>
                                    </div>
                                }


                            </div>

                        </div>

                    </section>

                    <div className="flex items-left flex-col justify-left">
                        <h2 className="text-lg px-8 font-semibold text-gray-800">Other details</h2>
                        <h2 className="text-lg font-semibold px-8 text-sm text-gray-500">Only Visible to HRs</h2>
                    </div>

                    <div className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                        <div onClick={() => setModalName("preferredJobs")} className="flex justify-center items-left flex-col text-sm bg-gray-50 px-4 py-2 rounded-lg">
                            <p className="text-gray-800 font-semibold text-lg">Preferred Job Title/Role</p>

                            <ul className="flex flex-row gap-6">
                                {employee?.preferredJobRoles?.map((role, index) => (
                                    <li key={index} className="text-lg font-semibold text-sm text-gray-500">{role}</li>
                                ))}
                            </ul>

                        </div>

                    </div>
                    <div className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                        <div onClick={() => setModalName("location")} className="flex justify-center items-left flex-col text-sm bg-gray-50 px-4 py-2 rounded-lg">
                            <p className="text-gray-800 font-semibold text-lg">Location</p>
                            <div className="flex flex-row gap-6">

                                <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.currentLocation}</h2>
                                <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.hometown}</h2>

                            </div>
                        </div>

                    </div>


                    <div onClick={() => setModalName("jobPreference")} className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                        <div className="flex justify-center items-left flex-col text-sm bg-gray-50 px-4 py-2 rounded-lg">
                            <p className="text-gray-800 font-semibold text-lg">Job Preference</p>

                            <div className="flex flex-row gap-6">
                                <ul className="flex flex-row gap-6">
                                    {employee?.preferredEmployementTypes?.map((role, index) => (
                                        <li key={index} className="text-lg font-semibold text-sm text-gray-500">{role}</li>
                                    ))}
                                </ul>

                                <ul className="flex flex-row gap-6">
                                    {employee?.preferredShifts &&
                                        Array.isArray(JSON.parse(employee.preferredShifts)) &&
                                        JSON.parse(employee.preferredShifts).map((role, index) => (
                                            <li key={index} className="text-lg font-semibold text-sm text-gray-500">{role}</li>
                                        ))}
                                </ul>

                                <ul className="flex flex-row gap-6">
                                    {employee?.preferredLocationTypes &&
                                        Array.isArray(JSON.parse(employee.preferredLocationTypes)) &&
                                        JSON.parse(employee.preferredLocationTypes).map((role, index) => (
                                            <li key={index} className="text-lg font-semibold text-sm text-gray-500">{role}</li>
                                        ))}
                                </ul>

                            </div>
                        </div>
                       
                    </div>

                      <div onClick={() => setModalName("basicDetails")} className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                            <div className="flex justify-center items-left flex-col text-sm bg-gray-50 px-4 py-2 rounded-lg">
                                <p className="text-gray-800 font-semibold text-lg">Basic Details</p>
                                <div className="flex flex-row gap-6 flex-wrap">

                                    <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.fullName}</h2>
                                    <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.email}</h2>
                                    <h2 className="text-lg font-semibold text-sm text-gray-500">{user?.phone}</h2>
                                    <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.gender}</h2>
                                    <h2 className=" font-semibold text-sm text-gray-500">{employee?.dob}</h2>
                                </div>
                            </div>

                        </div>

                </div>
            </div>

            {modalName === "editImage" && (
                <UserForm open={modalName === "editImage"} label={"Upload Profile Image"} onClose={() => setModalName("")} metaData={{ field: "profileImage", Api: uploadProfileApi, default: employee?.profileImage }} />

            )}

            {modalName === "editResume" && (

                <UserForm open={modalName === "editResume"} label={"Upload Resume"} onClose={() => setModalName("")} metaData={{ field: "resume", Api: uploadResumeApi, default: employee?.resumeURL }} />
            )}

            {modalName === "skills" && (
                <UpdateProfileModal
                    open={modalName === "skills"}
                    onClose={() => setModalName("")}
                    fields={{
                        skills: JSON.parse(employee?.skills) || [],
                    }}
                    label={{ skills: "Add Skills" }}

                    type={{
                        skills: "multi",
                    }}
                    suggestions={{
                        skills: [
                            "OOPS",
                            "Java2D",
                            "Content development",
                            "Next.js",
                            "Node",
                            "Advanced java",
                            "XPath",
                            "Content Design",
                            "XHTML",
                            "Object-Oriented Design",
                            "Front-end app development",
                            "Java",
                            "MongoDB",
                            "HTML/CSS",
                            "JavaScript",
                        ],
                    }}
                    metaData={{
                        title: "  Edit skills",
                        onSubmitFunc: updateSkils,
                        id: null
                    }
                    }
                />
            )}




            {modalName === "editExperience" && <EditExperienceModal Open={modalName === "editExperience"} close={() => setModalName("")} data={employee?.EmployeeExperiences[experienceIndex]} />}

            {modalName === "salary" && (
                <UpdateProfileModal
                    open={modalName === "salary"}
                    onClose={() => setModalName("")}
                    fields={{
                        currentSalary: employee?.currentSalary || "",
                    }}
                    label={{ currentSalary: "Enter your Current Salary" }}
                    type={{
                        currentSalary: "number",
                    }}
                    helperText={{
                        currentSalary:
                            "💡 Salary information is private, we use it only to show relevant jobs",
                    }}

                    metaData={{
                        title: "Edit Current Monthly Salary",
                        api: "somthing",
                    }
                    }
                />
            )}


            {modalName === "preferredJobs" && (
                <UpdateProfileModal
                    open={modalName === "preferredJobs"}
                    onClose={() => setModalName("")}
                    fields={{
                        preferredJobs: employee?.preferredJobRoles || [],
                    }}
                    label={{ preferredJobs: "Add Your Job Preference" }}
                    type={{
                        preferredJobs: "multiInput",
                    }}
                    suggestions={{
                        preferredJobs: [
                            "Software Backend Development",
                            "Website Development",
                            "DevOps",
                            "UI / UX Design",
                        ],
                    }}
                    limits={{
                        preferredJobs: 5,
                    }}
                    metaData={{
                        title: "preferredJobs",
                        api: "somthing",
                    }
                    }
                />
            )}


            {modalName === "location" && (
                <UpdateProfileModal
                    open={modalName === "location"}
                    onClose={() => setModalName("")}
                    fields={{
                        preferredJobCity: employee?.location?.preferredJobCity || [],
                        currentLocation: employee?.location?.currentLocation || "",
                        hometown: employee?.location?.hometown || "",
                    }}
                    label={{
                        preferredJobCity: "Add Your Prefered Job City",
                        currentLocation: "Enter Your Current Location",
                        hometown: "Enter Your HomeTown",
                    }}
                    type={{
                        preferredJobCity: "multiInput",
                        currentLocation: "text",
                        hometown: "text",
                    }}
                    suggestions={{}} // optional: you can provide city name suggestions if needed
                    limits={{ preferredJobCity: 3 }}
                    metaData={{
                        title: "location",
                        api: "somthing",
                    }
                    }// to enforce a max of 3 cities
                />
            )}


            {modalName === "languageKnown" && (
                <UpdateProfileModal
                    open={modalName === "languageKnown"}
                    onClose={() => setModalName("")}
                    fields={{
                        englishLevel: employee?.englishLevel || "",
                        language: employee?.otherLanguages || [],
                    }}
                    label={{
                        englishLevel: "What is your englsih speaking level",
                        language: "Select other language"
                    }}
                    type={{
                        englishLevel: "radio",
                        language: "checkbox",
                    }}
                    suggestions={{
                        englishLevel: [{ "Basic": "Basic" }, { "Intermediate": "Intermediate" }, { "Advanced": "Advanced" }],
                        language: ["Hindi", "Telugu", "Bengali"],
                    }}
                    metaData={{
                        title: "languageKnown",
                        api: "somthing",
                    }
                    }
                />
            )}


            {modalName === "jobPreference" && (
                <UpdateProfileModal
                    open={modalName === "jobPreference"}
                    onClose={() => setModalName("")}
                    fields={{
                        preferredEmployementType: employee?.preferredEmployementTypes || [],
                        preferredWorkplace: employee?.preferredLocationTypes || [],
                        preferredShifts: employee?.preferredShifts || [],
                    }}
                    label={{
                        preferredEmployementType: "Select Your Preferred employement type",
                        preferredWorkplace: "Select Your Preferred Work Place",
                        preferredShifts: "Select Your Preferred Work Shift",
                    }}
                    type={{
                        preferredEmployementType: "checkbox",
                        preferredWorkplace: "checkbox",
                        preferredShifts: "checkbox",
                    }}
                    suggestions={{
                        preferredEmployementType: ["Part Time", "Full Time", "Internships", "Contract"],
                        preferredWorkplace: ["Work from Office", "Work from Home", "Field Jobs"],
                        preferredShifts: ["Night Shift", "Day Shift"],
                    }}
                    metaData={{
                        title: "jobPreference",
                        api: "somthing",
                    }
                    }
                />
            )}

            {modalName === "furtherEducation" && (
                <UpdateProfileModal
                    open={modalName === "furtherEducation"}
                    onClose={() => setModalName("")}
                    fields={{
                        educationPreferences: employee?.educationPreferences || ""
                    }}
                    label={{
                        educationPreferences: "Select Your Education Preference"
                    }}
                    type={{
                        educationPreferences: "radio"  // or "select" if you want a dropdown
                    }}
                    suggestions={{
                        educationPreferences: [
                            { "Post Graduate Degree": "Post Graduate Degree" },
                            { "Certification / Courses": "Certification / Courses" },
                            { "Govt. Job Preparation": "Govt. Job Preparation" }
                        ]
                    }}

                    metaData={{
                        title: "Further education preferences",
                        api: "somthing",
                    }
                    }
                />
            )}


            {modalName === "yearExperience" && (
                <UpdateProfileModal
                    open={modalName === "yearExperience"}
                    onClose={() => setModalName("")}
                    fields={{
                        years: employee?.years || 0,
                        months: employee?.months || 0
                    }}
                    label={{
                        years: "Experience Years",
                        months: "Experience Months"
                    }}
                    type={{
                        years: "number",
                        months: "number"
                    }}
                    suggestions={{}}
                    metaData={{
                        title: "Year Experience",
                        api: "somthing",
                    }
                    }
                />
            )}

            {modalName === "education" && (
                <UpdateProfileModal
                    open={modalName === "education"}
                    onClose={() => setModalName("")}
                    fields={{
                        qualification: employee?.education?.[0]?.highestEducation || "Graduate",
                        isHighestQualification: false,
                        schoolMedium: "Hindi",
                        instituteName: employee?.education?.[0]?.instituteName || "",
                        degree: employee?.education?.[0]?.degree || "",
                        specialisation: employee?.education?.[0]?.specialisation || "",
                        studyMode: employee?.education?.[0]?.educationType || "Full-time",
                        startDate: employee?.education?.[0]?.startDate || "",
                        endDate: employee?.education?.[0]?.endDate || ""
                    }}

                    label={{
                        qualification: "Education Level",
                        instituteName: "College/School Name",
                        isHighestQualification: "Is this your highest qualification",
                        schoolMedium: "Medium of this study",
                        degree: "Degree",
                        specialisation: "Specializatin",
                        studyMode: "Mode of your study",
                        startDate: "Start Date",
                        endDate: "End Date"
                    }}

                    type={{
                        qualification: "radio",
                        instituteName: "text",
                        isHighestQualification: "radio",
                        schoolMedium: "radio",
                        degree: "select",
                        specialisation: "select",
                        studyMode: "radio",
                        startDate: "date",
                        endDate: "date"
                    }}
                    suggestions={{
                        qualification: [{ "Diploma": "Diploma" }, { "ITI": "ITI" }, { "Graduate": "Graduate" }, { "Post Graduate": "Post Graduate" }],
                        isHighestQualification: [{ "Yes": true }, { "no": false }],
                        degree: ["B.A.", "B.Com", "B.Sc", "B.Tech", "M.A"],
                        schoolMedium: [{ "Hindi": "Hindi" }, { "English": "English" }],
                        specialisation: ["Computer Science", "Commerce", "Arts", "Physics"],
                        studyMode: [{ "Full-Time": "f" }, { "Part-Time": "p" }, { "Correspondence": "c" }]
                    }}


                    metaData={{
                        title: " Edit Education",
                        onSubmitFunc: selectedEducation ? editEducation : createEducation,
                        id: selectedEducation?.id
                    }
                    }
                />
            )}


            {modalName === "certification" && (
                <UpdateProfileModal
                    open={modalName === "certification"}
                    onClose={() => setModalName("")}
                    fields={{
                        certification: employee?.certification || "",
                    }}
                    label={{ certification: "Add Your Certification Name" }}
                    type={{
                        certification: "text",
                    }}
                    suggestions={{}}


                    metaData={{
                        title: " Add Certification",
                        api: "somthing",
                    }
                    }
                />
            )}


            {modalName === "basicDetails" && (
                <UpdateProfileModal
                    open={modalName === "basicDetails"}
                    onClose={() => setModalName("")}
                    fields={{
                        fullName: employee?.fullName,
                        email: employee?.email,
                        gender: employee?.gender,
                        number: employee?.number,
                        dob: employee?.dob
                    }}
                    label={{
                        fullName: "Enter Your Name",
                        email: "Enter Your Email",
                        gender: "Enter Your Gender",
                        number: "Enter Your Mobile Number",
                        dob: "Enter your Date of birth"
                    }}
                    type={{
                        fullName: "text",
                        email: "text",
                        gender: "text",
                        number: "number",
                        dob: "date"
                    }}

                    suggestions={{
                        gender: ["Male", "Female", "Other"]
                    }}

                    metaData={{
                        title: " Edit Basic Details",
                        api: "somthing",
                    }
                    }
                />
            )}

        </>
    );
};

export default ProfileOverviewCard;
