import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import AppliedModal from "../modals/jobsModal/AppliedModal";
import { applyJobs } from "../../API/ApiFunctions";
import {
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
} from "lucide-react";

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

const JobDetails = () => {
  const [data, setData] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [showAppliedModal, setShowAppliedModal] = useState(false);
  const [applied, setApplied] = useState(false);
  const [appliedData, setAppliedData] = useState(null);

  const { id } = useParams();
  const { jobs } = useOutletContext();
  const user = JSON.parse(localStorage.getItem("User"));

  useEffect(() => {
    const newjobs = jobs?.filter((job) => job.id == id);
    setData(newjobs?.[0]);
  }, [jobs]);

  useEffect(() => {
    const alreadyApplied = data?.JobApplications.filter(
      (ids) => ids.employeeId == user?.id
    );

    if (alreadyApplied?.length > 0) {
      setApplied(true);
      setAppliedData(alreadyApplied[0]);
    } else {
      setApplied(false);
    }
  }, [data]);

  const handleApplyClick = async () => {
    const response = await applyJobs(id);
    if (response) {
      setShowAppliedModal(true);
    } else {
      alert("could not apply");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full md:w-4/6 self-center  p-6">
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-white rounded-lg shadow-xl border p-6 space-y-4">
          <div className="flex items-start gap-4">
            <img
              src="/LOGO.png"
              alt="company logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <p className="text-16 font-semibold text-gray-800">
                {data?.jobTitle}
              </p>
              <p className="text-14 font-medium text-gray-800">
                {data?.companyName}
              </p>
              <p className="text-14  text-gray-650">{data?.location}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between bg-light rounded-md p-4">
            <div className="flex flex-col w-full gap-4">
              <div className=" text-12 text-gray-80">
                {data?.JobApplications.length} Applicant Applied
              </div>

              <div className="flex flex-row items-between justify-between w-full">
                <div>
                  <p className="text-14 text-gray-650">Fixed</p>
                  <p className="text-14 font-medium text-gray-800">
                    {data?.minimumSalary} - {data?.maximumSalary}
                  </p>
                </div>

                {data?.incentive && (
                  <div>
                    <p className="text-14 text-gray-650">Incentive</p>
                    <p className="text-14 font-medium text-gray-800">
                      {data?.incentive}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-14 text-gray-650">Earning Potential</p>
                  <p className="text-14 font-medium text-gray-800">
                    {data?.maximumSalary}+ {data?.incentive}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-light text-gray-800 px-2 py-1 rounded-lg text-14">
              {data?.workLocationType}
            </span>

            <span className="bg-light text-gray-800 px-2 py-1 rounded-lg text-14">
              {data?.jobType}
            </span>

            <span className="bg-light text-gray-800 px-2 py-1 rounded-lg text-14">
              {data?.experience}
            </span>

            <span className="bg-light text-gray-800 px-2 py-1 rounded-lg text-14">
              {data?.payType}
            </span>

            <span className="bg-light text-gray-800 px-2 py-1 rounded-lg text-14">
              {data?.english}
            </span>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="py-2 px-3 bg-secondary font-medium rounded-md">
              <p className="text-white">Share</p>
            </button>
            <button
              className={`w-full py-2 text-white font-medium rounded-md ${
                applied ? "bg-gray-400" : "bg-secondary"
              }`}
              onClick={handleApplyClick}
              disabled={applied}
            >
              {applied ? <p>{appliedData.status}</p> : <p>Apply</p>}
            </button>
          </div>

          {showAppliedModal && (
            <AppliedModal onClose={() => setShowAppliedModal(false)} />
          )}

          {data?.urgent && (
            <div className="bg-light rounded-lg p-4 space-y-2 flex justify-between flex-row">
              <div className="flex items-center gap-2 text-14 text-orange-600 font-medium">
                Urgently hiring
              </div>
              <div className="text-14 text-gray-650">
                {data?.walkIn === "yes" && <p>walk In</p>}
              </div>
              <div className="flex items-center gap-2 text-14 text-gray-650">
                {data?.applicants} applicants
              </div>
            </div>
          )}

          {/* joining fee section */}

          {data?.joiningFee && (
            <div className="space-y-2 mt-4">
              <h3 className="text-16 font-semibold text-gray-800">
                Pay For Job
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-14 text-gray-800">
                <p className="flex gap-1.5 items-center">
                  <span>
                    <IndianRupee className="text-secondary" size={18} />
                  </span>
                  <span className="font-medium">Joining Fee Amount :</span>
                  <span className="text-14 text-gray-650">
                    {data.joiningFeeAmount}
                  </span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <span>
                    <Timer className="text-secondary" size={18} />
                  </span>
                  <span className="font-medium">Joining Fee Amout Time :</span>
                  <span className="text-14 text-gray-650">
                    {data.joiningFeeAmountTime}
                  </span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <span>
                    <CalendarArrowUp className="text-secondary" size={18} />
                  </span>
                  <span className="font-medium">
                    Joining Fee Amount Reason :
                  </span>
                  <span className="text-14 text-gray-650">
                    {data.joiningFeesAmountReason}
                  </span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <span>
                    <Users className="text-secondary" size={18} />
                  </span>
                  <span className="font-medium">
                    Joining Fee Reason Detail :
                  </span>
                  <span className="text-14 text-gray-650">
                    {data.joiningFeesAmountReasonDetail}
                  </span>
                </p>
              </div>
            </div>
          )}

          {/* Job Role */}

          <div className="space-y-2 mt-4">
            <h3 className="text-16 font-semibold text-gray-800">Job Role</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-14 text-gray-800 ">
              <p className="flex gap-1.5 items-center">
                <span>
                  {" "}
                  <MapPin className="text-secondary" size={18} />
                </span>
                <span className="font-medium">Work location :</span>
                <span className="text-14 text-gray-650">{data?.location}</span>
              </p>
              <p className="flex gap-1.5 items-center">
                <span>
                  {" "}
                  <Building className="text-secondary" size={18} />
                </span>{" "}
                <span className="font-medium">Department :</span>
                <span className="text-14 text-gray-650">{data?.jobTitle}</span>
              </p>
              <p className="flex gap-1.5 items-center">
                <span>
                  {" "}
                  <Briefcase className="text-secondary" size={18} />
                </span>
                <span className="font-medium"> Role :</span>
                <span className="text-14 text-gray-650">{data?.jobTitle}</span>
              </p>
              <p className="flex gap-1.5 items-center">
                <span>
                  {" "}
                  <Timer className="text-secondary" size={18} />
                </span>{" "}
                <span className="font-medium">Employment type :</span>
                <span className="text-14 text-gray-650"> {data?.jobType}</span>
              </p>
              <p className="flex gap-1.5 items-center">
                <span>
                  <SunMoon className="text-secondary" size={18} />
                </span>{" "}
                <span className="font-medium">Shift :</span>{" "}
                {data?.nightShift ? (
                  <span className="text-14 text-gray-650">Night Shift</span>
                ) : (
                  <span className="text-14 text-gray-650">Day Shift</span>
                )}
              </p>
            </div>
          </div>

          {/* WalkIn Details */}

          {data?.walkIn === "yes" && (
            <div className="space-y-2 mt-4">
              <h3 className="text-16 font-semibold text-gray-800">
                WalkIn Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-14 text-gray-800">
                <p className="flex gap-1.5 items-center">
                  <span>
                    <MapPin className="text-secondary" size={18} />
                  </span>
                  <span className="font-medium">WalkIn :</span>
                  <span className="text-14 text-gray-650">{data.walkIn}</span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <span>
                    <Building className="text-secondary" size={18} />
                  </span>
                  <span className="font-medium">WalkIn Address :</span>
                  <span className="text-14 text-gray-650">
                    {data.walkInAddress}
                  </span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <span>
                    <Timer className="text-secondary" size={18} />
                  </span>
                  <span className="font-medium">WalkIn End Date :</span>
                  <span className="text-14 text-gray-650">
                    {data.walkInEndDate}
                  </span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <span>
                    <Timer className="text-secondary" size={18} />
                  </span>
                  <span className="font-medium">walkIn Start Time:</span>
                  <span className="text-14 text-gray-650">
                    {data.walkInStartTime}
                  </span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <span>
                    <BookUser className="text-secondary" size={18} />
                  </span>
                  <span className="font-medium">walkIn Instruction:</span>
                  <span className="text-14 text-gray-650">
                    {data.walkInInstructions}
                  </span>
                </p>
              </div>
            </div>
          )}

          {/* other Recruiter Details */}

          {data?.otherRecruiterName && (
            <div className="space-y-2 mt-4">
              <h3 className="text-16 font-semibold text-gray-800">Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-14 text-gray-800">
                <p className="flex gap-1.5 items-center">
                  <span className="font-medium">Contact Preference :</span>
                  <span className="text-14 text-gray-650">
                    {data.contactPreference}
                  </span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <span className="font-medium">Recruiter Name :</span>
                  <span className="text-14 text-gray-650">
                    {data.otherRecruiterName}
                  </span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <span className="font-medium">Recruiter Number :</span>
                  <span className="text-14 text-gray-650">
                    {data.otherRecruiterNumber}
                  </span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <span className="font-medium">Recruiter Email :</span>
                  <span className="text-14 text-gray-650">
                    {data.otherRecruiterEmail}
                  </span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <span className="font-medium">Candidate Type :</span>
                  <span className="text-14 text-gray-650">
                    {data.candidateType}
                  </span>
                </p>
                <p className="flex gap-1.5 items-center">
                  <span className="font-medium">Notification Perference :</span>
                  <span className="text-14 text-gray-650">
                    {data.notificationPreference}
                  </span>
                </p>
              </div>
            </div>
          )}

          {/* Job Description */}

          <div className="space-y-2 mt-4">
            <h3 className="text-16 font-semibold text-gray-800">Job Description</h3>
            <div className="text-14 text-gray-650">
              <p className=" flex flex-wrap text-14 text-gray-650">
                {showFullDescription
                  ? data?.jobDescription
                  : data?.jobDescription?.slice(0, 200)}
                ...
              </p>
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-secondary text-14 mt-2"
              >
                {showFullDescription ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>

          {/* Job Requirements */}

          <div className="space-y-2 mt-4">
            <h3 className="text-16 font-semibold text-gray-800">Job Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-14 text-gray-800 ">
              <p className="flex gap-1.5 items-center">
                <span>
                  <Briefcase className="text-secondary" size={18} />
                </span>
                <span className="font-medium">Experience :</span>
                <span className="text-14 text-gray-650">{data?.experience}</span>
              </p>
              <p className="flex gap-1.5 items-center">
                <span>
                  <GraduationCap className="text-secondary" size={18} />
                </span>
                <span className="font-medium">Education :</span>
                <span className="text-14 text-gray-650">{data?.education}</span>
              </p>
              <p className="flex gap-1.5 items-center">
                <span> 
                  <Briefcase className="text-secondary" size={18} />
                </span>
                <span className="font-medium">Past Role :</span>
                <span className="text-14 text-gray-650">{data?.jobTitle}</span>
              </p>
              <p className="flex gap-1.5 items-center">
                <span>
                  <Users className="text-secondary" size={18} />
                </span>
                <span className="font-medium">Gender :</span>
                <span className="text-14 text-gray-650">{data?.gender}</span>
              </p>
              <p className="flex gap-1.5 items-center">
                 <span>
                  <CircleGauge className="text-secondary" size={18} />
                </span>
                <span className="font-medium">English Level :</span>
                <span className="text-14 text-gray-650">{data?.english}</span>
              </p>
            </div>
          </div>


          {/* About Company */}
          
          <div className="space-y-2 mt-4">
            <h3 className="text-16 font-semibold text-gray-800">About Company</h3>
            <div className="text-14 text-gray-650">
              <p className=" flex flex-wrap text-14 text-gray-650">{data?.aboutCompany || "No company information provided."}</p>
            </div>
          </div>



           
          {/* FAQ Section */}
          
          {/* <div className="mt-6">
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
          </div> */}
        </div>


           {/* Similar Jobs */}


        {/* <div className="w-full lg:w-1/3 space-y-4">
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
        </div> */}
      </div>
    </div>
  );
};

export default JobDetails;
