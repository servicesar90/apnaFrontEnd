import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jobs } from "../../employeeData";
import AppliedModal from "../modals/jobsModal/AppliedModal";
import { employeeData } from "../../employeeData";

const JobDetails = () => {
  const [data, setData] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [showMoreSimilarJobs, setShowMoreSimilarJobs] = useState(false);
  const [showAppliedModal, setShowAppliedModal] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [applied, setApplied] = useState(false);


  const { id } = useParams();
  const user = JSON.stringify(localStorage.getItem("User"))

  useEffect(() => {
    const employeData = employeeData.filter((employee) => employee.id === user.id);
    setEmployee(employeData[0])
  }, [])

  useEffect(() => {
    const newjobs = jobs.filter((job) => job.id == id);
    setData(newjobs[0]);
  }, [id]);

  useEffect(() => {
    if (!employee?.appliedJobs || !id) return;

    const isApplied = employee.appliedJobs.includes(id);
    setApplied(isApplied);
  }, [employee, id]);


  const handleApplyClick = () => {
    if (!employee?.appliedJobs.includes(id)) {
      const updatedEmployee = {
        ...employee,
        appliedJobs: [...(employee?.appliedJobs || []), id],
      };
      setEmployee(updatedEmployee);
    }
    setShowAppliedModal(true);
  };


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

  return (
    <div className="flex justify-center items-start min-h-screen w-full bg-[#f3f4f6] p-6">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white rounded-lg shadow-md p-6 space-y-4">
          <div className="flex items-start gap-4">
            <img
              src="/LOGO.png"
              alt="company logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {data?.jobTitle}
              </h2>
              <p className="text-sm text-gray-600">{data?.companyName}</p>
              <p className="text-sm text-gray-500">{data?.location}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between bg-gray-100 rounded-md p-4">
            <div>
              <p className="text-sm text-gray-500">Fixed</p>
              <p className="text-lg font-semibold text-gray-800">
                {data?.minimumSalary} - {data?.maximumSalary}
              </p>
            </div>

            {data?.incentive &&
              <div>
                <p className="text-sm text-gray-500">Incentive</p>
                <p className="text-lg font-semibold text-gray-800">
                  {data?.incentive}
                </p>
              </div>
            }
            <div>
              <p className="text-sm text-gray-500">Earning Potential</p>
              <p className="text-lg font-semibold text-gray-800">
                {data?.maximumSalary}+ {data?.incentive}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">

            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
              {data?.workLocationType}
            </span>

            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
              {data?.jobType}
            </span>

            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
              {data?.experience}
            </span>

            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
              {data?.payType}
            </span>

            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs">
              {data?.english}
            </span>

          </div>

          <div className="flex gap-4 mt-4">
            <button className="py-2 px-4 bg-gray-200 text-gray-700 font-medium rounded-md">
              Share
            </button>
            <button
              className={`w-full py-2 text-white font-medium rounded-md ${applied ? "bg-gray-400" : "bg-[#1f8267]"}`}
              onClick={handleApplyClick}
              disabled={applied}
            >
              {applied ? <p>Applied</p> : <p>Apply</p>}
            </button>
          </div>

          {showAppliedModal && (
            <AppliedModal onClose={() => setShowAppliedModal(false)} />
          )}

          {data?.urgent && (
            <div className="bg-blue-50 rounded-md p-4 space-y-2 flex justify-between flex-row">
              <div className="flex items-center gap-2 text-orange-600 font-medium">
                Urgently hiring
              </div>
              <div>{data?.walkIn === "yes" && <p>walk In</p>}</div>
              <div className="flex items-center gap-2 text-sm text-blue-700">
                👥 {data?.applicants} applicants
              </div>
            </div>
          )}

          {data?.joiningFee && (
            <div className="space-y-2 mt-4">
              <h3 className="font-semibold text-gray-800">Pay for job</h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                <p>
                  <strong>🧑‍💼 joiningFeeAmount:</strong>{" "}
                  {data.joiningFeeAmount}
                </p>
                <p>
                  <strong>🎓 joiningFeeAmountTime:</strong>{" "}
                  {data.joiningFeeAmountTime}
                </p>
                <p>
                  <strong>📂 joiningFeesAmountReason:</strong>{" "}
                  {data.joiningFeesAmountReason}
                </p>
                <p>
                  <strong>🚻 joiningFeesAmountReasonDetail:</strong>{" "}
                  {data.joiningFeesAmountReasonDetail}
                </p>
              </div>
            </div>
          )}


          <div className="space-y-2 mt-4">
            <h3 className="font-semibold text-gray-800">Job Role</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              <p>
                <span className="font-semibold"> 📍 Work location: </span>{data?.location}
              </p>
              <p>
                <span className="font-semibold">🏢 Department:</span> {data?.jobTitle}
              </p>
              <p>
                <span className="font-semibold">🔧 Role:</span>{data?.jobTitle}
              </p>
              <p>
                <span className="font-semibold">🕒 Employment type:</span> {data?.jobType}
              </p>
              <p>
                <span className="font-semibold">🌗 Shift:</span> {data?.nightShift ? <span>Night Shift</span> : <span>Day Shift</span>}
              </p>
            </div>
          </div>


          {data?.walkIn === "yes" && (

            <div className="space-y-2 mt-4">
              <h3 className="font-semibold text-gray-800">WalkIn Details</h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                <p>
                  <strong>📍 walkIn:</strong>{" "}
                  {data.walkIn}
                </p>
                <p>
                  <strong>🏢 walkInAddress:</strong> {data.walkInAddress}
                </p>
                <p>
                  <strong>🔧 walkInEndDate:</strong> {data.walkInEndDate}
                </p>
                <p>
                  <strong>🕒 walkInStartTime:</strong> {data.walkInStartTime}
                </p>
                <p>
                  <strong> walkInInstructions: </strong>{" "}
                  {data.walkInInstructions}
                </p>

              </div>
            </div>

          )}

          {data?.otherRecruiterName &&
            <div className="space-y-2 mt-4">
              <h3 className="font-semibold text-gray-800">Contact</h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
                <p>
                  <strong>contactPreference: </strong>{" "}
                  {data.contactPreference}
                </p>
                <p>
                  <strong> RecruiterName: </strong>{" "}
                  {data.otherRecruiterName}
                </p>
                <p>
                  <strong> RecruiterNumber: </strong>{" "}
                  {data.otherRecruiterNumber}
                </p>
                <p>
                  <strong>🌗 RecruiterEmail:</strong>{" "}
                  {data.otherRecruiterEmail}
                </p>
                <p>
                  <strong>🌗 candidateType:</strong> {data.candidateType}
                </p>
                <p>
                  <strong>🌗 notificationPreference: </strong>{" "}
                  {data.notificationPreference}
                </p>
              </div>
            </div>
          }


          <div className="space-y-2 mt-4">
            <h3 className="font-semibold text-gray-800">Job Description</h3>
            <div className="text-sm text-gray-700">
              <p>
                {showFullDescription
                  ? data?.jobDescription
                  : data?.jobDescription?.slice(0, 200)}
                ...
              </p>
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-blue-600 text-sm mt-2"
              >
                {showFullDescription ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <h3 className="font-semibold text-gray-800">Job Requirements</h3>
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              <p>
                <strong>🧑‍💼 Experience:</strong> {data?.experience}
              </p>
              <p>
                <strong>🎓 Education:</strong> {data?.education}
              </p>
              <p>
                <strong>📂 Past Role/Category Experience:</strong>{" "}
                {data?.jobTitle}
              </p>
              <p>
                <strong>🚻 Gender:</strong> {data?.gender}
              </p>
              <p>
                <strong>🌐 English Level:</strong> {data?.english}
              </p>
            </div>
          </div>

          <div className="p-4 space-y-2 mt-4">
            <h3 className="font-semibold text-gray-800">About Company</h3>
            <div className="text-sm text-gray-700">
              <p>{data?.aboutCompany || "No company information provided."}</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                FAQs about this job
              </h3>
              <button
                onClick={() => setShowAllFaqs(!showAllFaqs)}
                className="text-blue-600 text-sm"
              >
                {showAllFaqs ? "Hide All" : "Show All"}
              </button>
            </div>
            <div className="space-y-3">
              {(showAllFaqs ? faqData : faqData.slice(0, 1)).map(
                (faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-md p-4"
                  >
                    <p className="font-medium text-gray-700">{faq.question}</p>
                    <p className="mt-2 text-sm text-gray-600">{faq.answer}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3 space-y-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Similar Jobs
            </h3>
            {jobs
              .filter(
                (job) =>
                  job.id !== data?.id &&
                  (job.role === data?.role ||
                    job.location === data?.location ||
                    job.tags?.some((tag) => data?.tags?.includes(tag)))
              )
              .slice(0, showMoreSimilarJobs ? 10 : 3)
              .map((job) => (
                <div
                  key={job.id}
                  className="border border-gray-200 rounded-md p-3 mb-3 hover:shadow transition cursor-pointer"
                >
                  <h4 className="text-sm font-semibold text-gray-800">
                    {job.title}
                  </h4>
                  <p className="text-xs text-gray-600">{job.company}</p>
                  <p className="text-xs text-gray-500">{job.location}</p>
                  <p className="text-xs text-gray-700 font-medium mt-1">
                    {job.salary}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {job.tags?.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            <button
              onClick={() => setShowMoreSimilarJobs(!showMoreSimilarJobs)}
              className="text-blue-600 text-sm mt-2"
            >
              {showMoreSimilarJobs ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
