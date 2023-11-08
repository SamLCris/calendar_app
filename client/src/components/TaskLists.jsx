import React from "react";
import { TaskCard } from "./TaskCard";

export function TaskLists({ tasks = [], removeTask }) {
  return (
    <div>
      <h1>List of tasks</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={removeTask} />
      ))}
    </div>
  );
}
