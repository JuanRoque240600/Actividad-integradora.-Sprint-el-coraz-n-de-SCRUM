import React from 'react';

function Task(props) {
  return (
    <div className="task-container">
      <h3 className="task">{props.value}</h3>

    </div>
  );
}

export default Task;