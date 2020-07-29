import React, {useEffect, useState} from "react";
import DashboardNav from "./DashboardNav";
import Project from "./Project";
import './Tasks.css';
import {Alert} from "react-bootstrap";
import axios from "axios";

const Dashboard = () => {
  document.body.style = 'background: #F2F5F7';
  const [show, setShow] = useState(false);
  const [projects, setProjects] = useState([]);

  const updateShow = () => setShow(true);
  const updateProjects = (val) => setProjects(val);
  useEffect(() => {
    pullRecords()
  }, []);

  const pullRecords = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/projects');
      updateProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard">
      <DashboardNav showAlert={updateShow} showProject={pullRecords}/>
      {show && (
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          New project has been created!
        </Alert>
      )}
      <div className="row mx-1">
        {projects.map(project => (
          <Project key={project.projectId} projectId={project.projectId} title={project.title}
                   description={project.description}/>
        ))}
      </div>
    </div>
  )
};

export default Dashboard
