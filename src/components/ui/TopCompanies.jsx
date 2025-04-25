import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const companies = [
  {
    name: "Bajaj Allianz Life Insurance",
    description: "Provider of life insurance and financial services.",
    logo: "",
  },
  {
    name: "Paytm Service Pvt. Ltd.",
    description: "Digital payment and e-commerce facilitator.",
    logo: "",
  },
  {
    name: "Zomato",
    description: "Online food delivery marketplace.",
    logo: "",
  },
  {
    name: "Swiggy",
    description: "Food delivery service.",
    logo: "",
  },
];

export default function TopCompanies() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#666666] text-center mb-8">
        Job Openings in Top companies
      </h2>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1280: { slidesPerView: 4 },
        }}
      >
        {companies.map((company, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl p-6 border shadow-md hover:shadow-lg transition">
              <img src={company.logo} alt={company.name} className="h-8 mb-4" />
              <h3 className="text-base font-semibold text-[#666666] mb-1">
                {company.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {company.description}
              </p>
              <a
                href="#"
                className="text-[#3C78D8] text-sm font-semibold flex items-center gap-1"
              >
                View jobs →
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}