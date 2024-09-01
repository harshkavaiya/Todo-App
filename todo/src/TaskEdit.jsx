import React, { useState } from "react";

const TaskEdit = ({ openclose, index, task, onEdit }) => {
  const [tname, settname] = useState(task.name);

  const hanlesubmit = (e) => {
    e.preventDefault();
    onEdit(index, tname);
    openclose();
  };
  return (
    <div className="editpopup  text-white   ">
      <form
        className="bg-primary w-50 h-50 rounded-3 p-2"
        onSubmit={hanlesubmit}
      >
        <h3 className="text-center mb-3">Task Edit</h3>
        <div className="input-group flex-nowrap ">
          <span className="input-group-text " id="addon-wrapping">
            Task :
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter New Task"
            value={tname}
            onChange={(e) => settname(e.target.value)}
          />
        </div>
        <div className="mt-5 d-flex align-items-center justify-content-evenly">
          <button className="btn btn-danger fs-5" onClick={openclose}>
            Close
          </button>
          <button
            type="submit"
            onClick={onEdit}
            className="btn btn-success fs-5"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskEdit;
