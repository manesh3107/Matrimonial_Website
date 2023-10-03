import React, { useEffect } from "react";
import "./Profile.css"; // Create a CSS file for styling
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";


const LoginData = () => {
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

  const handleLogout = () => {
    // Make an API request to log the user out
    axios.post("http://127.0.0.1:5000/user/logout")
      .then((response) => {
        if (response.status === 200) {
          // Clear the profile data when the user logs out
          setProfileData(null);
        }
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  // Sample profile data (replace with actual data)
  return (
    <>
    <Navbar />
      {profileData && (
        <>
          <div className="container" style={{ marginTop: "80px" }}>
            <h2 className="text-center mb-5">
              {profileData.fname} {profileData.lname}
            </h2>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={`data:image/jpeg;base64,${profileData.image}`}
                  alt={profileData.fname}
                  height="550px"
                />
              </div>
              <div className="col-md-8">
                <table
                  className="table table-borderless"
                  style={{ fontSize: "20px" }}
                >
                  <thead>
                    <tr>
                      <th>Gender</th>
                      <th>{profileData.gender}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Age</td>
                      <td>{profileData.age}</td>
                    </tr>
                    <tr>
                      <td>Height</td>
                      <td>{profileData.height}</td>
                    </tr>
                    <tr>
                      <td>NRI</td>
                      <td>{profileData.nri}</td>
                    </tr>
                    <tr>
                      <td>Permanent Location</td>
                      <td>{profileData.address}</td>
                    </tr>

                    <tr>
                      <td>Present Location</td>
                      <td>{profileData.address}</td>
                    </tr>

                    <tr>
                      <td>Education</td>
                      <td>{profileData.eductaion}</td>
                    </tr>

                    <tr>
                      <td>Occuptation</td>
                      <td>{profileData.occupation}</td>
                    </tr>

                    <tr>
                      <td>Income</td>
                      <td>{profileData.income} LPA</td>
                    </tr>
                    <tr>
                      <td>Caste</td>
                      <td>{profileData.cast}</td>
                    </tr>
                    <tr>
                        <td>Email :</td>
                        <td>{profileData.email}</td>
                      </tr>
                    <tr>
                      <td>Contact number</td>
                      <td>{profileData.mobilenumber}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h2 classNameName="mt-5 text-center mb-5">Peronal Details</h2>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <table
                    className="table table-borderless"
                    style={{ fontSize: "20px" }}
                  >
                    <tbody>
                      <tr>
                        <td>Father Name :</td>
                        <td>{profileData.fathername}</td>
                      </tr>
                      <tr>
                        <td>Mother Name :</td>
                        <td>{profileData.mothername}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-6">
                  <table
                    className="table table-borderless"
                    style={{ fontSize: "20px" }}
                  >
                    <tbody>
                      <tr>
                        <td>Hobbies :</td>
                        <td>{profileData.hobbies}</td>
                      </tr>
                      <tr>
                        <td>Physical Disability :</td>
                        <td>{profileData.physicaldisability}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginData;
