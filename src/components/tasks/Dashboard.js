import React, {useState} from "react";
import DashboardNav from "./DashboardNav";
import Project from "./Project";
import './Tasks.css';
import {Alert} from "react-bootstrap";

const Dashboard = () => {
  document.body.style = 'background: #F2F5F7';
  const [show, setShow] = useState(false);

  const updateShow = () => setShow(true);
  const displayResponse = (val) => {
    // console.log(val);
  };

  return (
    <div className="dashboard">
      <DashboardNav response={displayResponse} alert={updateShow}/>
      {show && (
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          New project has been created!
        </Alert>
      )}
      <div className="row mx-1">
        <Project/>
        <Project/>
        <Project/>
        <Project/>
      </div>
    </div>
  )
};

export default Dashboard
