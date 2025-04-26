import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "../views/Home";
import NotFound from "../views/NotFound";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import JobPosting from "../components/pages/JobPosting";
import JobDetails from "../components/pages/JobDetailed";
import ProfileOverviewCard from "../components/pages/updateProfile";
import ProfileFill from "../components/pages/profileFill";
import ProtectedRoute from "./RouteProtection";

// Layout for Navbar + Footer + Pages inside
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

// Main Routes
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Route */}
          <Route index element={<Home />} />

          {/* Protected Routes */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfileFill />
              </ProtectedRoute>
            }
          />
          <Route
            path="jobs"
            element={
              <ProtectedRoute>
                <JobPosting />
              </ProtectedRoute>
            }
          />
          <Route
            path="jobs/:id"
            element={
              <ProtectedRoute>
                <JobDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="updateProfile"
            element={
              <ProtectedRoute>
                <ProfileOverviewCard />
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
