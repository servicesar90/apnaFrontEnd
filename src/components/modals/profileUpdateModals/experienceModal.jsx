import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DynamicModal from "./updateProfileModal";
import { addEmpExp } from "../../../API/ApiFunctions";
// import EditjobRoleModal from "../";


const industries = ["IT Services & Consulting", "IT", "Education", "Healthcare", "Finance", "Manufacturing"];
const types = ["Full-time", "Part-time", "Intern", "Contract"];
const noticePeriods = [
  "No notice period", "Less than 15 days", "1 month", "2 months", "3 or more months"
];




const EditExperienceModal = ({ data, id, Open, close }) => {
  const [jobRoleModalOpen, setjobRoleModalOpen] = useState(false);
  const [skillInput, setSkillInput] = useState("");


  const { register, setValue, watch, getValues, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      jobTitle: data?.jobTitle || null,
      jobRole: data?.jobRole || null,
      isCurrent: data?.isCurrent || false,
      companyName: data?.companyName || null,
      description: data?.description || null,
      skillsUsed: data?.skillsUsed || [],
      employmentType: data?.employementType || null,
      startDate: data?.startDate || null,
      endDate: data?.endDate || null,
      industry: data?.industry || null,
      noticePeriod: data?.noticePeriod || null
    },
  });

  const skillsUsed = watch("skillsUsed")
  const isCurrentCompany = watch("isCurrent")
  const jobRole = watch("jobRole");
  const employementType = watch("employmentType");
  const noticePeriod = watch("noticePeriod");

  const onSubmit = async (data) => {

    if (data.startDate) {
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // remove time part

      let hasError = false;

      if (start > today) {
        setError("startDate", {
          type: "manual",
          message: "Start date must be in the past",
        });
        hasError = true;
      }

      if (end > today) {
        setError("endDate", {
          type: "manual",
          message: "End date must be in the past",
        });
        hasError = true;
      }

      if (start > end) {
        setError("startDate", {
          type: "manual",
          message: "Start date can't be after end date",
        });
        hasError = true;
      }

      if (hasError) return;
    }

    const response = await addEmpExp(id, data);
    if (response) {
      alert("Succesfully Updated");
      window.location.reload()
      close()
    } else {
      alert("couldn't uploaded, Please try again!")
    }

  };


  const addSkill = () => {
  const trimmedSkill = skillInput.trim();
  if (!trimmedSkill) return;

  let currentSkills = [];

  try {
    const rawSkills = getValues("skillsUsed");
    currentSkills = Array.isArray(rawSkills)
      ? rawSkills
      : JSON.parse(rawSkills) || [];
  } catch {
    currentSkills = [];
  }

  if (currentSkills.includes(trimmedSkill)) return; // avoid duplicates

  const updatedSkills = [...currentSkills, trimmedSkill];
  setValue("skillsUsed", updatedSkills);
  setSkillInput(""); // clear input
};

