import React, { useState } from "react";
import { Building2, Pencil, GraduationCap, PencilIcon } from "lucide-react";
import UpdateProfileModal from "../modals/profileUpdateModals/updateProfileModal";
import { createEducation, employeeExp, getprofile, updateProfileFunc, updateSkils } from "../../API/ApiFunctions";
import EditExperienceModal from "../modals/profileUpdateModals/experienceModal";
import UserForm from "../modals/profileUpdateModals/resumeUpload";
import { uploadResumeApi } from "../../API/APIs";


export default function MainContent({ employee }) {
  const [modalName, setModalName] = useState(null);
  const [experienceIndex, setExperienceIndex] = useState(null);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const handleEditEducation = (edu) => {
        setSelectedEducation(edu);
        setModalName("education");
    };


  const user = JSON.parse(localStorage.getItem("User"));



  return (
    <>
      <div>
        <div className="flex items-center  justify-between -mt-3">
          <h2 className=" mt-10 bg-white font-medium text-16 text-gray-800">
            Work Experience
          </h2>
          <button
            onClick={() => {
              setModalName("editExperience");
              setExperienceIndex(null);
            }}
            className="-mb-10 text-secondary text-16 font-medium hover:underline"
          >
            + Add
          </button>
        </div>

        <div className=" bg-white mt-4 w-full space-y-8">
          {/* Header */}

          {/* Work Experience Item 1 */}
          {employee?.EmployeeExperiences?.map((experienc, index) => (
            <div
              key={index}
              className=" p-4 space-y-2 relative border rounded-lg shadow-xl"
            >
              <button
                onClick={() => {
                  setModalName("editExperience");
                  setExperienceIndex(index);
                }}
                className="absolute top-2 right-2 text-gray-500 hover:text-green-600"
              >
                <Pencil size={18} className="w-4 h-4 text-secondary" />
              </button>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-secondary" size={18} />
                <h3 className="text-14 text-gray-800">
                  {experienc.companyName}
                </h3>
              </div>



              <div>
                <p className="text-14 text-gray-650">{experienc.jobTitle}</p>
                <div className="text-14 text-gray-650 space-y-2 mt-2">
                  {/* Job Roles */}
                  <div className="flex">
                    <span className="w-28 min-w-[7rem] font-medium text-gray-800">
                      Job Roles:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {JSON.parse(experienc.jobRole)?.map((skill, index) => (
                        <span
                          key={index}
                          className="text-gray-650 text-14 bg-light px-2 py-1 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Industry */}
                  <div className="flex">
                    <span className="w-28 min-w-[7rem] font-medium text-gray-800">
                      Industry:
                    </span>
                    <span className="text-gray-650 text-14 bg-light px-2 py-1 rounded-lg">
                      {experienc.industry}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="flex">
                    <span className="w-28 min-w-[7rem] font-medium text-gray-800">
                      Description:
                    </span>
                    <div className="text-gray-650 text-14 bg-light px-2 py-1 rounded-lg">
                      {experienc?.description}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex">
                    <span className="w-28 min-w-[7rem] font-medium text-gray-800">
                      Skills:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {JSON.parse(experienc.skillsUsed)?.map((skill, index) => (
                        <span
                          key={index}
                          className="text-gray-650 text-14 bg-light px-2 py-1 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dates and Employment Type */}
                  <div className="flex">
                    <span className="w-28 min-w-[7rem] font-medium text-gray-800">
                      Duration:
                    </span>
                    <div className="flex gap-4 text-14 text-gray-650 ">
                      <span className="text-gray-650 text-14 bg-light px-2 py-1 rounded-lg">
                        {experienc.startDate} -{" "}
                        {employee?.EmployeeExperiences[0].endDate
                          ? employee?.EmployeeExperiences[0].endDate
                          : "Present"}
                      </span>
                      <span className="text-gray-650 text-14 bg-light px-2 py-1 rounded-lg">
                        {experienc.employmentType}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" border bg-white mt-10 p-4 rounded-lg shadow-xl space-y-4 w-full">
          <div
            onClick={() => setModalName("yearExperience")}
            className="flex justify-between items-center text-14 text-gray-650 bg-light cursor-pointer rounded-lg px-3 py-2 "
          >
            <p className="text-14 text-gray-800 font-medium ">
              Total Years of experience:
            </p>
            <p className="text-14 text-gray-650">
              {employee?.TotalExperience?.years} years and {employee?.TotalExperience?.months} months
            </p>
          </div>
        </div>

        <div className=" border bg-white mt-4 p-4 rounded-lg shadow-xl space-y-4 w-full">
          <div
            onClick={() => setModalName("salary")}
            className="flex justify-between items-center text-14 text-gray-650 bg-light cursor-pointer rounded-lg px-3 py-2 "
          >
            <p className="text-14 text-gray-800 font-medium">
              Current monthly salary:
            </p>
            <p className="text-14 text-gray-650"> {employee?.salary}</p>
          </div>
        </div>


        <div className="flex mt-10 items-center justify-between">
          <h2 className="font-medium text-16 text-gray-800">Education</h2>
          <button
            className="text-secondary text-16 font-medium hover:underline "
            onClick={() => setModalName("education")}
          >
            + Add
          </button>
        </div>
        {employee?.EmployeeEducations?.length > 0 ? (
          <div className=" mt-4  space-y-4 w-full">
            {/* Education Section */}

            <div className="space-y-8 pt-2 ">
              {/* Education Cards */}
              {employee?.EmployeeEducations?.map((edu, idx) => (
                <div
                  key={idx}
                  className=" p-4 flex gap-4 border rounded-lg shadow-xl relative"
                >
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center">
                    <GraduationCap
                      className="w-4 h-4 text-secondary mt-1"
                      size={20}
                    />
                    <div className="h-full border-l border-dotted border-secondary mt-1" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 space-y-1">
                    <h3 className="text-14 font-medium text-gray-650">
                      {edu.degree} {edu.specialization}
                    </h3>
                    <p className="text-14 text-gray-650">
                      {edu.instituteName} -- {edu.highestEducation}
                    </p>
                    <div className="flex gap-2 pt-1">
                      <span className="text-14 bg-light px-3 py-2 rounded-lg text-gray-650">
                        Batch {edu.startDate} - {edu.endDate}
                      </span>
                      <span className="text-14 bg-light px-3 py-2 rounded-lg text-gray-650">
                        {edu.studyMode === "f" ? <p>Full-Time</p> : <span>{edu.studyMode === "p" ? <p>Part Time</p> : <p>Correspondence</p>}</span>}
                      </span>
                    </div>
                  </div>

                  {/* Edit icon */}
                  <button
                    onClick={() => handleEditEducation(idx)}
                    className=" top-2 right-2 text-gray-650 hover:text-secondary"
                  >
                    <Pencil size={18} className="w-4 h-4 text-secondary" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h1
            onClick={() => setModalName("education")}
            className="bg-white text-14 text-gray-650 shadow-xl p-4 cursor-pointer hover:bg-light"
          >
            No Education added
          </h1>
        )}

        <div className=" w-full ml-auto  mt-10">
          <div className="bg-white p-2 border rounded-lg shadow-xl flex-col mt-4 ">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-16 text-gray-800 font-medium pl-3 -mb-2">
                Skills
              </h3>
              <button
                onClick={() => setModalName("skills")}
                className="text-gray-500 hover:text-gray-700"
              >
                <Pencil size={18} className="text-secondary" />
              </button>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap flex-row gap-2 pl-3 ">
              {console.log("employee data", employee)}
              {employee?.skills?.length > 0 ? (
                JSON.parse(employee?.skills).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-lg bg-light text-14 text-gray-650 "
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <p className="px-3 py-2 text-14 ml-2 mr-2 bg-light rounded-lg text-gray-650">
                  No skills listed yet.
                </p>
              )}
            </div>

            {/* Footer Note */}
            <p className="text-14 text-gray-650 mt-4 flex items-center gap-1"></p>
          </div>

          <div className="bg-white cursor-pointer border rounded-lg mt-4 p-4 shadow-xl space-y-4 w-full">
            <div className="flex justify-between">
              <h3 className="text-16 text-gray-800 font-medium pl-1  ">
                Certifications
              </h3>
              <button
                className="text-secondary text-16 font-medium hover:underline"
                onClick={() => setModalName("certification")}
              >
                + Add
              </button>
            </div>

            <div className="flex flex-row gap-2 text-14 ">
              {employee?.certification &&
                JSON.parse(employee.certification).map((certificate, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-light text-14 px-2 py-1 text-gray-650"
                  >
                    {certificate}
                  </div>
                ))}
            </div>
          </div>

          <div className="bg-white p-4 border rounded-lg shadow-xl mt-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 -mt-2 ">
              <h3 className="text-16 text-gray-800 font-medium">
                Language Known
              </h3>
              <button
                onClick={() => setModalName("languageKnown")}
                className="text-gray-500 hover:text-gray-700"
              >
                <Pencil size={18} className="text-secondary" />
              </button>
            </div>

            {/* language tags */}
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-lg bg-light text-14 text-gray-650  ">
                English:{" "}
                <span className="text-gray-800">
                  {employee?.englishProficiency}
                </span>
              </span>
              {employee?.otherLanguages &&
                Array.isArray(JSON.parse(employee.otherLanguages)) &&
                JSON.parse(employee.otherLanguages).map((language, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-lg bg-light text-14 text-gray-650 "
                  >
                    {language}
                  </span>
                ))}
            </div>
          </div>

          {/* <div className="bg-white border mt-4 p-4 shadow-xl space-y-4 w-full">
              <div className="flex justify-between items-center  bg-light px-3 py-2 rounded-lg">
                <p className="text-14 text-gray-650">Spoken English</p>
              </div>
            </div> */}

          <section
            id="resume"
            className="px-5 pt-3 pb-5 mr-3 w-full mt-5 rounded-lg  shadow-xl border  bg-white max-md:px-5 max-md:mr-2.5 max-md:max-w-full"
          >
            <div className="flex flex-wrap gap-5 justify-between  text-black max-md:max-w-full">
              <div className="flex flex-col w-full">
                <div className="w-full flex flex-row justify-between">
                  <h2 className="self-start text-16 text-gray-800 font-medium">
                    Resume
                  </h2>
                  <PencilIcon
                    className="text-secondary cursor-pointer"
                    onClick={() => setModalName("editResume")}
                    size={18}
                  />
                </div>

                {employee?.resumeURL ? (
                  <div
                    onClick={() => window.open(employee?.resumeURL, "_blank")}
                  >
                    <p className="mt-4 text-14 text-gray-650">
                      {employee?.resumeURL.split("/").pop()}
                    </p>
                    <p className="mt-2 text-14 text-gray-650 max-md:mr-2.5">
                      Uploaded on {employee?.updatedAt.split("T")[0]}
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center items-center px-20 py-10 mt-6 rounded-lg border ">
                    <div
                      onClick={() => setModalName("editResume")}
                      className="flex flex-col max-w-full w-[389px]"
                    >
                      <button className="self-center px-5 py-2.5 max-w-full text-16 font-medium text-gray-800 rounded-lg border  w-[20rem]">
                        Update resume
                      </button>
                      <p className="mt-1.5 text-14 text-gray-650">
                        Supported Formats: doc, docx, rtf, pdf,upto 2 MB{" "}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          <div className="flex items-left flex-col justify-left mt-10 gap-2">
            <h2 className="text-16  font-medium text-gray-800">
              Other details
            </h2>
            <h2 className="text-14 text-gray-650">Only Visible to HRs</h2>
          </div>

          <div className="bg-white shadow-xl border rounded-lg mt-5 p-4 shadow-md cursor-pointer w-full">
            <div className="w-full flex flex-row justify-between mb-2 ">
              <h2 className="self-start text-16 text-gray-800 font-medium">
                Prefered Job Roles
              </h2>
              <PencilIcon
                className="text-secondary"
                onClick={() => setModalName("preferredJobs")}
                size={18}
              />
            </div>

            <div className="flex justify-center items-left flex-col text-14 ">
              <ul className="flex flex-row gap-2">
                {employee?.preferredJobRoles &&
                  JSON.parse(employee.preferredJobRoles)?.map((role, index) => (
                    <span
                      key={index}
                      className=" text-14 text-gray-650 bg-light px-2 py-1 rounded-lg"
                    >
                      {role}
                    </span>
                  ))}
              </ul>
            </div>
          </div>
          <div className="bg-white border rounded-lg mt-5 p-4 shadow-xl space-y-4 w-full">
            <div className="w-full flex flex-row justify-between -mb-2">
              <h2 className="self-start text-16 text-gray-800 font-medium">
                Prefered Job City
              </h2>
              <PencilIcon
                className="text-secondary cursor-pointer"
                onClick={() => setModalName("preferredJobCity")}
                size={18}
              />
            </div>

            <div className="flex justify-center items-left flex-col ">

              <div className="flex flex-row gap-2">
                {employee?.preferredJobCity && JSON.parse(employee?.preferredJobCity).map((city, index) => (
                  <h2 key={index} className="text-14  text-gray-650 bg-light px-2 py-1 rounded-lg">{city}</h2>
                ))}

              </div>
            </div>
          </div>

          <div className="bg-white mt-5 p-4 shadow-xl border rounded-lg space-y-4 w-full">
            <div className="w-full flex flex-row justify-between mb-2 ">
              <h2 className="self-start text-16 text-gray-800 font-medium">
                Job Preference
              </h2>
              <PencilIcon
                className="text-secondary cursor-pointer"
                onClick={() => setModalName("jobPreference")}
                size={18}
              />
            </div>
            <div className="flex justify-center items-left flex-col">
              <div className="flex flex-row gap-4">
               
                  {employee?.preferredEmployementTypes &&
                    Array.isArray(JSON.parse(employee.preferredEmployementTypes)) &&
                    JSON.parse(employee.preferredEmployementTypes).map((role, index) => (
                    <div
                      key={index}
                      className="text-14 text-gray-650  bg-light px-2 py-1 rounded-lg "
                    >
                      {role}
                    </div>
                  ))}
          
                  {employee?.preferredShifts &&
                    Array.isArray(JSON.parse(employee.preferredShifts)) &&
                    JSON.parse(employee.preferredShifts).map((role, index) => (
                      <span
                        key={index}
                       className="text-14 text-gray-650  bg-light px-2 py-1 rounded-lg "
                      >
                        {role}
                      </span>
                    ))}
             

               
                  {employee?.preferredLocationTypes &&
                    Array.isArray(
                      JSON.parse(employee.preferredLocationTypes)
                    ) &&
                    JSON.parse(employee.preferredLocationTypes).map(
                      (role, index) => (
                        <span
                          key={index}
                          className="text-14 text-gray-650  bg-light px-2 py-1 rounded-lg "
                        >
                          {role}
                        </span>
                      )
                    )}
              
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-lg mt-5 p-4 shadow-xl mb-10 space-y-4 w-full">
            <div className="w-full flex flex-row justify-between mb-2 ">
              <h2 className="self-start text-16 text-gray-800 font-medium">
                Basic Details
              </h2>
              <PencilIcon
                className="text-secondary cursor-pointer"
                onClick={() => setModalName("basicDetails")}
                size={18}
              />
            </div>
            <div className="flex justify-center items-left flex-col  ">
              <div className="flex flex-row gap-2 flex-wrap ">
                <h2 className="text-14 text-gray-650  bg-light px-2 py-1 rounded-lg">
                  {employee?.fullName}
                </h2>
                <h2 className="text-14 text-gray-650  bg-light px-2 py-1 rounded-lg">
                  {employee?.email}
                </h2>
                <h2 className="text-14 text-gray-650  bg-light px-2 py-1 rounded-lg">
                  {user?.phone}
                </h2>
                <h2 className="text-14 text-gray-650  bg-light px-2 py-1 rounded-lg">
                  {employee?.gender}
                </h2>
                <h2 className="text-14 text-gray-650  bg-light px-2 py-1 rounded-lg">
                  {employee?.dob}
                </h2>
                <h2 className="text-14 text-gray-650  bg-light px-2 py-1 rounded-lg">
                  {employee?.currentLocation}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* div 2/3 end */}
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
                        skills: Array.isArray(employee?.skills)?employee?.skills: employee?.skills &&  JSON.parse(employee?.skills) || [],
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




            {modalName === "editExperience" && <EditExperienceModal Open={modalName === "editExperience"} close={() => setModalName("")} data={employee?.EmployeeExperiences[experienceIndex]} id={experienceIndex} />}

            {modalName === "salary" && (
                <UpdateProfileModal
                    open={modalName === "salary"}
                    onClose={() => setModalName("")}
                    fields={{
                        salary: employee?.salary || "",
                    }}
                    label={{ salary: "Enter your Current Salary" }}
                    type={{
                        salary: "number",
                    }}
                    metaData={{
                        title: "Edit Current Monthly Salary",
                        onSubmitFunc: updateProfileFunc,
                        id: null
                    }
                    }
                />
            )}


            {modalName === "preferredJobs" && (
                <UpdateProfileModal
                    open={modalName === "preferredJobs"}
                    onClose={() => setModalName("")}
                    fields={{
                        preferredJobRoles: Array.isArray(employee?.preferredJobRoles)?employee?.preferredJobRoles: employee?.preferredJobRoles && JSON.parse(employee?.preferredJobRoles)|| [],
                    }}
                    label={{ preferredJobRoles: "Add Your Job Preference" }}
                    type={{
                        preferredJobRoles: "multi",
                    }}
                    suggestions={{
                        preferredJobRoles: [
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
                        onSubmitFunc: updateProfileFunc,
                        id: null
                    }
                    }
                />
            )}


            {modalName === "preferredJobCity" && (
                <UpdateProfileModal
                    open={modalName === "preferredJobCity"}
                    onClose={() => setModalName("")}
                    fields={{
                        preferredJobCity: Array.isArray(employee?.preferredJobCity)?employee?.preferredJobCity: employee?.preferredJobCity && JSON.parse(employee?.preferredJobCity) || [],

                    }}
                    label={{
                        preferredJobCity: "Add Your Prefered Job City",

                    }}
                    type={{
                        preferredJobCity: "multi",

                    }}
                    suggestions={{
                        preferredJobCity: ["Delhi", "Gurgaon", "Noida", "Bangalore"]
                    }} // optional: you can provide city name suggestions if needed
                    limits={{ preferredJobCity: 3 }}
                    metaData={{
                        title: "Preferred job city",
                        onSubmitFunc: updateProfileFunc,
                        id: null
                    }
                    }// to enforce a max of 3 cities
                />
            )}


            {modalName === "languageKnown" && (
                <UpdateProfileModal
                    open={modalName === "languageKnown"}
                    onClose={() => setModalName("")}
                    fields={{
                        englishProficiency: employee?.englishProficiency || "",
                        otherLanguages: Array.isArray(employee?.otherLanguages)?employee?.otherLanguages: employee?.otherLanguages && JSON.parse(employee?.otherLanguages) || [],
                    }}
                    label={{
                        englishProficiency: "What is your englsih speaking level",
                        otherLanguages: "Select other language"
                    }}
                    type={{
                        englishProficiency: "radio",
                        otherLanguages: "multi",
                    }}
                    suggestions={{
                        englishProficiency: [{ "Basic": "Basic" }, { "Intermediate": "Intermediate" }, { "Advanced": "Advanced" }],
                        otherLanguages: ["Hindi", "Telugu", "Bengali"],
                    }}
                    metaData={{
                        title: "language Known",
                        onSubmitFunc: updateProfileFunc,
                        id: null
                    }
                    }
                />
            )}


            {modalName === "jobPreference" && (
                <UpdateProfileModal
                    open={modalName === "jobPreference"}
                    onClose={() => setModalName("")}
                    fields={{
                        preferredEmployementTypes: Array.isArray(employee?.preferredEmployementTypes)?employee?.preferredEmployementTypes: employee?.preferredEmployementTypes && JSON.parse(employee?.preferredEmployementTypes) || [],
                        preferredLocationTypes: Array.isArray(employee?.preferredLocationTypes)?employee?.preferredLocationTypes: employee?.preferredLocationTypes && JSON.parse(employee?.preferredLocationTypes) || [],
                        preferredShifts: Array.isArray(employee?.preferredShifts)?employee?.preferredShifts: employee?.preferredShifts && JSON.parse(employee?.preferredShifts) || [],
                    }}
                    label={{
                        preferredEmployementTypes: "Select Your Preferred employement type",
                        preferredLocationTypes: "Select Your Preferred Work Place",
                        preferredShifts: "Select Your Preferred Work Shift",
                    }}
                    type={{
                        preferredEmployementTypes: "multi",
                        preferredLocationTypes: "multi",
                        preferredShifts: "multi",
                    }}
                    suggestions={{
                        preferredEmployementTypes: ["Part Time", "Full Time", "Internships", "Contract"],
                        preferredLocationTypes: ["Work from Office", "Work from Home", "Field Jobs"],
                        preferredShifts: ["Night Shift", "Day Shift"],
                    }}
                    metaData={{
                        title: "jobPreference",
                        onSubmitFunc: updateProfileFunc,
                        id: null
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
                        onSubmitFunc: employeeExp,
                        id: null
                    }
                    }
                />
            )}

            {modalName === "education" && (
                <UpdateProfileModal
                    open={modalName === "education"}
                    onClose={() => setModalName("")}
                    fields={{
                        qualification: employee?.EmployeeEducations[selectedEducation]?.qualification || "Graduate",
                        isHighestQualification: false,
                        schoolMedium: "Hindi",
                        instituteName: employee?.EmployeeEducations[selectedEducation]?.instituteName || "",
                        degree: employee?.EmployeeEducations[selectedEducation]?.degree || "",
                        specialisation: employee?.EmployeeEducations[selectedEducation]?.specialisation || "",
                        studyMode: employee?.EmployeeEducations[selectedEducation]?.studyMode || "Full-time",
                        startDate: employee?.EmployeeEducations[selectedEducation]?.startDate || "",
                        endDate: employee?.EmployeeEducations[selectedEducation]?.endDate || ""
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
                        certification: Array.isArray(employee?.certification)?employee?.certification: employee?.certification && JSON.parse(employee?.certification) || [],
                    }}
                    label={{ certification: "Add Your Certification Name" }}
                    type={{
                        certification: "multi",
                    }}
                    suggestions={{
                        certification: ["Mechanical support", "Mern Stack Developer", "Software Development"]
                    }}


                    metaData={{
                        title: " Add Certification",
                        onSubmitFunc: updateProfileFunc,
                        id: null
                    }
                    }
                />
            )}


            {modalName === "basicDetails" && (
                <UpdateProfileModal
                    open={modalName === "basicDetails"}
                    onClose={() => setModalName("")}
                    fields={{
                        fullName: employee?.fullName || "" ,
                        email: employee?.email || "",
                        gender: employee?.gender || "",
                        dob: employee?.dob || "",
                        currentLocation: employee?.currentLocation || "",
                        hometown: employee?.hometown || ""
                    }}
                    label={{
                        fullName: "Enter Your Name",
                        email: "Enter Your Email",
                        gender: "Enter Your Gender",
                        dob: "Enter your Date of birth",
                        currentLocation: "Enter Your Current Location",
                        hometown: "Enter the Home Town"
                    }}
                    type={{
                        fullName: "text",
                        email: "text",
                        gender: "text",
                        dob: "date",
                        currentLocation: "text",
                        hometown: "text"
                    }}

                    suggestions={{
                        gender: ["Male", "Female", "Other"]
                    }}

                    metaData={{
                        title: " Edit Basic Details",
                        onSubmitFunc: updateProfileFunc,
                        id: null
                    }
                    }
                />
            )}
    </>
  );
}
