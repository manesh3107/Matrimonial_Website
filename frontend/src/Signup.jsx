import React from "react";
import { Link ,Navigate} from "react-router-dom";
import { useState } from "react";
import background from "./login.jpg";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Button from "@mui/material/Button";
import axios from "axios";
import Navbar from "./Navbar";

function Signup() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [dob, setDob] = useState(new Date());
  const [age, setAge] = useState(null);
  const [nri, setNri] = useState("");
  const [height, setHeight] = useState("");
  const [cast, setCast] = useState("");
  const [maritialstatus, setMaritialstatus] = useState("");
  const [fathername, setFathername] = useState("");
  const [mothername, setMothername] = useState("");
  const [eductaion, setEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [income, setIncome] = useState("");
  const [address, setAddress] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [physicaldisability, setPd] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("mname", mname);
    formData.append("lname", lname);
    formData.append("gender", gender);
    formData.append("mobilenumber", mobilenumber);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("dob", dob);
    formData.append("age", age);
    formData.append("nri", nri);
    formData.append("height", height);
    formData.append("cast", cast);
    formData.append("maritialstatus", maritialstatus);
    formData.append("fathername", fathername);
    formData.append("mothername", mothername);
    formData.append("eductaion", eductaion);
    formData.append("occupation", occupation);
    formData.append("income", income);
    formData.append("address", address);
    formData.append("hobbies", hobbies);
    formData.append("physicaldisability", physicaldisability);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        alert('Registration Sucessfull')
        setMessage("User created successfully");
        setAuth(true);
      }
    } catch (error) {
      console.error("Error uploading user data", error);
      setMessage("Error creating user");
    }
  };
  return (
    <>
    <Navbar />
      {auth && <Navigate to="/Login" />}
      <div className="vh-70 d-flex justify-content-center align-items-center mt-5 ">
        <div className="container ">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 ">
              <div className="card bg-white " style={myStyle}>
                <div className="card-body p-5 ">
                  <form className="mb-3 mt-md-4 " onSubmit={handleImageUpload}>
                    <h2 className="fw-bold mb-2 text-uppercase text-center ">
                      Register Now!
                    </h2>

                    <div className="mb-3">
                      <label htmlFor="fname" className="form-label fs-5">
                        Firstname
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fname"
                        placeholder="Firstname "
                        onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mname" className="form-label fs-5">
                        Middlename
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mname"
                        placeholder="MiddleName"
                        onChange={(e) => setMname(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lname" className="form-label fs-5">
                        Lastname
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lname"
                        placeholder="Lastname"
                        onChange={(e) => setLname(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label d-flex fs-5">Gender</label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="male"
                          value="male"
                          selected
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label className="form-check-label fs-5" htmlFor="male">
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="female"
                          value="female"
                          onChange={(e) => setGender(e.target.value)}
                        />
                        <label
                          className="form-check-label fs-5"
                          htmlFor="female"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="number" className="form-label fs-5 ">
                        Mobile Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="number"
                        placeholder="1234567895"
                        onChange={(e) => setMobilenumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label fs-5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="abc@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label fs-5">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="*******"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="DOB" className="form-label fs-5">
                        Date Of Birth
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="DOB"
                        onChange={(e) => setDob(e.target.value)}
                        required
                      />
                    </div>

                    <div class="mb-3">
                      <label htmlFor="age" class="form-label fs-5">
                        Age
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="age"
                        placeholder="20-80 "
                        min="20"
                        max="80"
                        onChange={(e) => setAge(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label mx-auto d-flex fs-5  ">
                        NRI
                      </label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="nri"
                          id="nriyes"
                          value="yes"
                          onChange={(e) => setNri(e.target.value)}
                        />
                        <label className="form-check-label fs-5" htmlFor="yes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="nri"
                          id="nrino"
                          value="no"
                          onChange={(e) => setNri(e.target.value)}
                        />
                        <label className="form-check-label fs-5" htmlFor="no">
                          No
                        </label>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label htmlFor="height" class="form-label fs-5">
                        Height
                      </label>

                      <select
                        class="form-select"
                        id="height"
                        name="height"
                        defaultValue="--Select Your Height--"
                        onChange={(e) => setHeight(e.target.value)}
                        required
                      >
                        <option selected hidden>
                          --Select Your Height--
                        </option>
                        <option value="4'6">4'6"</option>
                        <option value="4'7">4'7"</option>
                        <option value="4'8">4'8"</option>
                        <option value="4'9">4'9"</option>
                        <option value="5'0">5'0"</option>
                        <option value="5'1">5'1"</option>
                        <option value="5'2">5'2"</option>
                        <option value="5'3">5'3"</option>
                        <option value="5'4">5'4"</option>
                        <option value="5'5">5'5"</option>
                        <option value="5'6">5'6"</option>
                        <option value="5'7">5'7"</option>
                        <option value="5'8">5'8"</option>
                        <option value="5'9">5'9"</option>
                        <option value="6'0">6'0"</option>
                        <option value="6'1">6'1"</option>
                        <option value="6'2">6'2"</option>
                        <option value="6'3">6'3"</option>
                        <option value="6'4">6'4"</option>
                        <option value="6'5">6'5"</option>
                        <option value="6'6">6'6"</option>
                        <option value="6'7">6'7"</option>
                        <option value="6'8">6'8"</option>
                        <option value="6'9">6'9"</option>
                        <option value="7'0">7'0"</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="cast" class="form-label fs-5">
                        Select Cast
                      </label>

                      <select
                        className="form-select"
                        id="cast"
                        name="cast"
                        onChange={(e) => setCast(e.target.value)}
                        required
                      >
                        <option selected hidden>--Select Cast--</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Jain">Jain</option>
                        <option value="Punjabi">Punjabi</option>
                        <option value="Sindhi">Sindhi</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label className="form-label d-flex fs-5">
                        Maritial Status
                      </label>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="status"
                          id="single"
                          value="single"
                          onChange={(e) => setMaritialstatus(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="single">
                          Single
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="status"
                          id="divorced"
                          value="divorced"
                          onChange={(e) => setMaritialstatus(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="divorced">
                          Divorced
                        </label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="status"
                          id="widowed"
                          value="widowed"
                          onChange={(e) => setMaritialstatus(e.target.value)}
                        />
                        <label className="form-check-label" htmlFor="widowed">
                          Widowed
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="father" className="form-label fs-5">
                        Fathers Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="father"
                        placeholder="Fathers Name"
                        onChange={(e) => setFathername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="mother" className="form-label fs-5">
                        Mothers Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="mother"
                        placeholder="Mothers Name"
                        onChange={(e) => setMothername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="education" className="form-label fs-5">
                        Education
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="plocation"
                        placeholder="e.g. B.E. Computer Engineering"
                        onChange={(e) => setEducation(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="Occupation" className="form-label fs-5">
                        Occupation
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="Occupation"
                        placeholder="Computer Engineeer"
                        onChange={(e) => setOccupation(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="height" className="form-label fs-5">
                        Annual Income
                      </label>

                      <select
                        className="form-select"
                        id="AnnualIncome"
                        name="income"
                        onChange={(e) => setIncome(e.target.value)}
                        required
                      >
                        <option selected hidden>
                          --Select Your Annual Income--
                        </option>
                        <option value="0-2.5">Rs. 0-2.5 Lakhs per year</option>
                        <option value="2.5-5.0">
                          Rs. 2.5-5.0 Lakhs per year
                        </option>
                        <option value="5.0-7.5">
                          Rs. 5.0-7.5 Lakhs per year
                        </option>
                        <option value="7.5-10">
                          Rs. 7.5-10 Lakhs per year
                        </option>
                        <option value="10-20">Rs. 10-20 Lakhs per year</option>
                        <option value="20-30">Rs. 20-30 Lakhs per year</option>
                        <option value="30-40">Rs. 30-40 Lakhs per year</option>
                        <option value="40-50">Rs. 40-50 Lakhs per year</option>
                        <option value="50+">Rs. 50+ Lakhs per year</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="prlocation" className="form-label fs-5">
                        Present Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="prlocation"
                        placeholder="e.g. Ahmedabad "
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="hobbies" className="form-label fs-5">
                        Hobbies
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="hobbies"
                        placeholder="e.g. music,travelling"
                        onChange={(e) => setHobbies(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label mx-auto d-flex fs-5  ">
                        Physical Disability
                      </label>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="physicaldisability"
                          id="yes"
                          value="yes"
                          onChange={(e) => setPd(e.target.value)}
                        />
                        <label className="form-check-label fs-5" htmlFor="yes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="physicaldisability"
                          id="no"
                          value="no"
                          onChange={(e) => setPd(e.target.value)}
                        />
                        <label className="form-check-label fs-5" htmlFor="no">
                          No
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="mother" className="form-label fs-5">
                        Upload Image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        onChange={handleImageChange}
                      />
                    </div>
                    <div className="mb-3">
                      <Button type="submit" variant="outlined">Register <HowToRegIcon/></Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
