import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import NotFound from "../views/NotFound";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import JobDetails from "../components/pages/JobDetailed";
import ProfileOverviewCard from "../components/pages/updateProfile";
import ProfileFill from "../components/pages/profileFill";
import { ProtectDirectRedirecting, ProtectedRoute, ProtectProfileCreation } from "./RouteProtection";
import LandingPage from "../views/home";
import { useEffect } from "react";
import { useState } from "react";
import { getJobs, getprofile } from "../API/ApiFunctions";
import JobPortal from "../components/pages/JobFiltering";



const Layout = () => {

  const [employee, setEmployee]= useState(null);
  const [jobs, setJobs] = useState(null)
  
  useEffect(()=>{
 
    const getData=async()=>{
      const response=await getprofile();
      if(response){
        setEmployee(response?.data.data)
   
      }
      
    }
    
    getData()

  },[]);

  useEffect(()=>{
 
    const getData=async()=>{
      const response=await getJobs();
      if(response){
        setJobs(response?.data.data)
   
      }
      
    }
    
    getData()

  },[]);


return (
  <>
    <Navbar profile={employee} />
    <Outlet context={{employee, jobs}}/>
    <Footer />
  </>
)
};

// Main Routes
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Route */}
          <Route index element={<LandingPage />} />

          {/* Protected Routes */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProtectProfileCreation>
                  <ProfileFill />
                </ProtectProfileCreation>

              </ProtectedRoute>
            }
          />
          <Route
            path="jobs"
            element={
              <ProtectedRoute>
                <ProtectDirectRedirecting>
                  <JobPortal />
                </ProtectDirectRedirecting>

              </ProtectedRoute>
            }
          />
          <Route
            path="jobs/:id"
            element={
              <ProtectedRoute>
                <ProtectDirectRedirecting>
                  <JobDetails />
                </ProtectDirectRedirecting>

              </ProtectedRoute>
            }
          />
          <Route
            path="updateProfile"
            element={
              <ProtectedRoute>
                <ProtectDirectRedirecting>
                  <ProfileOverviewCard />
                </ProtectDirectRedirecting>

              </ProtectedRoute>
            }
          />
      </Route>

      

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};


export default AppRoutes;
