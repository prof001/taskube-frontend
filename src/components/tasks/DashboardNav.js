import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faCog} from "@fortawesome/free-solid-svg-icons";
import '../layouts/Layouts.css';
import {Button, Modal} from "react-bootstrap";

class DashboardNav extends React.Component{
  state = {
    show: false,
    title: '',
    description: ''
  };
  // const [show, setShow] = useState(false);

  /*handleModalClose = () => setShow(false);
  handleModalShow = () => setShow(true);
  handleFormSubmit = () => {};*/

  handleModalShow = () => {
    this.setState({
      show: true,
    })
  };
  handleModalClose = () => {
    this.setState({
      show: false
    })
  };
  setTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  };
  setDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  };
  handleFormSubmit = () => {
    const {title, description} = this.state;
    const projectDetails = {title, description};
    console.log(projectDetails);
    this.setState({
      title: '',
      description: ''
    });
    this.handleModalClose();
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg tmNavBar">
        <span className="navbar-brand">Taskube</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="btn btn-outline-primary text-white mr-5" onClick={this.handleModalShow}>
                <FontAwesomeIcon icon={faPlus} className="mr-2"/>Create Project
              </button>
            </li>
            <li className="nav-item">
              <FontAwesomeIcon icon={faCog} size="2x"/>
            </li>
          </ul>
        </div>

        <Modal show={this.state.show} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group">
                <label>Project Title</label>
                <input type="text" className="form-control" value={this.state.title}
                  onChange={this.setTitle}/>
              </div>
              <div className="form-group">
                <label>Project Description</label>
                <textarea className="form-control" cols="8" value={this.state.description}
                  onChange={this.setDescription}>
                </textarea>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleFormSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </nav>
    )
  }
}

export default DashboardNav
