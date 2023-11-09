import React, { useEffect, useState } from "react";
import { getTasks } from "../api/task.api";
import { TaskLists } from "./TaskLists";
import { Daycard } from "./daycard";
import { Month } from "./monthgrid";

export function TaskManager() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <TaskLists tasks={tasks} removeTask={removeTask} />
      <hr></hr>
      <Month tasks={tasks} removeTask={removeTask} />
    </div>
  );
}
