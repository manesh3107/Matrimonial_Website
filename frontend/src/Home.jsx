import Image from "./Image";
import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import background from "./bg4.jpg";
import cbackground from "./bg8.jpg";
import Img1 from "./i1.jpg";
import Img2 from "./i2.jpg";
import Img3 from "./i3.jpg";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
const Home = () => {
  const style1 = {
    backgroundImage: `url(${background})`,
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const style2 = {
    backgroundImage: `url(${cbackground})`,
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };


  return (
    <>
      <Navbar />
      <Image />
      <section className="light-bg success-section mt-3 section mb-3">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 ">
              <h1 className="text-uppercase page-title text-center fs-2">
                Success Stories
              </h1>
              <div className="row success-text-wrapper">
                <div className="col-md-12 col-sm-12 mt-2">
                  <p classNameName="text-center" style={{ fontSize: "19px" }}>
                  India's Most Preferred and Trusted Service for Finding a Life-Partner. Most Trusted Matchmaking Service with Millions of Success Stories. Matches from your City. Most Trusted Brand. 100% Privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="container mt-5">
              <div className="row box-container">
                <div className="col-lg-4 col-md-4 mb-4">
                  <div className="d-flex flex-column h-100 box" style={style1}>
                    <div className="box-number fs-2">155</div>
                    <div className="box-text text-center fs-5">
                      New Profiles in last 30 Days
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 mb-4">
                  <div className="d-flex flex-column h-100 box" style={style1}>
                    <div className="box-number fs-2">498</div>
                    <div className="box-text text-center fs-5">
                      Got engaged through us
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="d-flex flex-column h-100 box" style={style1}>
                    <div className="box-number fs-2">500</div>
                    <div className="box-text text-center fs-5">
                      Active Profiles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


<section>
  <h1 className="text-center " style={{color:"#3498db"}}>Inspiring Love Stories</h1>
  <div className="row">
    <div className="col-md-4 col-lg-4 col-sm-6">
      <div className="card cards">
        <img
          className="card-img-top img-fluid"  
          src={Img1}
          alt="Card"
          style={{ maxHeight: "250px",height:"250px",maxWidth:"100%"}}  
        />
        <div className="card-body">
          <h4 className="card-title">Siddharth & Kiara</h4>
          <p className="card-text">
            Contact genuine profiles with 100% verified mobile numbers
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-lg-4 col-sm-6">
      <div className="card cards">
        <img
          className="card-img-top img-fluid"
          src={Img2}
          alt="Card "
          style={{ maxHeight: "250px",height:"250px" }}
        />
        <div className="card-body">
          <h4 className="card-title">Varun & Natasha</h4>
          <p className="card-text">
            The most trusted matrimony brand - The Brand Trust Report
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-4 col-lg-4 col-sm-6">
      <div className="card cards">
        <img
          className="card-img-top img-fluid"
          src={Img3}
          alt="Card "
          style={{ maxHeight: "250px",height:"250px" }}
        />
        <div className="card-body">
          <h4 className="card-title">Virat & Anushka</h4>
          <p className="card-text">
            Highest number of documented marriages online
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <div className="container-fluid mt-2 section">
        <h1 className="fs-2 text-center">Membership Plans</h1>
        <div className="row premium">
          <div className="col-lg-3 col-md-6 mt-3">
            <div className="card" id="plans" style={style2}>
              <div className="card-body">
                <h5 className="card-title text-center">
                  Free
                </h5>
                <p className="card-text">✔ <del >₹3000</del> Free Membership</p>
                <p>✔ Send Customized interests</p>
                <p>✖ See Contact Phone Nos</p>
                <p>✖ Priority Customer Support</p>
                <p>✖ Chat with Unlimited Users</p>
                <div style={{ justifyContent: "center" }} className="d-grid">
                  <Link to="/Signup">
                    <Button variant="contained" style={{ width: "150px" }}>
                      Register Free
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  mt-3">
            <div className="card" id="plans" style={style2}>
              <div className="card-body">
                <h5 className="card-title text-center">
                  Paid
                </h5>
                <p className="card-text">✔ ₹6000 Membership Per Month</p>
                <p>✔ Send Customized interests</p>
                <p>✔ See Contact Phone Nos</p>
                <p>✔ Priority Customer Support</p>
                <p>✔ Chat with Unlimited Users</p>
                <div style={{ justifyContent: "center" }} className="d-grid">
                  <Link to="/">
                    <Button variant="contained" style={{ width: "150px" }}>
                      Buy Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
