import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import TaskEdit from "./TaskEdit";

const Tasks = ({ task, index, onToggleComplete, onDelete, onEdit }) => {
  const [editpage, setedit] = useState(false);

  const editpopup = () => {
    setedit(!editpage);
  };
  // const saveedit = () => {};
  return (
    <>
      {editpage && (
        <TaskEdit
          task={task}
          index={index}
          onEdit={onEdit}
          openclose={editpopup}
        />
      )}
      <div className="list-group w-100 mb-2">
        <div
          className={`list-group-item d-flex flex-row align-items-center ${
            task.completed
              ? "bg-light text-success text-decoration-line-through"
              : ""
          }`}
        >
          <input
            className="form-check-input me-2"
            type="checkbox"
            id={index}
            checked={task.completed}
            onChange={() => onToggleComplete(index)}
          />
          <label className="me-auto text-capitalize fs-5" htmlFor={index}>
            {task.name}
          </label>
          <button className="btn btn-outline-primary me-2" onClick={editpopup}>
            <FaRegEdit className=" fs-5 text-center" />
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(index)}
          >
            <MdDelete className="fs-5 text-center" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Tasks;
