import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import ProfileModal from "./components/modals/profileModal";
import JobPosting from "./components/pages/JobPosting";
import JobDetails from "./components/pages/JobDetailed";
import ProfileOverviewCard from "./components/pages/updateProfile";
import EditExperienceModal from "./components/modals/experienceYear";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}


function AppLayout() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<ProfileModal />} />
        <Route path="/jobs" element={<JobPosting />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/updateProfile" element={<ProfileOverviewCard />} />
        
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
