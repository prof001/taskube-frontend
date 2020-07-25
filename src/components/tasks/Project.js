import React, {useState} from "react";
import './Tasks.css'
import Task from "./Task";
import {Button, Modal} from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";

const Project = () => {
  const [show, setShow] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDateTime = date => setDateTime(date);

  return (
    <div className="projectCard col-md-3">
      <h3>Project Title</h3>
      <div className="projectSubtitle">Project subtitle project subtitle project subtitle project subtitle</div>
      <hr className="projectDivideHr"/>
      <div className="addTaskBtnDiv">
        <button className="btn btn-sm btn-primary" onClick={handleShow}>Add Task</button>
      </div>
      <Task />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Task Description</label>
            <textarea className="form-control" cols="8">
            </textarea>
          </div>
          <div className="form-group">
            <label>Task Due Date</label>
            <DateTimePicker onChange={handleDateTime} value={dateTime}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default Project;
