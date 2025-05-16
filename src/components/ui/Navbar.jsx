import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import CandidateLoginModal from "../modals/loginModals/CandidateLoginModal";
import OtpModal from "../modals/loginModals/OtpModal";
import ProfileModal from "../modals/profileModals/profileModal";

export default function Navbar({profile}) {
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [mobile, setMobile] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [showProfileModal, setShowProfileModal]= useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [anchor, setAnchor]= useState(null)

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("User");
    if (storedUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

  }, []);




  const handleEmployerLogin = () => {
    navigate("/employer-login");
  };

  const handleLogout = () => {
    localStorage.removeItem("TokenId");
    localStorage.removeItem("User");// or sessionStorage
    setIsLoggedIn(false);
    setShowProfileModal(false)
    navigate("/")
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

        <img onClick={() => navigate("/")} src="/unigrowLogo.png" className="w-[7rem] h-auto" alt="Logo" />



        {/* Desktop Menu */}
        <div className="justify-center items-center space-x-6 flex flex-row">

          <div className="hidden md:flex lg:flex  flex-row gap-4">
            <Link to="/" className="font-semibold text-black">Home</Link>

            <div
              className="relative"
              // onMouseEnter={() => setIsCareerOpen(true)}
              // onMouseLeave={() => setIsCareerOpen(false)}
              onClick={()=>navigate("/jobs")}
            >
              <button className="flex items-center gap-1 font-semibold text-black">
                find A Job 
                {/* <ChevronDown size={16} /> */}
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
                        <strong>{title}</strong><br />
                        <span className="text-gray-500">{subtitle}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="w-1/2 space-y-2">
                    <img src="/assets/career-video-thumbnail.jpg" alt="Career Compass Video" className="rounded-md" />
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

            
          </div>


          <div className="flex items-center gap-4 ml-auto">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="bg-blue-500 text-white px-2 py-1 rounded-3xl text-[0.9rem] font-semibold"
                >
                  Candidate Login
                </button>
                <button
                  onClick={handleEmployerLogin}
                  disabled
                  className="text-blue-500 hover:text-white bg-white px-2 py-1 rounded-3xl text-[0.9rem] font-semibold hover:bg-gray-500 transition-colors duration-200"
                >
                  Employer Login
                </button>
              </>
            ) : (
              <div>
                {profile ? 
                <div onClick={(e)=>{
                  setAnchor(e.currentTarget);
                  setShowProfileModal(!showProfileModal)
                  
                }
                } className="rounded-[50%] flex justify-center items-center bg-blue-300 text-white py-3 px-5">
                  <strong>{profile?.fullName?.trim()?.charAt(0).toUpperCase()}</strong>
                </div> :
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-2 py-1 rounded-3xl text-[0.9rem] font-semibold"
                  >
                    Logout
                  </button>
                }

              </div>

            )}
            <div className="lg:hidden md:hidden flex flex">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md focus:outline-none"
                aria-label="Toggle Menu"
              >
                <Menu size={24} />
              </button>
            </div>

          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-2/4 bg-white shadow-md z-50 p-6 space-y-6 transform transition-transform duration-300 min-h-screen ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-black text-xl"
        >
          ✕
        </button>


        <nav className="flex flex-col space-y-4 mt-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-semibold text-black">Home</Link>


          <Link
            to="/profile"
            onClick={() => setIsMenuOpen(false)}
            className="font-semibold text-black"
          >
            Profile

          </Link>



          <Link to="/jobs" onClick={() => setIsMenuOpen(false)} className="font-semibold text-black">Jobs</Link>
          {/* <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className="font-semibold text-black">Contact Us</Link>
          <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className="font-semibold text-black">About Us</Link> */}
        </nav>
      </div>

      {/* Modals */}
      {showLoginModal && (
        <CandidateLoginModal
          mobile={mobile}
          setMobile={setMobile}
          onClose={() => {
            setShowLoginModal(false);
          }}
          onSubmit={() => {
            setShowOtp(true);
            setShowLoginModal(false)
          }}
        />
      )}
      {showOtp && <OtpModal mobile={mobile} onClose={() => setShowOtp(false)} onSubmit={() => {
        setIsLoggedIn(true)

      }} />}

      {showProfileModal && (
        <ProfileModal showProfileModal={showProfileModal} onClose={()=> setShowProfileModal(!showProfileModal)} profile={profile} anchor={anchor} handleLogout={handleLogout}/>
      )}

    
    </>
  );
}
