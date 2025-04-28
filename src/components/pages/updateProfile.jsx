import React, { useEffect, useState } from "react";
import { ExternalLink, Share2, Building2, Pencil, Plus, GraduationCap } from "lucide-react";
import { Tooltip } from "@mui/material";
import { employeeData } from "../../employeeData";
import EditSalaryModal from "../modals/profileUpdateModals/salaryModal";
import EditEducationModal from "../modals/profileUpdateModals/highestEducationModal";
import EditSchoolMediumModal from "../modals/profileUpdateModals/schoolMediumModal";
import EditSkillsModal from "../modals/profileUpdateModals/skillsModal";
import EducationPreferenceModal from "../modals/profileUpdateModals/furtherEducation";
import EditCertificationModal from "../modals/profileUpdateModals/certificationModal";
import LanguageModal from "../modals/profileUpdateModals/languageKnownModal";
import EducationModal from "../modals/profileUpdateModals/educationModal";
import EditPreferredTitleModal from "../modals/profileUpdateModals/preferredJobRoleModal";
import EditLocationModal from "../modals/profileUpdateModals/locationModal";
import EditJobPreferencesModal from "../modals/profileUpdateModals/jobPreferenceModal";
import EditExperienceYearModal from "../modals/profileUpdateModals/experienceYear";
import EditExperienceModal from "../modals/profileUpdateModals/experienceModal";
import EditBasicDetailsModal from "../modals/profileUpdateModals/basicDetailModal";


