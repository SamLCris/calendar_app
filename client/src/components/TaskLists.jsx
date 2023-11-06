import React, { useEffect, useState } from "react";
import { getTasks } from "../api/task.api";
import { TaskCard } from "./TaskCard";

export function TaskLists() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getTasks();
      console.log(res.data);
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onDelete={removeTask} />
      ))}
    </div>
  );
}
