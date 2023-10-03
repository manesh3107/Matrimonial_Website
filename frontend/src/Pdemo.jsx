import React from "react";
import {Link } from "react-router-dom"

// import Fimg4 from "./Images/uf4.jpg";

import { Button } from "@mui/material";

function Pdemo({ id, name, age, profileImage,eductaion }) {
  return (
    
      <div className="col-md-4 col-lg-2 col-sm-4">
        <div className="card mb-2 mt-3">
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
          <div className="card-body text-center">
            <h4 className="card-title">Name:{name}</h4>
            <p >Education: {eductaion}</p>
            <p >Age: {age}</p>
            <div>
              <Link to={`/Profile/${id}`} style={{textDecoration:"none"}}>
                <Button variant="outlined">
                  view Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Pdemo;
