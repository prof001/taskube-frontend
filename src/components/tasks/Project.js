import React from "react";
import './Tasks.css'
import Task from "./Task";

const Project = () => {
  return (
    <div className="projectCard col-md-3">
      <h3>Project Title</h3>
      <div className="projectSubtitle">Project subtitle project subtitle project subtitle project subtitle</div>
      <hr className="projectDivideHr"/>
      <div className="addTaskBtnDiv">
        <button className="btn btn-sm btn-primary">Add Task</button>
      </div>
      <Task />
    </div>
  )
};

export default Project;
