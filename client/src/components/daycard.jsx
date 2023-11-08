import React from "react";
import { useNavigate } from "react-router-dom";
import { TaskCard } from "./TaskCard";
import { useState } from "react";

export function Daycard({ tasks = [], removeTask, hashv }) {
  let b = 0;

  const [hash, setHash] = useState(hashv);
  const navigate = useNavigate();
  const handleClick = () => {
    if (b === 0) {
      navigate(`/tasks-create?hash=${hash}`);
      console.log(`the hash is ${hash}`);
      console.log(`the tasks in daycard are ${JSON.stringify(tasks)}`);
      console.log(`the hashv is ${hashv}`);
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
