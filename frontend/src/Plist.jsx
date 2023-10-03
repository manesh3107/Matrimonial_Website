import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Pdemo from "./Pdemo";
import Navbar from "./Navbar";

const Plist1 = () => {
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [cast, setCast] = useState("");
  const [gender, setGender] = useState("");
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");
  const loggedIn = localStorage.getItem("logedInUser");
  const [ageRange, setAgeRange] = useState("");
  const [nriStatus, setNriStatus] = useState("");

  const handleRetrieveUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/user")
      setUserData(response.data);
      setMessage("");
    } catch (error) {
      console.error("Error retrieving user data", error);
      setMessage("Error retrieving user data");
    }
  };

  useEffect(() => {
    handleRetrieveUsers();
  }, []);

  const filteredProfiles = userData.filter((profile) => {
    const age = profile.age;
    const profileCast = profile.cast;
    const profileGender = profile.gender;
    const profileNRI = profile.nri;
    const profileMaritalStatus = profile.maritialstatus;
  
    // Define isAgeInRange based on the selected age range
    let isAgeInRange = true; // Default to true if no age range is selected
  
    if (ageRange) {
      const [minRange, maxRange] = ageRange.split("-").map(Number);
  
      // Check if age is within the selected range
      isAgeInRange = age >= minRange && age <= maxRange;
    }

    if(ageRange==="Select Age Range"){
      isAgeInRange=true;
    }
  
    const isCastMatched = cast === "" || cast === profileCast;
    const isGenderMatched = gender === "" || gender === profileGender;
  
    const isNRIMatched = nriStatus === "" || nriStatus === profileNRI;
  
    return (
      isAgeInRange &&
      isCastMatched &&
      isGenderMatched &&
      isNRIMatched
    );
  });
  
  const ageRangeOptions = [
    "Select Age Range",
    "18-25",
    "26-30",
    "31-40",
    "41-50",
    "51+",
  ];
  return (
    <>
    <Navbar />
      <h1
        className="text-uppercase page-title text-center fs-1"
        style={{
          color: "#3498db",
          marginTop: "70px",
          fontSize: "30px",
        }}
      >
        Find Your Mate
      </h1>
      <div className="filter row container-fluid">
      <div className="col-sm-3">
          <label htmlFor="ageRange" className="form-label fs-4">
            Select Age Range
          </label>
          <select
            className="form-select"
            id="ageRange"
            name="ageRange"
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
            style={{ width: "200px" }}
          >
            {ageRangeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="col-sm-3">
          <label for="cast" className="form-label fs-4">
            Select Cast
          </label>

          <select
            className="form-select"
            id="cast"
            name="cast"
            onChange={(e) => setCast(e.target.value)}
            style={{ width: "200px" }}
          >
            <option value="">All</option>
            <option value="Hindu">Hindu</option>
            <option value="Jain">Jain</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Sindhi">Sindhi</option>
          </select>
        </div>
        <div className="col-sm-3">
          <label for="gender" className="form-label fs-4">
            Select Gender
          </label>

          <select
            className="form-select"
            id="gender"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            style={{ width: "200px" }}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="col-sm-3">
          <label htmlFor="nriStatus" className="form-label fs-4">
            Select NRI Status
          </label>
          <select
            className="form-select"
            id="nriStatus"
            name="nriStatus"
            onChange={(e) => setNriStatus(e.target.value)}
            style={{ width: "200px" }}
          >
            <option value="">Any</option>
            <option value="yes">NRI</option>
            <option value="no">Non-NRI</option>
          </select>
        </div>
        
      </div>

      {/* <Pdemo/> */}
      <div className="row container-fluid">
        {filteredProfiles.map((profile) => (
          <Pdemo
            key={profile._id}
            id={profile._id}
            name={profile.fname}
            eductaion={profile.eductaion}
            age={profile.age}
            profileImage={profile.image}
          />
        ))}
      </div>
    </>
  );
};

export default Plist1;
