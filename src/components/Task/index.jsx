import React from "react";
import CheckBox from "../Checkbox";
import DeleteTask from "../DeleteTask";
import ListTask from "../ListTask";
import "./style.css";
export default function Task({ id, title, isDone, desc }) {
  return (
    <div className="taskContainer">
      <p>{title}</p>
      <p>{desc}</p>
      <CheckBox isDone={isDone} id={id} />
      <DeleteTask id={id} />
    </div>
  );
}
