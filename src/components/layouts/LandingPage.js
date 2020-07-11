import React from 'react';
import Navbar from "./Navbar";
import Login from "./Login";
import image1 from '../../images/image1.png'
/*import Navbar from "./components/layouts/Navbar";
import Login from "./components/layouts/Login";
import image1 from './images/image1.png';*/

const LandingPage = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={image1} alt="Person typing"/>
          </div>
          <div className="col-md-5 mt-5">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
