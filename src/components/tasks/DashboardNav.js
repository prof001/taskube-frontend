import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faCog} from "@fortawesome/free-solid-svg-icons";
import '../layouts/Layouts.css';
import {Button, Modal} from "react-bootstrap";

const DashboardNav = () => {
  const [show, setShow] = useState(false);
  const handleModalClose = () => setShow(false);
  const handleModalShow = () => setShow(true);
  const handleFormSubmit = () => {};

  return (
    <nav className="navbar navbar-expand-lg tmNavBar">
      <span className="navbar-brand">Taskube</span>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <button className="btn btn-outline-primary text-white mr-5" onClick={handleModalShow}>
              <FontAwesomeIcon icon={faPlus} className="mr-2"/>Create Project
            </button>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faCog} size="2x"/>
          </li>
        </ul>
      </div>

      <Modal show={show} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>Project Title</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Project Description</label>
              <textarea className="form-control" cols="8">
            </textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </nav>
  )
};

export default DashboardNav
