import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mt-4 ">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or inquiries, feel free to reach out to
              us. Our team will be happy to assist you.
            </p>
            <form>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6 mt-4">
            <h2>Address</h2>
            <p>
              <strong>MatrimonialSite</strong>
            </p>
            <p>123 Main Street</p>
            <p>City, Country</p>
            <h2>Contact Information</h2>
            <p>Email: info@matrimonialsitewebsite.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
