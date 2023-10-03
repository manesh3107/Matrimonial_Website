import React from "react";
import Img1 from "./ganesha.png";
import Navbar from "./Navbar";
const About = () => {
  return (<>
  <Navbar/>
    <div className="row justify-content-center mt-5">
      <div className="col-sm-10 col-sm-offset-1 col-xs-12 about-wrapper p-3 fs-4">
        <div className="col-md-4 p-r-none text-center mx-auto ">
          <img
            src={Img1}
            className="about-block-img img-responsive img-fluid"
            height="30px"
          />
        </div>
        <div className="col-md-8 custom-pad container text-wrap ">
          <h4 className="text-uppercase page-title text-center pt-3 ">
            <strong>About US</strong>
          </h4>
          <p className="page-text fs-5 text-left text-justify" style={{textAlign:"justify"}}>
            Vivaah.com, and exclusive matrimonial aims to serve as a one-stop
            platform for prospective brides and grooms to meet and communicate
            with each other. It offers a superior matchmaking experience by
            expanding the opportunities available to meet potential life
            partners and build fulfilling relationships.
          </p>
          <p className="page-text fs-5 text-left text-justify" style={{textAlign:"justify"}}>
            Vivaah.com uses the latest and the most cutting edge technologies
            available in the online environment to provide members with fast,
            relevant and best matching results in strict confidence. We also
            take care of the security or privacy of the members by our special
            features.
          </p>
          <p className="page-text fs-5 text-left text-justify" style={{textAlign:"justify"}}>
            Vivaah Matrimony is a user friendly portal providing its users with
            easy to use interfaces and customer friendly tools to make your
            visit easier and has very useful links and options for more
            effective search functionality.
          </p>
          <p className="page-text fs-5 text-left text-justify" style={{textAlign:"justify"}}>
            We ensures that every profile put up at Vivaah.com is screened for
            irrelevant and/or appropriate content. Vivaah.com also has strict
            abuse prevention and reporting systems for individuals who are
            accepted via our screening system.
          </p>
          <p className="page-text fs-5 text-left text-justify">
            Register with Vivaah.com portal and meet your dream life partner.
          </p>
          <p className="page-text fs-5 text-left text-justify">
            Good Luck for your partner search!
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
export default About;
