import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Nstyle.css";
import Button from "@mui/material/Button";
import Logo1 from "./logo5.png";
import { useEffect } from "react";
import axios from "axios";
import { color } from "@mui/system";

const Navbar = () => {
  const navigate=useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [userName, setUserName] = useState(""); // Store user's name
  
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Make an API request to fetch the user's profile data
    axios.get("http://127.0.0.1:5000/user/profile")
      .then((response) => {
        console.log(response.data)
        setProfileData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleLogout = () => {
    // Make an API request to log the user out
    axios.post("http://127.0.0.1:5000/user/logout")
      .then((response) => {
        if (response.status === 200) {
          // Clear the profile data when the user logs out
          setProfileData(null);
          navigate('/')
        }
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  // Conditionally render buttons or user's name
  const renderAuthButtons = () => {
    if (profileData) {
      return (
        <div className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle fs-5 name"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hello, {profileData.fname}!
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to="/Logindata">
                My Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/Plist">
                All Profiles
              </Link>
            </li>
            <li>
              <button className="dropdown-item" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <>
          <Link className="nav-link login fs-5" to="/Login">
            <Button
              variant="contained"
              className="mx-1 mb-1"
              color="info"
              style={{ width: "25px" }}
              onClick={closeNav}
            >
              Login
            </Button>
          </Link>
          <Link className="nav-link login fs-5" to="/Signup">
            <Button
              variant="contained"
              className="mx-1 mb-1"
              color="info"
              style={{ width: "90px" }}
              onClick={closeNav}
            >
              Register
            </Button>
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`navbar navbar-expand-sm fixed-top ${
          isNavOpen ? "navbar-open" : ""
        }`}
        style={{ backgroundColor: "#a4a4ab", color: "black" }}
      >
        <div className="container-fluid">
          <div>
            <Link
              to="/"
              className="nav-link"
              style={{
                fontSize: "30px",
                fontFamily: "Nunito",
                fontVariant: "petite-caps",
              }}
            >
              <img
                src={Logo1}
                alt="Avatar Logo"
                style={{ width: "140px" }}
                className="navbar-logo"
              />
            </Link>
          </div>
          <button
            id="openButton"
            className="navbar-toggler ml-auto"
            type="button"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse text-info ${
              isNavOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav me-auto p-1">
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/" onClick={closeNav}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5" to="/About" onClick={closeNav}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fs-5"
                  to="/Contact"
                  onClick={closeNav}
                >
                  ContactUs
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>
            {renderAuthButtons()} {/* Render buttons or user's name */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
