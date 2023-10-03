import React, { useEffect, useState } from "react";
import "./Profile.css"; // Create a CSS file for styling
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";
import Navbar from "./Navbar";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");

  let { id } = useParams();

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

  const profile = userData.find((p) => p._id === id);

  // Sample profile data (replace with actual data)
  return (
    <div className="container-fluid mt-3">
      <Navbar />
      {profile ? ( // Check if profile exists before rendering
        <div className="row" style={{ marginTop: "70px" }}>
          <div className="col-lg-4 col-md-12">
            {/* Responsive image */}
            <div
              style={{ height: "500px", borderRadius: "5px", marginTop: "7px" }}
            >
              <img
                className="card-img-top mx-auto"
                src={`data:image/jpeg;base64,${profile.image}`}
                alt="Card"
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row" style={{ marginTop: "5px" }}>
              <h2 className="text-center" style={{ color: "firebrick" }}>
                My Profile
              </h2>
              {/* Rest of your component */}
              <div className="col-md-6">
                <p className="fs-4">
                  <span>Name:</span> {profile.fname} {profile.lname}
                </p>
                <p className="fs-4">
                  <span>Gender:</span> {profile.gender}
                </p>
                <p className="fs-4">
                  <span>Date Of Birth:</span>{" "}
                  {new Date(profile.dob).toLocaleDateString("en-GB")}
                </p>
                <p className="fs-4">
                  <span>Age:</span> {profile.age}
                </p>
                <p className="fs-4">
                  <span>NRI :</span> {profile.nri}
                </p>
                <p className="fs-4">
                  <span>Height :</span> {profile.height}
                </p>
                <p className="fs-4">
                  <span>Cast :</span> {profile.cast}
                </p>
                <p className="fs-4">
                  <span>Marital Status :</span> {profile.maritialstatus}
                </p>
              </div>
              <div className="col-md-6">
                <p className="fs-4">
                  <span>Fathers Name :</span> {profile.fathername}
                </p>
                <p className="fs-4">
                  <span>Mothers Name:</span> {profile.mothername}
                </p>
                <p className="fs-4">
                  <span>Education :</span> {profile.eductaion}
                </p>
                <p className="fs-4">
                  <span>Occupation:</span> {profile.occupation}
                </p>
                <p className="fs-4">
                  <span>Annual Income:</span> {profile.income} LPA
                </p>
                <p className="fs-4">
                  <span>Present Address:</span> {profile.address}
                </p>
                <p className="fs-4">
                  <span>Hobbies:</span> {profile.hobbies}
                </p>
                <p className="fs-4">
                  <span>Physical Disability:</span> {profile.physicaldisability}
                </p>
              </div>
            </div>
            <div className="row">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "8px",
                }}
              >
                <Link to="/Plist">
                  <Button variant="outlined">Back</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div> // You can display a loading indicator here
      )}
    </div>
  );
};

export default Profile;
