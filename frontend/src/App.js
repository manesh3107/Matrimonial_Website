import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";

// import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import About1 from "./About1";
import Contactus from "./Contactus";
import Home from "./Home";
import Signup from "./Signup";
import background from "./bg3.jpg"
import Footer from "./Footer";
import Profile from "./Profile";
import Plist from "./Plist";
import "./style.css";
import LoginData from "./LoginData";

function App() {
  const myStyle={
    backgroundImage:`url(${background})`,
    height:'100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div style={myStyle} className="hide-scrollbars">
      
      <Routes>
        <Route path="/" Component={Home} />
        {/* <Route path="/H" Component={Home} />/ */}
        <Route path="About" Component={About1} />
        <Route path="Contact" Component={Contactus} />
        <Route path="Login" Component={Login} />
        <Route path="Signup" Component={Signup} />
        <Route path="Plist" Component={Plist} />
        <Route path="Wishlist" Component={Plist} />
        <Route path="Profile/:id" Component={Profile} />
        <Route path='Logindata' Component={LoginData}/>
      </Routes>
      {/* <Chatbot/> */}
      <Footer/>
    </div>
  );
}

export default App;
