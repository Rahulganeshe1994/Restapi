import React from "react";
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./component/Home";
import {Link, Route,Routes} from "react-router-dom";
import AboutUs from "./component/About Us";
import ContactUs from "./component/Contact Us";
import Service from "./component/Services";
import Image from "./component/Images";
import Login from "./component/Login";
import Error from "./component/Error";
// import Stud from "./component/Api";

const App=()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/Service" element={<Service />}></Route>
        <Route path="/Image" element={<Image/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path="/Error" element={<Error/>}></Route>
        {/* <Route path="/Stud" element={<Stud />}></Route> */}
      </Routes>
        <nav className="navbar bg-dark text-white fixed-top">
        <div className={"container-fluid"}>
        <Link to="/" className="text-white">Home</Link>
        <Link to="/AboutUs" className="text-white">About Us</Link>
        <Link to="/ContactUs" className=" text-white" >Contact Us</Link>
        <Link to="/Service" className=" text-white" >Services</Link>
        <Link to="/Image" className=" text-white" >Images</Link>
          {/* <Link to="/Stud" className=" text-white" >Stud</Link> */}
          <form class="form-inline">
            <input class="form-control " type="search" placeholder="Search" aria-label="Search"/>
          </form>

        <Link to="/Login" className="text-white bg-success" >Login </Link>
      </div>
    </nav>
    <div >

    </div>
    </>
  )
}
export default App;
