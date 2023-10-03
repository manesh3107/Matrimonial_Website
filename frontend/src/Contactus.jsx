import React from "react";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";

function Contactus() {
  return (
    <>
    <Navbar/>
    <div>
      <section className="mb-4 container mt-2">
        <h2
          className="h1-responsive font-weight-bold text-center"
          style={{ marginTop: "70px" }}
        >
          Contact us
        </h2>

        <p className="text-center w-responsive mx-auto mb-5 fs-4">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row  justify-content-center align-items-center">
          <div
            className="col-md-9 mb-md-0 mb-5  "
            style={{ justifyContent: "center" }}
          >
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label for="name" className="fs-4">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label for="email" className="fs-4">
                      Your email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label for="subject" className="fs-4">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label for="message" className="fs-4">
                      Your message
                    </label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left mt-3">
              <Button
                content="contained"
                style={{ backgroundColor: "lightblue" }}
              >
                Register
              </Button>
            </div>
            <div className="status"></div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Contactus;
