import React from "react";

import { Daycard } from "./daycard";

export function Month({ tasks, removeTask }) {
  const currentDate = new Date();
  const days = [];

  for (let i = 0; i < 7; i++) {
    const day = new Date(currentDate);
    day.setDate(currentDate.getDate() + i);
    days.push(day);
  }
  console.log(`the first day param is ${days[1].getDay()}6am`);

  return (
    <div className="container justify-content-center ">
      <div className="row ">
        <div className="col-md-1">hour</div>
        <div className="col ">
          <strong>
            {new Date().toLocaleDateString("en-US", { weekday: "long" })}
          </strong>{" "}
        </div>
        <div className="col">
          <strong>
            {days[1].toLocaleDateString("en-US", { weekday: "long" })}
          </strong>
        </div>
        <div className="col">
          <strong>
            {days[2].toLocaleDateString("en-US", { weekday: "long" })}
          </strong>
        </div>
        <div className="col">
          <strong>
            {days[3].toLocaleDateString("en-US", { weekday: "long" })}
          </strong>
        </div>
        <div className="col">
          <strong>
            {days[4].toLocaleDateString("en-US", { weekday: "long" })}
          </strong>
        </div>
        <div className="col">
          <strong>
            {days[5].toLocaleDateString("en-US", { weekday: "long" })}
          </strong>
        </div>
        <div className="col">
          <strong>
            {days[6].toLocaleDateString("en-US", { weekday: "long" })}
          </strong>
        </div>
      </div>

      <div className="row">
        <div className="col-md-1">6:00am</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}6am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}6am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}6am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}6am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}6am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}6am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}6am`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">7:00am</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}7am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}7am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}7am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}7am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}7am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}7am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}7am`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">8:00am</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}8am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}8am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}8am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}8am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}8am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}9am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}8am`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">9:00am</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}9am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}9am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}9am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}9am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}9am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}9am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}9am`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">10:00am</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}10am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}10am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}10am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}10am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}10am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}10am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}10am`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">11:00am</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}11am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}11am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}11am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}11am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}11am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}11am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}11am`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">12:00am</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}12am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}12am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}12am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}12am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}12am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}12am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}12am`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">1:00pm</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}13pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}13pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}13pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}13pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}13pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}13pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}13pm`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">2:00pm</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}14pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}14pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}14pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}14pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}14pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}14pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}14pm`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">3:00pm</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}15am`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}15pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}15pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}15pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}15pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}15pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}15pm`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">4:00pm</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}16pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}16pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}16pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}16pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}16pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}16pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}16pm`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">5:00pm</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}17pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}17pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}17pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}17pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}17pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}17pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}17pm`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">6:00pm</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}18pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}18pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}18pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}18pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}18pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}18pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}18pm`}
        />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">7:00pm</div>
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${new Date().getDay()}19pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[1].getDay()}19pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[2].getDay()}19pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[3].getDay()}19pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[4].getDay()}19pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[5].getDay()}19pm`}
        />
        <Daycard
          tasks={tasks}
          removeTask={removeTask}
          hashv={`${days[6].getDay()}19pm`}
        />
      </div>
    </div>
  );
}
