import { updateTask } from "../api/task.api";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function TaskEditPage() {
  const location = useLocation();
  const newid = new URLSearchParams(location.search).get("id");
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    await updateTask(newid, data);
    navigate("/tasks");
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
        <button>Edit Task</button>
      </form>
    </div>
  );
}
