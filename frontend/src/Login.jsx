import React from "react";
import { Link, Navigate } from "react-router-dom";
import background from "./login.jpg";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";  
const Login = () => {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/user/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const user = response.data;
        setLoggedInUser(user);
        // Save data to IndexedDB after a successful login

        alert("Login successful");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error logging in");
    }
  };

  return (
    <>
    <Navbar />
      {loggedInUser && <Navigate to="/" />}
      <div className="vh-100 d-flex justify-content-center align-items-center mt-2">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card " style={myStyle}>
                <div className="card-body p-5">
                  <form className="mb-3 mt-md-4" onSubmit={handleLogin}>
                    <h2 className="fw-bold mb-2 text-uppercase text-center ">
                      Login Now!
                    </h2>

                    <div className="mb-3">
                      <label for="email" className="form-label fs-5 ">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="password" className="form-label fs-5">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="*******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div
                      className="d-grid"
                      style={{ justifyContent: "center" }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        style={{ width: "100px" }}
                      >
                        Login
                      </Button>
                    </div>
                  </form>
                  <div className="row">
                    <h2 className="mb-0  text-center col-md-8 fs-3">
                      Don't have an account?
                    </h2>
                    <div className=" col-md-3">
                      <Link to="/Signup">
                        <Button
                          content="contained"
                          style={{ backgroundColor: "lightblue" }}
                        >
                          Register
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
