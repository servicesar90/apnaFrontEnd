import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";

export default function LoggedInNavbar({handleLogout}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Add your search logic here
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-white  p-4 flex justify-between items-center">
      {/* Left links */}
      {/* <div className="flex items-center gap-6">
        <Link to="/" className="text-blue-600 font-semibold hover:underline">Home</Link>
        
        <div className="relative">
          <button
            className="flex items-center text-blue-600 font-semibold hover:underline"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Find a job <ChevronDown size={16} className="ml-1" />
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-md mt-2 rounded-md py-2 z-10">
              <Link to="/jobs" className="block px-4 py-2 hover:bg-gray-100">All Jobs</Link>
              <Link to="/jobs-for-you" className="block px-4 py-2 hover:bg-gray-100">Jobs For You</Link>
              <Link to="/new-jobs" className="block px-4 py-2 hover:bg-gray-100">New Jobs</Link>
            </div>
          )}
        </div>

        <Link to="/career-compass" className="text-blue-600 font-semibold hover:underline">
          Career Compass
        </Link>
      </div> */}

      {/* Search bar */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search jobs here"
          className="border border-gray-300 rounded-full px-4 py-1 text-sm w-64"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 text-blue-500"
        >
          <Search size={18} />
        </button>
      </div>

      {/* User avatar and theme switch */}
      <div className="flex items-center gap-4 ml-4">
        <div className="relative">
          <img
            src="/user.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {/* Dropdown for avatar */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white  rounded-md z-10">
                <div >Profile</div>
                <div onClick={handleLogout}>Logout</div>
              {/* <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
              <Link to="/logout" className="block px-4 py-2 hover:bg-gray-100">Logout</Link> */}
            </div>
          )}
        </div>

        {/* Toggle switch (placeholder) */}
        <label className="flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only" />
          <div className="w-10 h-5 bg-gray-300 rounded-full relative">
            <div className="dot absolute left-0 top-0 w-5 h-5 bg-white rounded-full transition" />
          </div>
        </label>
      </div>
    </nav>
  );
}
