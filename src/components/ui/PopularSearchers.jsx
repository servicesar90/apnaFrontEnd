import React from "react";

const searches = [
  {
    title: "Jobs for Freshers",
    trending: "#1",
    image: "",
  },
  {
    title: "Work from home Jobs",
    trending: "#2",
    image: "",
  },
  {
    title: "Part time Jobs",
    trending: "#3",
    image: "",
  },
  {
    title: "Jobs for Women",
    trending: "#4",
    image: "",
  },
  {
    title: "Full time Jobs",
    trending: "#5",
    image: "",
  },
];

export default function PopularSearches() {
  return (
    <div className="py-12 px-4 md:px-12 bg-[#F5F5F5]">
      <h2 className="text-3xl font-bold text-[#666666] mb-8">Popular Searches on Apna</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {searches.map((item, index) => (
          <div key={index} className="border rounded-2xl p-6 shadow hover:shadow-md transition bg-white">
            <p className="text-sm text-gray-500 mb-2">TRENDING AT {item.trending}</p>
            <h3 className="text-lg font-semibold text-[#666666] mb-4">{item.title}</h3>
            <img src={item.image} alt={item.title} className="h-40 object-contain mx-auto" />
            <a
              href="#"
              className="text-[#3C78D8] text-sm font-medium mt-4 inline-block hover:underline"
            >
              View all →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}