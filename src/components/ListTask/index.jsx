import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Task from "../Task";

export default function ListTask() {
  const Tasks = useSelector((state) => state.todos);
  const Done = useSelector((state) => state.done);
  if (Done == null)
    return (
      <div>
        {Tasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    );

  if (Done === "done")
    return (
      <div>
        {Tasks.map((task) =>
          task.isDone == true ? <Task key={task.id} {...task} /> : null
        )}
      </div>
    );
  else
    return (
      <div>
        {Tasks.map((task) =>
          task.isDone == false ? <Task key={task.id} {...task} /> : null
        )}
      </div>
    );
}
