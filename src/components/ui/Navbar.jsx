import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import CandidateLoginModal from "../modals/loginModals/CandidateLoginModal";
import OtpModal from "../modals/loginModals/OtpModal";

export default function Navbar() {
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [mobile, setMobile] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleEmployerLogin = () => {
    navigate("/employer-login");
  };

  const services = [
    {
      title: "AI Resume builder",
      subtitle: "Create your best resume using AI",
      link: "/ai-resume-builder",
    },
    {
      title: "AI Resume checker",
      subtitle: "Get instant resume feedback",
      link: "/ai-resume-checker",
    },
    {
      title: "AI Cover letter generator",
      subtitle: "Stand out and get hired faster",
      link: "/ai-cover-letter-generator",
    },
    {
      title: "Direct connection with recruiter",
      subtitle: "Stand out and get hired faster",
      link: "/recruiter-connection",
    },
    {
      title: "Blog",
      subtitle: "Guidance for securing your dream job",
      link: "/blog",
    },
  ];

  return (
    <>
      <nav className="bg-white shadow p-4 flex justify-between h-20 items-center relative">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-black">
        <img src="/Unigrow logo (4).png" className="w-[70px] h-[60px]" alt="Logo" />

        </Link>

        {/* Right Section (Mobile) */}
        <div className="flex items-center gap-4 ml-auto lg:hidden">
          <button
            onClick={() => setShowLoginModal(true)}
            className="bg-blue-500 text-white px-2 py-1 rounded-3xl text-[11px] font-semibold"
          >
            Candidate Login
          </button>
          <button
            onClick={handleEmployerLogin}
            className="text-blue-500 hover:text-white bg-white px-2 py-1 rounded-3xl text-[11px] font-semibold hover:bg-blue-500 transition-colors duration-200"
          >
            Employer Login
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md focus:outline-none"
            aria-label="Toggle Menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-center items-center space-x-8">
          <Link to="/" className="font-semibold text-black">Home</Link>

          <div
            className="relative"
            onMouseEnter={() => setIsCareerOpen(true)}
            onMouseLeave={() => setIsCareerOpen(false)}
          >
            <button className="flex items-center gap-1 font-semibold text-black">
              Services <ChevronDown size={16} />
            </button>
            {isCareerOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-lg p-4 flex gap-6 rounded-md z-50 w-[600px]">
                <div className="space-y-4 text-sm text-[#666666] font-medium w-1/2">
                  {services.map(({ title, subtitle, link }, i) => (
                    <Link
                      to={link}
                      key={i}
                      className="text-left w-full px-2 py-1 hover:bg-gray-100 rounded block"
                    >
                      <strong>{title}</strong>
                      <br />
                      <span className="text-gray-500">{subtitle}</span>
                    </Link>
                  ))}
                </div>
                <div className="w-1/2 space-y-2">
                  <img
                    src="/assets/career-video-thumbnail.jpg"
                    alt="Career Compass Video"
                    className="rounded-md"
                  />
                  <p className="text-sm font-medium text-[#666666]">
                    Level up your resume: Watch our career compass video guide.
                  </p>
                  <Link to="/career-compass-video" className="text-[#3C78D8] font-semibold text-sm">
                    Watch video →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/blog" className="font-semibold text-black">Blog</Link>
          <Link to="/contact-us" className="font-semibold text-black">Contact Us</Link>
          <Link to="/about-us" className="font-semibold text-black">About Us</Link>

          <button
            onClick={handleEmployerLogin}
            className="text-blue-500 hover:text-white bg-white px-4 py-3 rounded-3xl text-sm font-semibold hover:bg-blue-500 transition-colors duration-200"
          >
            Employer Login
          </button>
          <button
            onClick={() => setShowLoginModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-3xl text-sm font-semibold"
          >
            Candidate Login
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-2/3 bg-white shadow-md z-50 p-6 space-y-6 transform transition-transform duration-300 min-h-screen ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-black text-xl"
        >
          ✕
        </button>

        <nav className="flex flex-col space-y-4 mt-8">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-semibold text-black">
            Home
          </Link>

          <div className="relative">
            <button
              className="flex items-center gap-1 font-semibold text-black"
              onClick={() => setIsCareerOpen(!isCareerOpen)}
            >
              Services <ChevronDown size={16} />
            </button>
            {isCareerOpen && (
              <div className="mt-2 bg-white shadow-lg p-4 flex flex-col gap-2 rounded-md w-full">
                {services.map(({ title, subtitle, link }, i) => (
                  <Link
                    to={link}
                    key={i}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-left px-2 py-1 hover:bg-gray-100 rounded block"
                  >
                    <strong>{title}</strong>
                    <br />
                    <span className="text-gray-500 text-sm">{subtitle}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="font-semibold text-black">Blog</Link>
          <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className="font-semibold text-black">Contact Us</Link>
          <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className="font-semibold text-black">About Us</Link>
        </nav>
      </div>

      {/* Modals */}
      {showLoginModal && (
        <CandidateLoginModal
          mobile={mobile}
          setMobile={setMobile}
          onClose={() => {
            setShowLoginModal(false);
            setShowOtp(true);
          }}
        />
      )}
      {showOtp && <OtpModal mobile={mobile} onClose={() => setShowOtp(false)} />}
    </>
  );
}
