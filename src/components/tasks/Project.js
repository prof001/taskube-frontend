import React from "react";
import './Tasks.css'
import Task from "./Task";
import {Button, Modal} from "react-bootstrap";
import PropTypes from 'prop-types';
import axios from 'axios'

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      taskDescription: ''
    }
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  };

  handleShow = () => {
    this.setState({
      show: true
    })
  };

  handleTaskDescription = (event) => {
    this.setState({
      taskDescription: event.target.value
    })
  };

  createTask = async () => {
    const taskDetail = {
      projectId: this.props.projectId,
      description: this.state.taskDescription
    };
    try {
      const res = await axios.post('http://localhost:3000/api/v1/projects/createTask', taskDetail);
      console.log(res.data);
      this.handleClose();
    } catch (err) {
      console.log(err);
      this.handleClose();
    }
  };

  render() {
    const {title, description} = this.props;
    return (
      <div className="projectCard col-md-3 mr-3">
        <h3>{title}</h3>
        <div className="projectSubtitle">{description}</div>
        <hr className="projectDivideHr"/>
        <div className="addTaskBtnDiv">
          <button className="btn btn-sm btn-primary" onClick={this.handleShow}>Add Task</button>
        </div>
        <Task/>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label>Task Description</label>
              <textarea className="form-control" cols="8" onChange={this.handleTaskDescription}
                        value={this.state.taskDescription}>
              </textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.createTask}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired
};


export default Project;
