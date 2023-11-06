import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getTasks } from "../api/task.api";
import { TaskCard } from "./TaskCard";

export function Daycard({ hashv }) {
  let b = 0;
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

  const [hash, setHash] = useState(hashv);
  const navigate = useNavigate();
  const handleClick = () => {
    if (b === 0) {
      navigate(`/tasks-create?hash=${hash}`);
      console.log(`the hash is ${hash}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="col pb-5 bg-light border border-dark flex-grow-1"
      style={{ height: "auto" }}
    >
      {tasks.map((task) => {
        if (task.hash == hash) {
          b = 1;
          return <TaskCard key={task.id} task={task} onDelete={removeTask} />;
        }
      })}
    </div>
  );
}
