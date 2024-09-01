import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import Tasks from "./Tasks";

const App = () => {
  const [task, settask] = useState(() => {
    const fetchTask = localStorage.getItem("AllTasks");
    return fetchTask ? JSON.parse(fetchTask) : [];
  });
  const [newtask, setnewtask] = useState("");

  const taskbox = useRef(null);

  const savetask = () => {
    if (!newtask) {
      taskbox.current.focus();
      return alert("enter the task Field");
    }

    if (newtask.trim()) {
      settask((prevTasks) => {
        const updatetask = [...prevTasks, { name: newtask, completed: false }];
        localStorage.setItem("AllTasks", JSON.stringify(updatetask));
        taskbox.current.focus();
        return updatetask;
      });
      setnewtask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = task.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    settask(updatedTasks);
    localStorage.setItem("AllTasks", JSON.stringify(updatedTasks));
  };

  const editTask = (index, newTaskValue) => {
    const updatedTasks = task.map((task, i) =>
      i === index ? { ...task, name: newTaskValue } : task
    );

    settask(updatedTasks);
    localStorage.setItem("AllTasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = task.filter((_, i) => i !== index);
    settask(updatedTasks);
    localStorage.setItem("AllTasks", JSON.stringify(updatedTasks));
  };

  return (
    <div className="flexCenter container-xl mt-5 bg-primary  position-relative rounded-3 ">
      <div className="d-flex justify-content-around align-items-center w-100">
        <h3 className="text-white d-flex">TODO App</h3>
        <span className=" d-flex  fs-2   gap-3 ">
          <a
            href="https://github.com/harshkavaiya/Todo-App"
            className="text-dark"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/harsh_kavaiya_8989/"
            className="text-dark"
          >
            <FaInstagram />
          </a>
        </span>
      </div>
      <hr className="border border-2 border-white w-100 bg-white " />
      <div className="input-group ">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Tasks"
          onChange={(e) => setnewtask(e.target.value)}
          value={newtask}
          ref={taskbox}
        />
        <button className="btn btn-success" type="button" onClick={savetask}>
          Add+
        </button>
      </div>
      <hr className="border border-2 border-white w-100 bg-white " />
      {task.map((tasks, index) => {
        return (
          <Tasks
            key={index}
            task={tasks}
            index={index}
            onToggleComplete={toggleTaskCompletion}
            onEdit={editTask}
            onDelete={deleteTask}
          />
        );
      })}
    </div>
  );
};

export default App;
