import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import SigninPage from "pages/Signin";
import LoginuserPage from "pages/Loginuser";
import AdminsigninPage from "pages/Adminsignin";
import ReviewPage from "pages/Review";
import BookingspagePage from "pages/Bookingspage";
import AdminPage from "pages/adminpage";
import LandingPage from "pages/landingPage";
import PaymentPage from "./pages/PaymentPage"
const ProjectRoutes = () => {
  return (

      <Routes>
      <Route path="/" element={<LandingPage/>}/>  
      <Route path="/register" element={<SigninPage/>}/>
      <Route path="/loginPage" element={<LoginuserPage/>}/>
      <Route path="/AdminsigninPage" element={<AdminsigninPage/>} />
      <Route path='/review' element={<ReviewPage/>} />
      <Route path='/Bookings' element={<BookingspagePage/>}  />
      <Route path="/AdminPage" element={<AdminPage/>} />
      <Route path="/payments" element={<PaymentPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

  );
};

export default ProjectRoutes;