const removeSkill = (skillToRemove) => {
  let currentSkills= [];

  try {
    const rawSkills = getValues("skillsUsed");
    currentSkills = Array.isArray(rawSkills)
      ? rawSkills
      : JSON.parse(rawSkills) || [];
  } catch {
    currentSkills = [];
  }

  const updatedSkills = currentSkills.filter((s) => s !== skillToRemove);
  setValue("skillsUsed", updatedSkills);
};


  return (
    <>
      <Dialog className="rounded-3xl" maxWidth="sm" fullWidth open={Open} onClose={close}>

        <div className="bg-white p-6 rounded-3xl shadow-lg w-full max-w-3xl overflow-y-auto max-h-[90vh]">
          <h2 className="text-xl font-bold mb-4">Edit Experience</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Job Details */}
            <div>
              <h1 className="text-xl font-semibold mb-4"> Job Details</h1>
              <label className="block font-medium">Job Title</label>
              <input
                {...register("jobTitle")}
                className="w-full p-2 border rounded-xl"
                placeholder="Job Title"
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Job Roles</label>
              <div
                onClick={() => {

                  setjobRoleModalOpen(true);
                }}
                className="flex flex-wrap gap-2 mb-2 px-3 py-2 border border-gray-300 rounded-xl cursor-pointer min-h-[40px]"
              >
                {Array.isArray(jobRole) ? (
                  jobRole?.map((role, index) => (
                    <span
                      key={index}
                      className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-2xl text-sm"
                    >
                      {role}
                    </span>
                  ))
                ) : (
                  JSON.parse(jobRole)?.map((role, index) => (
                    <span
                      key={index}
                      className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-2xl text-sm"
                    >
                      {role}
                    </span>
                  ))
                )}
              </div>
            </div>

            <div>
              <label className="block font-medium">Description (optional)</label>
              <textarea
                {...register("description")}
                rows={4}
                maxLength={4000}
                className="w-full p-2 border rounded-2xl"
                placeholder="Describe your work..."
              />
            </div>

            {/* skillUsed */}
            <div>
              <label className="block font-medium">Enter Your Skills</label>
              <div className="flex items-center gap-2 mb-2">

                <input
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addSkill())
                  }
                  value={skillInput}
                  className="p-2 border rounded-xl w-full"
                  placeholder="Type a skill and press Enter"
                />

              </div>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(skillsUsed)?(
                  <div className="flex flex-row gap-2">
                     {skillsUsed?.map((skill) => (
                  <div
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-xl text-sm flex items-center gap-1"
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
                ):
                (<div className="flex flex-row gap-2">
                  {JSON.parse(skillsUsed)?.map((skill) => (
                  <div
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-xl text-sm flex items-center gap-1"
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
                )
              }
              </div>
            </div>

            {/* Company Details */}
            <div>
              <h1 className=" text-xl font-semibold">Company Details</h1>
              <label className="block font-medium">Company Name</label>
              <input
                {...register("companyName")}
                className="w-full p-2 border rounded-xl"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block font-medium mb-1">Industry</label>
              <select {...register("industry")} className="w-full p-2 border rounded-xl">
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
                  className={`px-4 py-2 rounded-full border ${isCurrentCompany ? "bg-green-600 text-white" : "bg-white text-gray-700"
                    }`}
                  onClick={() => {
                    setValue("isCurrent", true)
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 rounded-full border ${!isCurrentCompany ? "bg-green-600 text-white" : "bg-white text-gray-700"
                    }`}
                  onClick={() => {

                    setValue("isCurrent", false);
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
                    className={`px-4 py-2 rounded-full border transition ${employementType === type
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-gray-700 border-gray-300"
                      }`}
                    onClick={() => {

                      setValue("employmentType", type);
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

                    <div onClick={() => setValue("noticePeriod", period)} className={`px-4 py-2 rounded-full border ${noticePeriod === period ? "bg-green-600 text-white border-green-600" : "text-gray-700 border-gray-300"}`}>
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

                <input className="p-2 border border-gray-300 rounded-xl w-full" type="date" {...register("startDate")} onChange={(e) => setValue("startDate", e.target.value)} />
              </div>
            </div>

            {!isCurrentCompany && (
              <div>
                <label className="block font-medium">End Date</label>
                <div className="flex gap-2">

                  <input className="p-2 border border-gray-300 rounded-xl w-full" type="date" {...register("endDate")} onChange={(e) => setValue("endDate", e.target.value)} />
                </div>
              </div>
            )}

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={close}
                className="px-4 py-2 border border-gray-300 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-xl"
              >
                Save
              </button>
            </div>
          </form>
        </div>

      </Dialog>


      {jobRoleModalOpen && (
        <DynamicModal
          open={jobRoleModalOpen}
          onClose={() => setjobRoleModalOpen(false)}
          fields={{
            jobRole: Array.isArray(jobRole)? jobRole: JSON.parse(jobRole) || []
          }}
          type={{ jobRole: "multi" }}
          label={{ jobRole: "Please Add Job Roles" }}
          suggestions={{ jobRole: ["manager", "Charted accountant", "Full stack developer", "Front end developer"] }}
          metaData={{
            title: "Job Roles",
            onSubmitFunc: (data) => {
              setValue("jobRole", data.jobRole);
              return "succesfull"
            },
            id: null
          }}
        />
      )}
    </>
  );
};

export default EditExperienceModal;
