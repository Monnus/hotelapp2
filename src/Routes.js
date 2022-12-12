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
import PaymentPage from "./pages/PaymentPage";
const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/register" exact element={<SigninPage />} />
      <Route path="/loginPage" exact element={<LoginuserPage />} />
      <Route path="/AdminsigninPage" exact element={<AdminsigninPage />} />
      <Route path="/review" exact element={<ReviewPage />} />
      <Route path="/Bookings" exact element={<BookingspagePage />} />
      <Route path="/AdminPage" exact element={<AdminPage />} />
      <Route path="/payments" exactelement={<PaymentPage />} />
      <Route path="*" exact element={<NotFound />} />
    </Routes>
  );
};

export default ProjectRoutes;
