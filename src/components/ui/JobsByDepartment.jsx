import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const departmentJobs = [
  "Admin / Back Office / Computer Operator Jobs",
  "Banking / Insurance / Financial Services Jobs",
  "Consulting Jobs",
  "Customer Support Jobs",
  "Advertising / Communication Jobs",
  "Beauty, Fitness & Personal Care Jobs",
  "Content, Editorial & Journalism Jobs",
  "Data Science & Analytics Jobs",
  "Aviation & Aerospace Jobs",
  "Construction & Site Engineering Jobs",
  "CSR & Social Service Jobs",
  "Delivery / Driver / Logistics Jobs",
];

export default function JobsByDepartment() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? departmentJobs : departmentJobs.slice(0, 4);

  return (
    <div className="bg-[#F5F5F5] px-4 md:px-16 py-8 space-y-4 border-b border-gray-300">
      <h3 className="font-semibold text-lg text-[#666666]">Jobs by Department</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-1 text-sm text-[#666666]">
        {visible.map((item, index) => (
          <a key={index} href="#" className="hover:underline text-[#3C78D8]">
            {item}
          </a>
        ))}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm text-[#36A85C] font-medium flex items-center gap-1 hover:underline"
      >
        View More {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
    </div>
  );
}