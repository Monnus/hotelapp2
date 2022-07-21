import React from "react";
import Bookingspage from "pages/Bookingspage";
import Signin from "pages/Signin";
import Loginuser from "pages/Loginuser";
import Adminsignin from "pages/Adminsignin";
import Review from "pages/Review";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/review" element={<Review />} />
        <Route path="/adminsignin" element={<Adminsignin />} />
        <Route path="/loginuser" element={<Loginuser />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/bookingspage" element={<Bookingspage />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
