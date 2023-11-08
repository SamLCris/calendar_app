import { useForm } from "react-hook-form";
import { createTask } from "../api/task.api";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function getAMorPM(date) {
  var hours = date.getHours();
  if (hours < 12) {
    return "am";
  } else {
    return "pm";
  }
}

export function TaskFormPage() {
  const location = useLocation();
  let newhash = new URLSearchParams(location.search).get("hash");
  let date = 0;
  let hours = 0;
  let day = 0;
  let ap = 0;
  if (newhash === null) {
    newhash = "createdup";
  }

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    if (newhash === "createdup") {
      date = new Date(data.date);
      hours = date.getHours();
      day = date.getDay();
      ap = getAMorPM(date);

      newhash = `${day}${hours}${ap}`;
    } else {
      data.date = new Date();
    }
    data = { hash: newhash, ...data };
    console.log(`the data is ${JSON.stringify(data)}`);
    await createTask(data);
    navigate("/tasks");
    console.log(`the hash is ${newhash}`);
  });

  return (
    <div className="conatiner">
      <form className="container" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
          name="title"
          className="col-12"
        />
        <textarea
          rows="3"
          placeholder="description"
          {...register("description", { required: true })}
          name="description"
          className="col-12"
        ></textarea>
        {newhash === "createdup" && (
          <div className="col-12">
            <input
              type="datetime-local"
              {...register("date", { required: true })}
              name="date"
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Create Task
        </button>
      </form>
    </div>
  );
}
