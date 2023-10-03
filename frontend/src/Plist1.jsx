import React from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Pdemo from "./Pdemo";

const Plist1 = () => {
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [cast, setCast] = useState("");
  const [gender, setGender] = useState("");
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");
  const loggedIn = localStorage.getItem("logedInUser");

  const handleRetrieveUsers = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/user");
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

    const isAgeInRange =
      (minAge === "" || age >= minAge) && (maxAge === "" || age <= maxAge);

    const isCastMatched = cast === "" || cast === profileCast;

    const isGenderMatched = gender === "" || gender === profileGender;

    return isAgeInRange && isCastMatched && isGenderMatched;
  });
  return (
    <>
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
          <div className="mb-2 fs-4">Select Min Age</div>
          <input
            type="number"
            placeholder="Min Age"
            value={minAge}
            className="form-control"
            style={{ width: "210px" }}
            onChange={(e) => setMinAge(Number(e.target.value))}
          />
        </div>
        <div className="col-sm-3">
          <div className="mb-2 fs-4 ">Min Age</div>
          <input
            type="number"
            placeholder="Max Age"
            value={maxAge}
            className="form-control"
            style={{ width: "210px" }}
            onChange={(e) => setMaxAge(Number(e.target.value))}
          />
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
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      {/* <Pdemo/> */}
      <div className="row container-fluid">
        {userData.map((profile) => (
          <Pdemo
            key={profile.__id}
            id={profile.__id}
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
