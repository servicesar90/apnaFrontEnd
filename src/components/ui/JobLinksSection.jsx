import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const sections = [
  {
    title: "Find Jobs",
    items: [
      "Jobs in Agra", "Jobs in Ajmer", "Jobs in Asansol", "Jobs in Belagavi",
      "Jobs in Ahmedabad", "Jobs in Aligarh", "Jobs in Aurangabad", "Jobs in Bengaluru",
      "Jobs in Ahmednagar", "Jobs in Amritsar", "Jobs in Bareilly", "Jobs in Bhavnagar"
    ],
  },
  {
    title: "Start Hiring",
    items: [
      "Hire in Agra", "Hire in Ajmer", "Hire in Asansol", "Hire in Belagavi",
      "Hire in Ahmedabad", "Hire in Aligarh", "Hire in Aurangabad", "Hire in Bengaluru",
      "Hire in Ahmednagar", "Hire in Amritsar", "Hire in Bareilly", "Hire in Bhavnagar"
    ],
  },
  {
    title: "Popular Jobs",
    items: [
      "Delivery Person Jobs", "Human Resource", "Telecaller / BPO", "Full Time Jobs",
      "Accounts / Finance Jobs", "Backoffice Jobs", "Work from Home Jobs", "Night Shift Jobs",
      "Sales (Field Work)", "Business Development", "Part Time Jobs", "Freshers Jobs"
    ],
  },
];

export default function JobLinksSection() {
  const [expanded, setExpanded] = useState({
    "Find Jobs": false,
    "Start Hiring": false,
    "Popular Jobs": false,
  });

  return (
    <div className="bg-[#F5F5F5] py-10 px-4 md:px-16 space-y-10">
      {sections.map(({ title, items }) => {
        const isExpanded = expanded[title];
        const visibleItems = isExpanded ? items : items.slice(0, 12);

        return (
          <div key={title} className="space-y-4 border-b border-gray-300 pb-6">
            <h3 className="font-semibold text-lg text-[#666666]">{title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 text-[#666666] text-sm">
              {visibleItems.map((item, index) => (
                <a href="#" key={index} className="hover:underline text-[#3C78D8]">{item}</a>
              ))}
            </div>
            <button
              onClick={() => setExpanded(prev => ({ ...prev, [title]: !isExpanded }))}
              className="text-[#36A85C] font-medium text-sm mt-2 flex items-center gap-1 hover:underline"
            >
              View More {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        );
      })}
    </div>
  );
}