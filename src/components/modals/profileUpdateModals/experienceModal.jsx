import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DynamicModal from "./updateProfileModal";
// import EditJobRolesModal from "../";


const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const industries = ["IT Services & Consulting","IT", "Education", "Healthcare", "Finance", "Manufacturing"];
const types = ["Full-time", "Part-time", "Intern", "Contract"];
const noticePeriods = [
  "No notice period", "Less than 15 days", "1 month", "2 months", "3 or more months"
];


const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

const EditExperienceModal = ({ data, Open, close }) => {
  const [jobRolesModalOpen, setJobRolesModalOpen] = useState(false);
  const [skillInput, setSkillInput] = useState("");


  const { register, setValue,watch,  getValues, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      jobTitle: data?.jobTitle || "",
      jobRoles: data?.jobRoles || "",
      currentlyWorking: data?.currentlyWorking || false,
      companyName: data?.companyName || "",
      description: data?.description || "",
      skills: data?.skills || [],
      employmentType: data?.employementType || "",
      startDate: data?.startDate || "",
      endDate: data?.endDate || "",
      industry: data?.industry || "",
      noticePeriod: data?.noticePeriod || ""
    },
  });

  const skills= watch("skills")
  const isCurrentCompany= watch("currentlyWorking")
  const jobRoles= watch("jobRoles");
  const employementType = watch("employmentType");
  const noticePeriod = watch("noticePeriod");

  const onSubmit = (data) => {
    
    console.log(data);
    
  };


  const addSkill = () => {
    const trimmedSkill = skillInput.trim();
    if (!trimmedSkill) return;

    const currentSkills = getValues("skills") || [];
    if (currentSkills.includes(trimmedSkill)) return; // avoid duplicates

    const updatedSkills = [...currentSkills, trimmedSkill];
    setValue("skills", updatedSkills);
    setSkillInput(""); // clear input after adding
  };

  const removeSkill = (skill) => {
    const newSkills= getValues("skills");
    const removedSkills= newSkills.filter((s)=> s!= skill);
    setValue("skills",removedSkills);
  };

  return (
    <>
    <Dialog maxWidth="sm" fullWidth open={Open} onClose={close}>
    
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl overflow-y-auto max-h-[90vh]">
          <h2 className="text-xl font-bold mb-4">Edit Experience</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Job Details */}
            <div>
              <h1 className="text-xl font semibold mb-4"> Job Details</h1>
              <label className="block font-medium">Job Title</label>
              <input
                {...register("jobTitle")}
                className="w-full p-2 border rounded"
                placeholder="Job Title"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Job Roles</label>
              <div
                onClick={() => {
                  
                  setJobRolesModalOpen(true);
                }}
                className="flex flex-wrap gap-2 mb-2 px-3 py-2 border border-gray-300 rounded cursor-pointer min-h-[40px]"
              >
                {jobRoles.length > 0 ? (
                  jobRoles.map((role, index) => (
                    <span
                      key={index}
                      className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                    >
                      {role}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400 text-sm">
                    Select job roles...
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="block font-medium">Description (optional)</label>
              <textarea
                {...register("description")}
                rows={4}
                maxLength={4000}
                className="w-full p-2 border rounded"
                placeholder="Describe your work..."
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block font-medium">Skills (up to 10)</label>
              <div className="flex items-center gap-2 mb-2">
                <input
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addSkill())
                  }
                  className="p-2 border rounded w-full"
                  placeholder="Type a skill and press Enter"
                />
               
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="text-red-500 hover:text-red-700 ml-1"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Details */}
            <div>
              <h1 className=" text-xl font-semibold">Company Details</h1>
              <label className="block font-medium">Company Name</label>
              <input
                {...register("companyName")}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block font-medium mb-1">Industry</label>
              <select {...register("industry")} className="w-full p-2 border rounded">
                {industries.map((industry, index) => (
                  <option key={index} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {/* Employment Details */}
            <div>
              <h1 className=" text-xl font-semibold">Employement Details</h1>

              <label className="block font-medium mb-1">
                Are you currently working here?
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`px-4 py-2 rounded-full border ${
                    isCurrentCompany ? "bg-green-600 text-white" : "bg-white text-gray-700"
                  }`}
                  onClick={() => {
                    setValue("currentlyWorking", true)
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-full border ${
                    !isCurrentCompany ? "bg-green-600 text-white" : "bg-white text-gray-700"
                  }`}
                  onClick={() => {
                   
                    setValue("currentlyWorking",false);
                  }}
                >
                  No
                </button>
              </div>

              <label className="block font-medium mb-2">Employment Type</label>
              <div className="flex flex-wrap gap-4">
                {types.map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`px-4 py-2 rounded-full border transition ${
                      employementType === type
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                    onClick={() => {
                      
                      setValue("employmentType",type);
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Notice Period</label>
              <div className="flex flex-wrap gap-2">
                {noticePeriods.map((period) => (
                  <label key={period} className="cursor-pointer">
                    
                    <div onClick={()=>setValue("noticePeriod", period)} className={`px-4 py-2 rounded-full border ${noticePeriod===period?"bg-green-600 text-white border-green-600" : "text-gray-700 border-gray-300"}`}>
                      {period}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Dates */}
            <div>
              <label className="block font-medium">Start Date</label>
              <div className="flex gap-2">
                
                <input className="p-2 border border-gray-300 rounded w-full" type="date" {...register("startDate")} onChange={(e)=>setValue("startDate",e.target.value)} />
              </div>
            </div>

            {!isCurrentCompany && (
              <div>
                <label className="block font-medium">End Date</label>
                <div className="flex gap-2">
                
                <input className="p-2 border border-gray-300 rounded w-full" type="date" {...register("endDate")} onChange={(e)=>setValue("endDate",e.target.value)} />
              </div>
              </div>
            )}

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={close}
                className="px-4 py-2 border border-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      
    </Dialog>
     

      {jobRolesModalOpen && (
        <DynamicModal
          open={jobRolesModalOpen}
          onClose={() => setJobRolesModalOpen(false)}
          fields={{jobroles: "default"}}
          type={{jobRoles: "text"}}
          suggestions={{jobRoles: []}}
        />
      )}
    </>
  );
};

export default EditExperienceModal;