const ProfileOverviewCard = () => {

    const [employee, setEmployee] = useState(null);
    const [modalName, setModalName] = useState(null);
    const [experienceIndex, setExperienceIndex] = useState(null);


    const user = JSON.parse(localStorage.getItem("User"));



    useEffect(() => {
        const employeData = employeeData.filter((employee) => employee.id === user?.id);
        setEmployee(employeData[0])
    }, []);

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
                                <p className="text-sm text-gray-600">{employee?.experiences[0].jobTitle} at {employee?.experiences[0].companyName}</p>
                                <p className="text-sm text-gray-600">{employee?.location.currentLocation}</p>
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
                                <p>{employee?.location.currentLocation}</p>
                            </div>
                            <div>
                                <span className="font-medium text-gray-600">Hometown</span>
                                <p>{employee?.location.hometown}</p>
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
                        {employee?.experiences.map((experienc, index) => (
                            <div key={index} className="border rounded-lg p-4 space-y-2 relative">
                                <button onClick={()=> {
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
                                        <span className="font-medium">JobRoles:</span> {experienc.jobRole.map((role, index) => (<span key={index}>{role}</span>))}
                                    </p>
                                    <p>
                                        <span className="font-medium">Industry:</span> {experienc.industry}
                                    </p>
                                </div>
                                <div className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                                    Creating project for the company
                                </div>
                                <div className="text-sm text-gray-700">
                                    <span className="font-medium">Skills:</span> {experienc.skillsUsed.map((skill, index) => (<p key={index}>{skill}</p>))}
                                </div>
                                <div className="flex gap-2 text-xs text-gray-600 pt-1">
                                    <span className="bg-gray-200 px-2 py-0.5 rounded-full">{experienc.startDate}- {employee?.experiences[0].endDate ? <span>{employee?.experiences[0].endDate}</span> : <span>present</span>}</span>
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
                            <p className="text-gray-800"> {employee?.experiences[0].currentSalary}</p>
                        </div>

                    </div>

                    <div className="flex mt-6 items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-800">Education</h2>
                        <button className="text-green-600 text-sm font-medium hover:underline flex items-center gap-1">
                            <Plus size={14} /> Add
                        </button>
                    </div>

                    <div onClick={() => setModalName("highestEducation")} className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                        <div className="flex justify-between items-center text-sm bg-gray-50 px-4 py-2 rounded-lg">
                            <p className="text-gray-700">Highest education:</p>
                            <p className="text-gray-900 font-medium">{employee?.education[0].highestEducation}</p>
                        </div>

                    </div>


                    <div onClick={() => setModalName("schoolMedium")} className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                        <div className="flex justify-between items-center text-sm bg-gray-50 px-4 py-2 rounded-lg">
                            <p className="text-gray-700">School medium:</p>
                            <p className="text-gray-400 italic">{employee?.education[0].schoolMedium}</p>
                        </div>

                    </div>

                    <div className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">
                        {/* Education Section */}
                        <div className="space-y-3 pt-2">


                            {/* Education Cards */}
                            {employee?.education.map((edu, idx) => (
                                <div
                                    key={idx}
                                    className="relative border rounded-xl p-4 bg-gray-50 flex gap-4"
                                >
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
                                    <button onClick={() => setModalName("education")} className="absolute top-2 right-2 text-gray-500 hover:text-green-600">
                                        <Pencil size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="bg-white p-6 rounded-xl shadow-sm mt-4">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold">Skills</h3>
                            <button onClick={() => setModalName("skills")} className="text-gray-500 hover:text-gray-700">
                                <Pencil size={18} />
                            </button>
                        </div>

                        {/* Skill Tags */}
                        <div className="flex flex-wrap gap-2">
                            {employee?.experiences[0].skillsUsed.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700 border border-gray-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Footer Note */}
                        <p className="text-sm text-gray-500 mt-4 flex items-center gap-1">
                            <span className="text-xl">ℹ️</span> Skills with the check mark have been verified by Apna
                        </p>
                    </div>

                    <div className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                        <div onClick={() => setModalName("furtherEducation")} className="flex justify-between items-center text-sm bg-gray-50 px-4 py-2 rounded-lg">
                            <p className="text-gray-700">Further Education Preferences</p>
                            <p className="text-gray-400 italic">+ Add</p>
                        </div>

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
                            {employee?.otherLanguages.map((language, idx) => (
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
                                {employee?.preferredJobRoles.map((role, index) => (
                                    <li key={index} className="text-lg font-semibold text-sm text-gray-500">{role}</li>
                                ))}
                            </ul>

                        </div>

                    </div>
                    <div className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                        <div onClick={() => setModalName("location")} className="flex justify-center items-left flex-col text-sm bg-gray-50 px-4 py-2 rounded-lg">
                            <p className="text-gray-800 font-semibold text-lg">Location</p>
                            <div className="flex flex-row gap-6">

                                <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.location.currentLocation}</h2>
                                <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.location.hometown}</h2>

                            </div>
                        </div>

                    </div>

                    <div onClick={() => setModalName("jobPreference")} className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                        <div className="flex justify-center items-left flex-col text-sm bg-gray-50 px-4 py-2 rounded-lg">
                            <p className="text-gray-800 font-semibold text-lg">Job Preference</p>

                            <div className="flex flex-row gap-6">
                                <ul className="flex flex-row gap-6">
                                    {employee?.preferredEmployementTypes.map((role, index) => (
                                        <li key={index} className="text-lg font-semibold text-sm text-gray-500">{role}</li>
                                    ))}
                                </ul>

                                <ul className="flex flex-row gap-6">
                                    {employee?.preferredShifts.map((role, index) => (
                                        <li key={index} className="text-lg font-semibold text-sm text-gray-500">{role}</li>
                                    ))}
                                </ul>

                                <ul className="flex flex-row gap-6">
                                    {employee?.preferredLocationTypes.map((role, index) => (
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

            {modalName === "yearExperience" &&
                <EditExperienceYearModal isOpen={modalName === "yearExperience"} onClose={() => setModalName("")} years={employee?.years} months={employee?.months} />
            }

            {modalName === "editExperience" &&
            <EditExperienceModal Open={modalName === "editExperience"} close={()=> setModalName("")} data={employee?.experiences[experienceIndex]?employee?.experiences[experienceIndex]:null} />
            }

        

            {modalName === "salary" &&
                <EditSalaryModal open={modalName === "salary"} onClose={() => setModalName("")} salary={employee?.currentSalary} />
            }

            {modalName === "highestEducation" &&
                <EditEducationModal open={modalName === "highestEducation"} onClose={() => setModalName("")} education={employee?.education[0].highestEducation} />
            }

         
            {modalName === "education" &&
                <EducationModal open={modalName === "education"} onClose={() => setModalName("")} education={employee?.education} />
            }

            {modalName === "schoolMedium" &&
                <EditSchoolMediumModal open={modalName === "schoolMedium"} onClose={() => setModalName("")} medium={employee?.education[0].schoolMedium} />
            }

            {modalName === "skills" &&
                <EditSkillsModal open={modalName === "skills"} onClose={() => setModalName("")} skill={employee?.experiences[0].skillsUsed} />
            }

            {modalName === "furtherEducation" &&
                <EducationPreferenceModal open={modalName === "furtherEducation"} onClose={() => setModalName("")} educationPreference={employee?.furtherEducation} />
            }

            {modalName === "certification" &&
                <EditCertificationModal open={modalName === "certification"} onClose={() => setModalName("")} certificate={employee?.certification} />
            }

            {modalName === "languageKnown" &&
                <LanguageModal open={modalName === "languageKnown"} onClose={() => setModalName("")} englishLevel={employee?.englishLevel} language={employee?.otherLanguages} />
            }

            {modalName === "preferredJobs" &&
                <EditPreferredTitleModal open={modalName === "preferredJobs"} onClose={() => setModalName("")} preferredJobs={employee?.preferredJobRoles} />
            }

            {modalName === "location" &&
                <EditLocationModal open={modalName === "location"} onClose={() => setModalName("")} location={employee?.location} />
            }

            {modalName === "jobPreference" &&
                <EditJobPreferencesModal open={modalName === "jobPreference"} onClose={() => setModalName("")} preferredEmployementType={employee?.preferredEmployementTypes} preferredShifts={employee?.preferredShifts} preferredWorkplace={employee?.preferredLocationTypes} />
            }

            {modalName === "basicDetails" &&
                <EditBasicDetailsModal open={modalName === "basicDetails"} onClose={() => setModalName("")} fullName={employee?.fullName} email={employee?.email} gender={employee?.gender} number={employee?.number} dob={employee?.dob} />
            }
        </>
    );
};

export default ProfileOverviewCard;
