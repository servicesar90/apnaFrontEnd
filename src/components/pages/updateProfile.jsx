import React, { use, useEffect, useState, useTransition } from "react";
import { ExternalLink, Share2, Building2, Pencil, Plus, GraduationCap } from "lucide-react";
import { Tooltip } from "@mui/material";
import UpdateProfileModal from "../modals/profileUpdateModals/updateProfileModal";
import { getprofile } from "../../API/ApiFunctions";
import EditExperienceModal from "../modals/profileUpdateModals/experienceModal";




const ProfileOverviewCard = () => {
    const [employee, setEmployee] = useState(null);
    const [modalName, setModalName] = useState(null);
    const [experienceIndex, setExperienceIndex] = useState(null);
    const [selectedEducation, setSelectedEducation] = useState(null);


    const handleEditEducation = (edu) => {
        setSelectedEducation(edu);
        setModalName("education");
      };
    

    const user = JSON.parse(localStorage.getItem("User"));
    const getData = async () => {

        const response = await getprofile()
        setEmployee(response?.data?.data)

    }

    console.log(employee)

    useEffect(() => {
        

        getData();
    },[])



    console.log(employee?.EmployeeEducations.length)

    return (
        <>
            <div className="w-full p-6 bg-gray-100 flex justify-center flex-row gap-10">
                <div className="flex flex-col mt-0 ">
                    <div className="bg-white rounded-xl p-4 m-4 shadow-md w-full max-w-md space-y-4">
                        {/* Profile Header */}
                        <div className="flex items-center space-x-4">
                            <img
                                src=""
                                alt="Profile"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">{employee?.name}</h2>
                                <div className="text-sm text-blue-600 flex items-center gap-1">
                                    <a
                                        href="https://apna.co/aditya-j"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline"
                                    >
                                      https://apna.co/aditya-j
                                    </a>
                                    <Tooltip title="Open profile link">
                                        <ExternalLink size={14} className="text-blue-600" />
                                    </Tooltip>
                                </div>
                                <p className="text-sm text-gray-600">{employee?.
                                    EmployeeExperiences[0].jobTitle} at {employee?.
                                        EmployeeExperiences[0].companyName}</p>
                                <p className="text-sm text-gray-600">{employee?.currentLocation}</p>
                            </div>
                        </div>

                        {/* Badge and Share */}
                        <div className="flex items-center justify-between">
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                                LEVEL 1
                            </span>
                            <button className="flex items-center text-green-600 text-sm hover:underline">
                                <Share2 size={16} className="mr-1" />
                                Share profile
                            </button>
                        </div>

                    </div>

                    <div className="bg-white rounded-xl p-4 m-4 shadow-md w-full max-w-md space-y-4">

                        {/* Contact Info Grid */}
                        <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-700">
                            <div>
                                <span className="font-medium text-gray-600">Email ID</span>
                                <p>{employee?.email}</p>
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Mobile number</span>
                                <p>{user?.phone}</p>
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Date of birth</span>
                                <p>{employee?.dob}</p>
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Gender</span>
                                <p>{employee?.gender}</p>
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Current location</span>
                                <p>{employee?.currentLocation}</p>
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Hometown</span>
                                <p>{employee?.hometown}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">

                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">Work Experience</h2>
                        <button onClick={() => {
                            setModalName("editExperience")
                            setExperienceIndex(null);
                        }} className="text-green-600 text-sm font-medium hover:underline">
                            + Add
                        </button>
                    </div>


                    <div className="bg-white rounded-xl p-4 shadow-md w-full space-y-4">
                        {/* Header */}


                        {/* Work Experience Item 1 */}
                        {employee?.
                            EmployeeExperiences.map((experienc, index) => (
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
{/* 
                    <div className="flex mt-6 items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">Education</h2>
                        <button className="text-green-600 text-sm font-medium hover:underline flex items-center gap-1">
                            <Plus size={14} /> Add
                        </button>
                    </div> */}

                    
{/* 
                    <div onClick={() => setModalName("highestEducation")} className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                        <div className="flex justify-between items-center text-sm bg-gray-50 px-4 py-2 rounded-lg">
                            <p className="text-gray-700">Highest education:</p>
                            <p className="text-gray-900 font-medium">{employee?.EmployeeEducations[0]?.highestEducation}</p>
                        </div>

                    </div> */}

{/* 
                    <div onClick={() => setModalName("schoolMedium")} className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                        <div className="flex justify-between items-center text-sm bg-gray-50 px-4 py-2 rounded-lg">
                            <p className="text-gray-700">School medium:</p>
                            <p className="text-gray-400 italic">{employee?.EmployeeEducations[0]?.schoolMedium}</p>
                        </div>

                    </div> */}
 <div className="flex mt-6 items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">Education</h2>
        <button
          className="text-green-600 text-sm font-medium hover:underline flex items-center gap-1"
          onClick={() => setModalName("education")}
        >
          <Plus size={14} /> Add
        </button>
      </div>
      {employee?.EmployeeEducations.length > 0 ?
      <div className="bg-black rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">
        {/* Education Section */}

        
         <div className="space-y-3 pt-2">
         {/* Education Cards */}
          { employee?.EmployeeEducations?.map((edu, idx) => (
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
                 {edu.instituteName} -- {edu.highestEducation}
               </p>
               <div className="flex gap-2 pt-1">
                 <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
                   Batch {edu.startDate} - {edu.endDate}
                 </span>
                 <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-700">
                   {edu.educationType}
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

<div className="bg-white p-6 rounded-xl shadow-sm mt-4">
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-lg font-semibold">Skills</h3>
    <button
      onClick={() => setModalName("skills")}
      className="text-gray-500 hover:text-gray-700"
    >
      <Pencil size={18} />
    </button>
  </div>

  {/* Skill Tags */}
  <div className="flex flex-wrap gap-2">
    {employee?.EmployeeExperiences?.[0]?.skillsUsed?.length > 0 ? (
      employee.EmployeeExperiences[0].skillsUsed.map((skill, idx) => (
        <span
          key={idx}
          className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 border border-gray-300"
        >
          {skill}
        </span>
      ))
    ) : (
      <p className="text-sm text-gray-400 italic">No skills listed yet.</p>
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


                    <div className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                        <div className="flex justify-between items-center text-sm bg-gray-50 px-4 py-2 rounded-lg">
                            <p className="text-gray-700">Spoken English</p>

                        </div>

                    </div>



                    <div className="flex items-left flex-col justify-left">
                        <h2 className="text-lg font-semibold text-gray-800">Other details</h2>
                        <h2 className="text-lg font-semibold text-sm text-gray-500">Only Visible to HRs</h2>
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
                            <div className="flex flex-row gap-6">
                                <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.name}</h2>
                                <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.email}</h2>
                                <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.number}</h2>
                                <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.gender}</h2>
                                <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.dob}</h2>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {modalName === "skills" && (
  <UpdateProfileModal
    open={modalName === "skills"}
    onClose={() => setModalName("")}
    fields={{
      skills: employee?.EmployeeExperiences?.[0]?.skillsUsed || [],
    }}
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
  />
)}


            {/* {modalName === "editExperience" && (
                <UpdateProfileModal
                    open={modalName === "editExperience"}
                    onClose={() => setModalName("")}
                    fields={{
                        jobTitle: employee?.jobTitle || "",
                        jobRoles: employee?.jobRoles || [],
                        currentlyWorking: employee?.currentlyWorking || false,
                        companyName: employee?.companyName || "",
                        description: employee?.description || "",
                        skills: employee?.skills || [],
                        employmentType: employee?.employmentType || "",
                        startDate: employee?.startDate || "",
                        endDate: employee?.endDate || "",
                        industry: employee?.industry || "",
                        noticePeriod: employee?.noticePeriod || "",
                    }}
                    type={{
                        jobTitle: "text",
                        jobRoles: "multi",
                        currentlyWorking: "bool",
                        companyName: "text",
                        description: "text",
                        skills: "multi",
                        employmentType: "single",
                        startDate: "date",
                        endDate: "date",
                        industry: "single",
                        noticePeriod: "single",
                    }}
                    suggestions={{
                        industries: [
                            "IT Services & Consulting",
                            "IT",
                            "Education",
                            "Healthcare",
                            "Finance",
                            "Manufacturing"
                        ],
                        types: ["Full-time", "Part-time", "Intern", "Contract"],
                        noticePeriods: [
                            "No notice period",
                            "Less than 15 days",
                            "1 month",
                            "2 months",
                            "3 or more months"
                        ],
                        months: [
                            "January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                        ]
                    }}
                />
            )} */}


{modalName === "editExperience" && <EditExperienceModal Open={modalName === "editExperience"} close={() => setModalName("")} data={employee?.EmployeeExperiences[experienceIndex]} />} 

            {/* {modalName === "schoolMedium" && (
                <UpdateProfileModal
                    open={modalName === "schoolMedium"}
                    onClose={() => setModalName("")}
                    fields={{
                        schoolMedium: employee?.education[0].schoolMedium || "",
                    }}
                    type={{
                        schoolMedium: "select",
                    }}
                    suggestions={{
                        schoolMedium: [
                            "English",
                            "Hindi",
                            "Kannada",
                            "Bengali",
                            "Telugu",
                            "Tamil",
                            "Gujarati",
                            "Marathi",
                            "Odiya",
                            "Assamese",
                            "Malayalam",
                        ],
                    }}
                />
            )} */}


            {modalName === "salary" && (
                <UpdateProfileModal
                    open={modalName === "salary"}
                    onClose={() => setModalName("")}
                    fields={{
                        currentSalary: employee?.currentSalary || "",
                    }}
                    type={{
                        currentSalary: "number",
                    }}
                    helperText={{
                        currentSalary:
                            "💡 Salary information is private, we use it only to show relevant jobs",
                    }}
                />
            )}


            {modalName === "preferredJobs" && (
                <UpdateProfileModal
                    open={modalName === "preferredJobs"}
                    onClose={() => setModalName("")}
                    fields={{
                        preferredJobs: employee?.preferredJobRoles || [],
                    }}
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
                    type={{
                        preferredJobCity: "multiInput",
                        currentLocation: "text",
                        hometown: "text",
                    }}
                    suggestions={{}} // optional: you can provide city name suggestions if needed
                    limits={{ preferredJobCity: 3 }} // to enforce a max of 3 cities
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
                    type={{
                        englishLevel: "radio",
                        language: "checkbox",
                    }}
                    suggestions={{
                        englishLevel: ["Basic", "Intermediate", "Advanced"],
                        language: ["Hindi", "Telugu", "Bengali"],
                    }}
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
                />
            )}
 
{/* 
           {modalName === "highestEducation" && (
                <UpdateProfileModal
                    open={modalName === "highestEducation"}
                    onClose={() => setModalName("")}
                    fields={{
                        highestEducation: employee?.education[0].highestEducation || ""
                    }}
                    type={{
                        highestEducation: "radio"
                    }}
                    suggestions={{
                        highestEducation: ["Diploma", "ITI", "Graduate", "Post Graduate"]
                    }}
                />
            )}  */}

            {modalName === "furtherEducation" && (
                <UpdateProfileModal
                    open={modalName === "furtherEducation"}
                    onClose={() => setModalName("")}
                    fields={{
                        educationPreferences: employee?.educationPreferences || ""
                    }}
                    type={{
                        educationPreferences: "radio"  // or "select" if you want a dropdown
                    }}
                    suggestions={{
                        educationPreferences: [
                            "Post Graduate Degree",
                            "Certification / Courses",
                            "Govt. Job Preparation"
                        ]
                    }}
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
                    type={{
                        years: "number",
                        months: "number"
                    }}
                    suggestions={{}} // No suggestions needed for plain number input
                />
            )}


            {modalName === "experienceYears" && (
                <UpdateProfileModal
                    open={modalName === "experienceYears"}
                    onClose={() => setModalName("")}
                    fields={{
                        years: experience?.years || 0,
                        months: experience?.months || 0
                    }}
                    type={{
                        years: "number",
                        months: "number"
                    }}
                    suggestions={{}} // No suggestions needed for plain number input
                />
            )}


            {modalName === "education" && (
                <UpdateProfileModal
                    open={modalName === "education"}
                    onClose={() => setModalName("")}
                    fields={{
                        highestEducation: employee?.education?.[0]?.highestEducation || "Graduate",
                        instituteName: employee?.education?.[0]?.instituteName || "",
                        degree: employee?.education?.[0]?.degree || "",
                        specialisation: employee?.education?.[0]?.specialisation || "",
                        educationType: employee?.education?.[0]?.educationType || "Full-time",
                        startDate: employee?.education?.[0]?.startDate || "",
                        endDate: employee?.education?.[0]?.endDate || ""
                      }}
                      
                    type={{
                        highestEducation: "radio",
                        instituteName: "text",
                        degree: "select",
                        specialisation: "select",
                        educationType: "radio",
                        startDate: "date",
                        endDate: "date"
                    }}
                    suggestions={{
                        highestEducation: ["Diploma", "ITI", "Graduate", "Post Graduate"],
                        degree: ["B.A.", "B.Com", "B.Sc", "B.Tech", "M.A."],
                        specialisation: ["Computer Science", "Commerce", "Arts", "Physics"],
                        educationType: ["Full-time", "Part-time", "Correspondence"]
                    }}
                />
            )}



            {modalName === "certification" && (
                <UpdateProfileModal
                    open={modalName === "certification"}
                    onClose={() => setModalName("")}
                    fields={{
                        certification: employee?.certification || "",
                    }}
                    type={{
                        certification: "text",
                    }}
                    suggestions={{}}
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
                />
            )}

        </>
    );
};

export default ProfileOverviewCard;
