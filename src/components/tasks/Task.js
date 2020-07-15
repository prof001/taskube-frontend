import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

const Task = () => {
  return (
    <div className="taskCard">
      <div className="taskDescription">
        Task description task description task description
        task description task description
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

export default Task
