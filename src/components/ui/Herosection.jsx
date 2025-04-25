import React from "react";
import PopularSearches from "./PopularSearchers";
import TopCompanies from "./TopCompanies";
import TrendingRoles from "./TrendingRoles";
import Testimonials from "./Testimonials";
import AppDownload from "./AppDownload";
import JobLinksSection from "./JobLinksSection";
import JobsByDepartment from "./JobsByDepartment";
import FooterLinks from "./FooterLinks";

export default function HeroSection() {
  return (
    <>
      <div className="bg-[#F5F5F5] py-12 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-xl">
          <p className="text-[#36A85C] font-semibold uppercase text-sm mb-2">
            India’s #1 Job Platform
          </p>
          <h1 className="text-4xl font-bold text-[#666666] leading-tight">
            Your job search ends here
          </h1>
          <p className="text-lg text-[#666666] mt-2">
            Discover 50 lakh+ career opportunities
          </p>

          <div className="mt-6 flex flex-col lg:flex-row items-stretch gap-3">
            <input
              type="text"
              placeholder="🔍 Search jobs by 'title'"
              className="border p-3 rounded-lg w-full lg:w-1/3 text-[#666666] border-gray-300"
            />
            <input
              type="text"
              placeholder="💼 Your Experience"
              className="border p-3 rounded-lg w-full lg:w-1/3 text-[#666666] border-gray-300"
            />
            <input
              type="text"
              placeholder="📍 Search for an area or city"
              className="border p-3 rounded-lg w-full lg:w-1/3 text-[#666666] border-gray-300"
            />
            <button className="bg-[#36A85C] text-white px-6 py-3 rounded-lg hover:bg-[#2C874A] transition">
              Search jobs
            </button>
          </div>

          <div className="mt-8">
            <p className="font-semibold text-[#666666] mb-3">Proud to Support</p>
            <div className="flex items-center gap-6">
              <img
                src="/image.png"
                alt="gov logo 1"
                className="h-10"
              />
              <img
                src="/image.png"
                alt="gov logo 2"
                className="h-10"
              />
              <img
                src="/image.png"
                alt="gov logo 3"
                className="h-10"
              />
            </div>
          </div>

          <p className="mt-6 text-sm text-[#666666]">
            Trusted by 1000+ enterprises and 7 lakh+ MSMEs for hiring
          </p>
        </div>

        <div className="mt-10 lg:mt-0">
          <img
            src="/image.png"
            alt="Apna app person"
            className="w-[350px] rounded-xl"
          />
        </div>
      </div>
      <PopularSearches />
      <TopCompanies />
      <TrendingRoles />
      <Testimonials />
      <AppDownload />
      <JobLinksSection />
      <JobsByDepartment />
      <FooterLinks />

      {/* <JobsByDepartment /> */}
    </>
  );
}