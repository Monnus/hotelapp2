import React from "react";
import { Box } from "@mui/system";
import logo from "../../pages/Images/Frame33_logo.png";
import hotelImage from "../../pages/Images/Frame33_Rectangle2.jpg";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import profileImage from "../../pages/Images/Frame33_Ellipse3.png";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import app from "firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

export default function Header() {
  const auth = getAuth(app);
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          zIndex: "1",
          top: "0",
          width: "100%",
          height: "100px",
          backgroundColor: "#048BCC",
          margin: "0 0 70px 0",
        }}
      >
        <Link to="/">
          <img src={logo} className="logo" alt="" />
        </Link>
        <nav
          style={{
            position: "relative",
            bottom: "5rem",
            background: "#5DBBFF",
            width: "100%",
          }}
        >
          <ul style={{ float: "right", display: "inline-block" }}>
            <Link to="/">
              <HomeIcon sx={{ fontSize: 40 }} />{" "}
              <li style={{ display: "inline-block" }}>Home</li>
            </Link>
            <Link to="/AdminsigninPage">
              {" "}
              <AdminPanelSettingsRoundedIcon sx={{ fontSize: 40 }} />
              <li style={{ display: "inline-block" }}>admin</li>
            </Link>
            <Link to="/Bookings">
              {" "}
              <BookRoundedIcon sx={{ fontSize: 40 }} />
              <li style={{ display: "inline-block" }}>Bookings</li>
            </Link>
            <Link Link to="/ " onClick={() => signOut(auth)}>
              {" "}
              <LogoutRoundedIcon sx={{ fontSize: 40 }} />
              <li style={{ display: "inline-block" }}>logout</li>
            </Link>
          </ul>
        </nav>
      </Box>

      <div
        style={{
          backgroundImage: `url(${hotelImage})`,
          width: "100%",
          marginTop: "8rem",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50rem",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "50rem",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <h1
            style={{
              color: "#e5e5e5",
              textAlign: "center",
              width: "100%",
              fontWeight: "500",
              fontSize: "5rem",
            }}
          >
            Welcome to hotel plaza
          </h1>
          <br></br>
          <p
            style={{
              display: "block",
              color: "white",
              maxWidth: "50rem",
              fontSize: "1.5rem",
              lineHeight: "1.7rem",
              marginTop:"5rem",
              marginLeft: "1rem",
            }}
          >
            No matter if you want to spend a romantic time with your partner,
            plan a wellness stay or want to explore a city close up: Our hotel
            deals will keep all options open for you. Welcome to Hotel plaza.
          </p>
        </div>
      </div>
      <div className="">
        <img
          src={profileImage}
          style={{ borderRadius: "100px" }}
          className="profileIMGHomePage"
        />
      </div>
    </>
  );
}
