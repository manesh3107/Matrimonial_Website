import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function IndividualProfile() {

  
  return (
    <div className="container-fluid mt-3">
      <div className="row" style={{ marginTop: "70px" }}>
        <div className="col-lg-4 col-md-12">
          {/* Responsive image */}
          <div style={{ height: "500px", borderRadius: "5px" ,marginTop:'7px'}}>
          <img
            className="card-img-top mx-auto"
            src={`data:image/jpeg;base64,${profileImage}`}
            alt="Card"
            style={{
              maxHeight: "100%",
              height: "250px",
              maxWidth: "100%",
              width: "250px",
            }}
          />
          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row" style={{ marginTop: "5px" }}>
            <h2 className="text-center" style={{ color: "firebrick" }}>
              My Profile
            </h2>
            <div className="col-md-6">
              <p className="fs-4">
                <span>Name:</span> Akanxa
              </p>
              <p className="fs-4">
                <span>Gender:</span> Female
              </p>
              <p className="fs-4">
                <span>Date Of Birth:</span> 26/02/2002
              </p>
              <p className="fs-4">
                <span>NRI :</span> Yes
              </p>
              <p className="fs-4">
                <span>Height :</span> 4'5
              </p>
              <p className="fs-4">
                <span>Cast :</span> Hindu
              </p>
              <p className="fs-4">
                <span>Marital Status :</span> Single
              </p>
            </div>
            <div className="col-md-6">
              <p className="fs-4">
                <span>Fathers Name :</span>{" "}
              </p>
              <p className="fs-4">
                <span>Mothers Name:</span>
              </p>
              <p className="fs-4">
                <span>Education :</span>
              </p>
              <p className="fs-4">
                <span>Occupation:</span>{" "}
              </p>
              <p className="fs-4">
                <span>Annual Income:</span>
              </p>
              <p className="fs-4">
                <span>Present Address:</span> Ahmedabad
              </p>
              <p className="fs-4">
                <span>Hobbies:</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
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
      </div>
    </div>
  );
}

export default IndividualProfile;
