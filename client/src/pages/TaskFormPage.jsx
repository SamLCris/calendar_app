import { useForm } from "react-hook-form";
import { createTask } from "../api/task.api";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function TaskFormPage() {
  const location = useLocation();
  const newhash = new URLSearchParams(location.search).get("hash");

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    data = { hash: newhash, ...data };
    console.log(data);
    await createTask(data);
    navigate("/tasks");
    console.log(`the hash is ${newhash}`);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          name="title"
        />
        <textarea
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
          name="description"
        ></textarea>
        <input
          type="datetime-local"
          placeholder="date"
          {...register("date", { required: true })}
        />
        <button>Create Task</button>
      </form>
    </div>
  );
}
