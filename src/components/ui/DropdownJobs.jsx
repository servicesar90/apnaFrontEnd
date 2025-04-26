import { ChevronRight } from "lucide-react";
import { useState } from "react";

const DropdownJobs = () => {
  const [open, setOpen] = useState(false);

  const leftItems = [
    "Work From Home Jobs",
    "Part Time Jobs",
    "Freshers Jobs",
    "Jobs for women",
    "Full Time Jobs",
    "Night Shift Jobs",
  ];

  const rightItems = [
    "Jobs By City",
    "Jobs By Department",
    "Jobs By Company",
    "Jobs By Qualification",
    "Others",
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="inline-flex items-center gap-1 font-semibold text-[#666666] text-sm hover:text-[#36A85C]">
        Jobs
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-8 z-20 flex bg-white text-[#666666] shadow-lg border rounded-md w-[500px] p-4">
          <div className="w-1/2 space-y-2 pr-4 border-r">
            {leftItems.map((item, idx) => (
              <a key={idx} href="#" className="block text-sm hover:text-[#36A85C]">
                {item}
              </a>
            ))}
          </div>
          <div className="w-1/2 space-y-2 pl-4">
            {rightItems.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="flex justify-between items-center text-sm hover:text-[#36A85C]"
              >
                {item} <ChevronRight size={16} className="text-[#36A85C]" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownJobs;