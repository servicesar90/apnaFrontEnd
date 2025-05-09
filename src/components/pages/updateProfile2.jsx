
import { Pencil, Plus } from "lucide-react";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const HomePageCandidateProfile = () => {
    const [modalName, setModalName] = useState(null);
    const [experienceIndex, setExperienceIndex] = useState(null);
    // const [selectedEducation, setSelectedEducation] = useState(null);


    const handleEditEducation = (edu) => {
        setSelectedEducation(edu);
        setModalName("education");
    };


    const user = JSON.parse(localStorage.getItem("User"));

    const employee = useOutletContext();

    return (
        <div className="overflow-hidden bg-gray-50">
            {/* Navbar */}

            <main className="flex flex-col items-end px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
                {/* Profile Card */}
                <section className="self-center px-9 pt-4 pb-11 w-full bg-white rounded-3xl max-w-[1274px] max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="w-[15%] max-md:ml-0 max-md:w-full">
                            <img
                                src={employee?.profileImage || "/user.png"}
                                alt="avatar"
                                className="rounded-full w-20 h-20 object-cover"
                            />
                        </div>
                        <div className="ml-5 w-[85%] max-md:ml-0 max-md:w-full">
                            <div className="w-full text-gray-500 max-md:mt-10 max-md:max-w-full">
                                <div className="flex flex-wrap gap-10 max-md:max-w-full">
                                    <div className="flex flex-col items-start max-md:max-w-full">
                                        <h1 className="text-2xl font-bold text-black">
                                            {employee?.fullName}
                                        </h1>
                                        <h2 className="self-stretch mt-1 text-xl font-semibold max-md:max-w-full">
                                            {employee?.EmployeeExperiences[0]?.jobTitle}
                                        </h2>
                                        <p className="text-lg font-medium">
                                            at {employee?.EmployeeExperiences[0]?.companyName}
                                        </p>
                                    </div>
                                    <div className="grow shrink self-end mt-16 text-base w-[194px] max-md:mt-10">
                                        <span className="text-[rgba(118,127,140,1)]">
                                            Profile last updated -
                                        </span>
                                        <span className="font-medium text-base text-[rgba(118,127,140,1)]">
                                            {employee?.lastUpdated || "N/A"}
                                        </span>
                                    </div>
                                </div>
                                <hr className="shrink-0 mt-6 max-w-full h-px border border-gray-500 border-solid w-[993px] max-md:mr-0.5" />
                                <div className="flex flex-wrap gap-5 justify-between mt-6 max-w-full w-[687px]">
                                    <div className="flex flex-col items-start text-base">
                                        <div className="flex gap-1.5 self-stretch">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/ce5f928b21f342e9b3bb55b57f707984/11693f09a78e501b0a6ea6fccfd459752995cf7e?placeholderIfAbsent=true"
                                                className="object-contain shrink-0 self-start aspect-square w-[18px]"
                                                alt="Location icon"
                                                aria-hidden="true"
                                            />
                                            <div className="grow shrink w-[121px]">
                                                {employee?.currentLocation || "Location unavailable"}
                                            </div>
                                        </div>
                                        <div className="flex gap-1.5 mt-5">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/ce5f928b21f342e9b3bb55b57f707984/33378f39a63175cacea898f9a234ce2bc3df2b99?placeholderIfAbsent=true"
                                                className="object-contain shrink-0 self-start aspect-square w-[17px]"
                                                alt="Experience icon"
                                                aria-hidden="true"
                                            />
                                            <div>{employee?.EmployeeExperiences[0]?.experience || "Experience not provided"}</div>
                                        </div>
                                        <div className="flex gap-2 mt-5 whitespace-nowrap">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/ce5f928b21f342e9b3bb55b57f707984/77b624fa3d1444744414d3b0fefaf0b5f9762436?placeholderIfAbsent=true"
                                                className="object-contain shrink-0 self-start aspect-square w-[17px]"
                                                alt="Salary icon"
                                                aria-hidden="true"
                                            />
                                            <div className="flex gap-1">
                                                {employee?.EmployeeExperiences[0]?.currentSalary ? `₹ ${employee.EmployeeExperiences[0].currentSalary}` : "Salary not shared"}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-base">
                                        <div className="flex gap-3 items-start self-start whitespace-nowrap">
                                            <div className="flex gap-1.5">
                                                <img
                                                    src="https://cdn.builder.io/api/v1/image/assets/ce5f928b21f342e9b3bb55b57f707984/4190c31e53b04caeddaa10bdfba680a38436cebb?placeholderIfAbsent=true"
                                                    className="object-contain shrink-0 aspect-square w-[18px]"
                                                    alt="Phone icon"
                                                    aria-hidden="true"
                                                />
                                                <div>{user?.phone || "N/A"}</div>
                                            </div>
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/ce5f928b21f342e9b3bb55b57f707984/c21485404cc36e2da8ac503f8365b68db4de17e9?placeholderIfAbsent=true"
                                                className="object-contain shrink-0 aspect-square w-[18px]"
                                                alt="Verified icon"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="flex gap-1.5 mt-5 text-sm whitespace-nowrap">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/ce5f928b21f342e9b3bb55b57f707984/41bcd0ca365a00b8f64ef961dafb1100ac02ddd4?placeholderIfAbsent=true"
                                                className="object-contain shrink-0 aspect-square w-[18px]"
                                                alt="Email icon"
                                                aria-hidden="true"
                                            />
                                            <div className="grow shrink w-[172px]">
                                                {employee?.email || "No email"}
                                            </div>
                                        </div>
                                        <div className="flex gap-2 mt-5 max-md:mr-2">
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/ce5f928b21f342e9b3bb55b57f707984/8aad800550581efaa0e2118479761cf76ea3579b?placeholderIfAbsent=true"
                                                className="object-contain shrink-0 aspect-square w-[18px]"
                                                alt="Notice period icon"
                                                aria-hidden="true"
                                            />
                                            <div className="grow shrink w-[161px]">
                                                {employee?.noticePeriod || "No notice period info"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="self-stretch mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        {/* Quick Links Sidebar */}
                        <div className="w-[23%] max-md:ml-0 max-md:w-full">
                            <aside className="flex flex-col px-6 py-9 mx-auto w-full bg-white rounded-[47px] max-md:px-5 max-md:mt-10">
                                <div className="flex gap-5 justify-between">
                                    <div className="flex flex-col text-black">
                                        <h2 className="self-start text-xl font-extrabold">
                                            Quick links
                                        </h2>
                                        <nav className="flex flex-col items-start pl-3.5 mt-12 text-lg max-md:mt-10">
                                            <a href="#resume">Resume</a>
                                            <a href="#resume-headline" className="mt-12 max-md:mt-10">
                                                Resume headline
                                            </a>
                                            <a href="#key-skills" className="mt-11 max-md:mt-10">
                                                Key skills
                                            </a>
                                            <a href="#employment" className="mt-11 max-md:mt-10">
                                                Employment
                                            </a>
                                        </nav>
                                    </div>
                                    <div className="flex flex-col self-end mt-16 text-lg text-indigo-400 whitespace-nowrap max-md:mt-10">
                                        <button className="text-indigo-400">Update</button>
                                        <button className="self-end mt-40 max-md:mt-10">
                                            Add
                                        </button>
                                    </div>
                                </div>
                                <div className="flex gap-10 self-start mt-11 ml-3.5 text-lg max-md:mt-10 max-md:ml-2.5">
                                    <nav className="flex flex-col items-start text-black">
                                        <a href="#education">Education</a>
                                        <a href="#it-skills" className="mt-11 max-md:mt-10">
                                            IT skills
                                        </a>
                                        <a href="#projects" className="mt-11 max-md:mt-10">
                                            Projects
                                        </a>
                                        <a href="#profile-summary" className="self-stretch mt-11 max-md:mt-10 max-md:mr-2.5">
                                            Profile summary
                                        </a>
                                        <a href="#accomplishments" className="self-stretch mt-11 max-md:mt-10">
                                            Accomplishments
                                        </a>
                                        <a href="#career-profile" className="mt-11 max-md:mt-10">
                                            Career profile
                                        </a>
                                        <a href="#personal-details" className="mt-10 max-md:mt-10">
                                            Personal Details
                                        </a>
                                    </nav>
                                    <button className="self-start text-indigo-400">
                                        Add
                                    </button>
                                </div>
                            </aside>
                        </div>

                        {/* Main Content Area */}
                        <div className="ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                            <div className="mt-4 w-full max-md:mt-10 max-md:max-w-full">
                                {/* Resume Section */}
                                <section id="resume" className="px-7 pt-6 pb-10 mr-3 w-full text-lg bg-white rounded-3xl max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                                    <div className="flex flex-wrap gap-5 justify-between font-medium text-black max-md:max-w-full">
                                        <div className="flex flex-col">
                                            <h2 className="self-start text-xl">Resume</h2>
                                            <p className="mt-7">{employee?.fullName} CV New-1.pdf</p>
                                            <p className="mt-2 font-light text-gray-500 max-md:mr-2.5">
                                                Uploaded on Nov 27,2024
                                            </p>
                                        </div>
                                        <img
                                            src="https://cdn.builder.io/api/v1/image/assets/ce5f928b21f342e9b3bb55b57f707984/02b637c4982174df078d02d53bb2a12386f7b1f6?placeholderIfAbsent=true"
                                            className="object-contain shrink-0 self-end mt-12 max-w-full aspect-[2.48] w-[114px] max-md:mt-10"
                                            alt="Download resume"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center items-center px-20 py-10 mt-6 rounded-2xl border border-gray-500 border-dashed max-md:px-5 max-md:max-w-full">
                                        <div className="flex flex-col max-w-full w-[389px]">
                                            <button className="self-center px-5 py-2.5 max-w-full text-indigo-600 rounded-3xl border border-indigo-600 border-solid w-[162px]">
                                                Update resume
                                            </button>
                                            <p className="mt-1.5 font-light text-gray-500">
                                                Supported Formats: doc, docx, rtf, pdf,upto 2 MB{" "}
                                            </p>
                                        </div>
                                    </div>
                                </section>


                                {/* Key Skills */}


                                {/* Employment History */}
                                <section id="employment" className="flex flex-col items-start px-7 py-3 mt-5 w-full bg-white rounded-3xl max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                                    <div className="flex flex-wrap gap-5 justify-between items-start self-stretch max-md:max-w-full">
                                        <h2 className="text-xl font-semibold text-black">
                                            Experience
                                        </h2>
                                        <button onClick={() => {
                                            setModalName("editExperience")
                                            setExperienceIndex(null);
                                        }} className="mt-5 text-base text-blue-600">
                                            Add Experience
                                        </button>
                                    </div>

                                    {employee?.EmployeeExperiences.map((experienc, index) => (
                                        <div>

                                            <div className="flex flex-wrap gap-6 mt-3 text-xl font-semibold text-gray-500">
                                                <h3 className="flex-auto text-black max-md:max-w-full">
                                                    {experienc.jobTitle}
                                                </h3>
                                                <button onClick={() => {
                                                    setModalName("editExperience")
                                                    setExperienceIndex(index)
                                                }}>
                                                    <img
                                                        src="https://cdn.builder.io/api/v1/image/assets/ce5f928b21f342e9b3bb55b57f707984/e5ffdb223eb4a7c49b80f238f4e0da5a767e4d8b?placeholderIfAbsent=true"
                                                        className="object-contain shrink-0 self-start aspect-square w-[22px]"
                                                        alt="Edit"
                                                        aria-label="Edit employment details"
                                                    />
                                                </button>
                                            </div>
                                            <p className="mt-1 text-xl font-semibold text-black">
                                                {experienc.companyName}
                                            </p>
                                            <p className="mt-1.5 text-base text-black">
                                                {experienc.jobRole} | {experienc.industry}
                                            </p>

                                            <p className="mt-1.5 text-base text-black">
                                                <span className="bg-gray-200 px-2 py-0.5 rounded-full">{experienc.startDate}- {experienc.endDate ? <span>{experienc.
                                                    endDate}</span> : <span>present</span>}</span>
                                                <span className="bg-gray-200 px-2 py-0.5 rounded-full">{experienc.employementType}</span>
                                            </p>
                                            <p className="mt-2.5 text-base text-black">
                                                3 Months Notice Period
                                            </p>
                                            <p className="self-stretch mt-2.5 mr-14 text-base text-black max-md:mr-2.5 max-md:max-w-full">
                                                Leading a team of over 5 recruiters and 1 Team Manager
                                                nationwide. managing P&L responsibilities; engaging
                                                stakeholders for both new and existing business management.
                                                Ensuring team performance through KPI setting,ongoing
                                                training ,and accountability. overseeing both IT and Non-IT
                                                hiring...
                                            </p>
                                            <p className="self-stretch mt-4 text-base text-black max-md:max-w-full">
                                                <span className="font-medium">Skills:</span> {experienc.skillsUsed?.map((skill, index) => (<p key={index}>{skill}</p>))}
                                            </p>
                                        </div>
                                    ))}

                                </section>

                                <section id="key-skills" className="flex flex-col items-start py-8 pr-20 pl-8 mt-5 w-full text-lg text-gray-500 bg-white rounded-3xl max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                                    <div className="flex gap-4 text-xl font-semibold text-black">
                                        <h2>Key skills</h2>
                                        <button>
                                            <img
                                                src="https://cdn.builder.io/api/v1/image/assets/ce5f928b21f342e9b3bb55b57f707984/e5ffdb223eb4a7c49b80f238f4e0da5a767e4d8b?placeholderIfAbsent=true"
                                                className="object-contain shrink-0 self-start aspect-square w-[22px]"
                                                alt="Edit"
                                                aria-label="Edit key skills"
                                            />
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap flex-col  gap-2">
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
                                            <p className="text-sm px-8 text-gray-400 italic">No skills listed yet.</p>
                                        )}
                                    </div>

                                </section>
                                {/* Education */}

                                <section onClick={() => setModalName("yearExperience")} id="experience year" className="flex flex-wrap gap-5 justify-between px-4 py-8 mt-4 ml-3 bg-white rounded-3xl max-md:max-w-full">

                                    <p className="font-medium">Total Years of experience:</p>
                                    <p className="text-gray-800">{employee?.years} years and {employee?.months} months</p>

                                </section>

                                <section onClick={() => setModalName("salary")} id="salary" className="flex flex-wrap gap-5 justify-between px-4 py-8 mt-4 ml-3 bg-white rounded-3xl max-md:max-w-full">

                                    <p className="font-medium">Current monthly salary:</p>
                                    <p className="text-gray-800"> {employee?.EmployeeExperiences[0].currentSalary}</p>

                                </section>


                                <section id="education" className="flex flex-wrap gap-5 justify-between px-4 py-8 mt-4 ml-3 bg-white rounded-3xl max-md:max-w-full">
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
                                        <div className="bg-black rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">
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

                                </section>

                                <section onClick={() => setModalName("certification")} id="certification" className="flex flex-wrap gap-5 justify-between px-4 py-8 mt-4 ml-3 bg-white rounded-3xl max-md:max-w-full">

                                    <p className="text-gray-700">Certification</p>
                                    <p className="text-gray-400 italic">+ Add</p>

                                </section >

                                <section id="language" className="flex flex-wrap gap-5 justify-between px-4 py-8 mt-4 ml-3 bg-white rounded-3xl max-md:max-w-full">

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
                                </section>

                                {/* Personal Details */}
                                <section id="other-details" className="px-5 py-8 mt-4 max-w-full bg-white rounded-3xl w-[955px] max-md:pl-5">
                                    <div className="flex flex-wrap gap-5 justify-between text-black max-md:max-w-full">
                                        <div className="flex flex-col items-start text-xl font-semibold">
                                            <div className="flex gap-5">
                                                <h2 className="basis-auto">Other details</h2>

                                            </div>

                                            <div onClick={() => setModalName("preferredJobs")} className="flex justify-center items-left flex-col text-sm bg-gray-50 px-4 py-2 rounded-lg">
                                                <p className="text-gray-800 font-semibold text-lg">Preferred Job Title/Role</p>

                                                <ul className="flex flex-row gap-6">
                                                    {employee?.preferredJobRoles?.map((role, index) => (
                                                        <li key={index} className="text-lg font-semibold text-sm text-gray-500">{role}</li>
                                                    ))}
                                                </ul>

                                            </div>

                                            <div onClick={() => setModalName("location")} className="flex justify-center items-left flex-col text-sm bg-gray-50 px-4 py-2 rounded-lg">
                                                <p className="text-gray-800 font-semibold text-lg">Location</p>
                                                <div className="flex flex-row gap-6">

                                                    <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.currentLocation}</h2>
                                                    <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.hometown}</h2>

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



                                                <div onClick={() => setModalName("basicDetails")} className="bg-white rounded-xl mt-4 p-4 shadow-md space-y-4 w-full">

                                                    <div className="flex justify-center items-left flex-col text-sm bg-gray-50 px-4 py-2 rounded-lg">
                                                        <p className="text-gray-800 font-semibold text-lg">Basic Details</p>
                                                        <div className="flex flex-row gap-6 flex-wrap">

                                                            <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.name}</h2>
                                                            <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.email}</h2>
                                                            <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.number}</h2>
                                                            <h2 className="text-lg font-semibold text-sm text-gray-500">{employee?.gender}</h2>
                                                            <h2 className=" font-semibold text-sm text-gray-500">{employee?.dob}</h2>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        </div>

                                    </div>


                                </section>

                            </div>
                        </div>
                    </div>
                </div>




            </main>

            {/* Footer */}

        </div>
    );
}

export default HomePageCandidateProfile;