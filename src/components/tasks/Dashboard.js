import React from "react";
import DashboardNav from "./DashboardNav";
import Project from "./Project";
import './Tasks.css';

const Dashboard = () => {
  document.body.style = 'background: #F2F5F7';
  return (
    <div className="dashboard">
      <DashboardNav />
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
