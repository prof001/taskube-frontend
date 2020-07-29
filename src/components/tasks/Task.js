import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';

const Task = (props) => {
  const {description} = props;
  return (
    <div className="taskCard">
      <div className="taskDescription">
        {description}
      </div>
      <div className="taskActionDiv mt-2">
        <div>
          <FontAwesomeIcon icon={faTrash} className="trashIcon"/>
        </div>
        <div className="timeDiv">
          <input type="checkbox" className="doneCheckBox"/>
          <span className="taskDate">23 June 2020</span>
        </div>
      </div>
    </div>
  )
};

Task.propTypes = {
  taskId: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default Task
