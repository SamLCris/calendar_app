import axios from "axios";

const taskApi = axios.create({
  baseURL: "http://localhost:8000/tareas/api/v1/tareas/",
});

export const getTasks = () => taskApi.get("/");

export const createTask = (task) => taskApi.post("/", task);

export const deleteTask = (id) =>
  axios.delete(`http://localhost:8000/tareas/api/v1/tareas/${id}/`);

export const updateTask = (id, task) => taskApi.put(`/${id}/`, task);
