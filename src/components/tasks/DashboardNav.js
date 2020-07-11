import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faCog} from "@fortawesome/free-solid-svg-icons";
import '../layouts/Layouts.css';

const DashboardNav = () => {
  return (
    <nav className="navbar navbar-expand-lg tmNavBar">
      <span className="navbar-brand">Taskube</span>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn btn-outline-primary text-white mr-5">
              <FontAwesomeIcon icon={faPlus} className="mr-2"/>Create Project
            </button>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faCog} size="2x"/>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default DashboardNav
