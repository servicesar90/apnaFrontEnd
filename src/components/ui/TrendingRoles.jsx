const trendingRoles = [
    { role: "Delivery Person", openings: "3,210" },
    { role: "Business Development", openings: "2,526" },
    { role: "Retail / Counter Sales", openings: "1,594" },
    { role: "Marketing", openings: "1,210" },
    { role: "Logistics/ Warehouse", openings: "1,151" },
    { role: "IT Support", openings: "121" },
    { role: "Hardware & Network", openings: "111" },
    { role: "Maid / Baby Care", openings: "109" },
    { role: "Electrician / Wireman", openings: "101" },
    { role: "AC Technician", openings: "101" },
  ];
  
  export default function TrendingRoles() {
    return (
      <div className="py-16 bg-[#F5F5F5]">
        <h2 className="text-center text-2xl font-bold text-[#666666] mb-8">
          Trending job roles on Apna
        </h2>
  
        <div className="overflow-x-auto">
          <div className="flex gap-4 px-4 md:px-8 pb-4 min-w-[768px]">
            {trendingRoles.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-60 border rounded-xl px-4 py-4 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-gray-100 p-2 rounded-full">
                    {/* Placeholder for icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-[#666666]">{item.role}</h3>
                </div>
                <p className="text-sm text-gray-500">{item.openings} openings</p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="text-center mt-6">
          <button className="px-6 py-3 border-2 border-[#3C78D8] text-[#3C78D8] rounded-xl font-semibold hover:bg-[#E0F7FA] transition">
            View all →
          </button>
        </div>
      </div>
    );
  }