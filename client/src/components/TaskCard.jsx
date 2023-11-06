import React from "react";
import { deleteTask } from "../api/task.api";
import { useNavigate } from "react-router-dom";

export function TaskCard({ task, onDelete }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/tasks-edit/?id=${task.id}`);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    onDelete(id);
  };

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>{task.date}</p>
      <hr />
      <button onClick={handleEdit}>edit Task</button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
}
