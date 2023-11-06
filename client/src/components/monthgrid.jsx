import React from "react";
import { Daycard } from "./daycard";

export function Month() {
  const currentDate = new Date();
  const days = [];

  for (let i = 0; i < 7; i++) {
    const day = new Date(currentDate);
    day.setDate(currentDate.getDate() + i);
    days.push(day);
  }

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
        <div className="col-md-1">7:00</div>
        <Daycard hashv={1} />
        <Daycard hashv={2} />
        <Daycard hashv={3} />
        <Daycard hashv={4} />
        <Daycard hashv={5} />
        <Daycard hashv={6} />
        <Daycard hashv={7} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">8:00</div>
        <Daycard hashv={8} />
        <Daycard hashv={9} />
        <Daycard hashv={10} />
        <Daycard hashv={11} />
        <Daycard hashv={12} />
        <Daycard hashv={13} />
        <Daycard hashv={14} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">9:00</div>
        <Daycard hashv={15} />
        <Daycard hashv={16} />
        <Daycard hashv={17} />
        <Daycard hashv={18} />
        <Daycard hashv={19} />
        <Daycard hashv={20} />
        <Daycard hashv={21} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">10:00</div>
        <Daycard hashv={22} />
        <Daycard hashv={23} />
        <Daycard hashv={24} />
        <Daycard hashv={25} />
        <Daycard hashv={26} />
        <Daycard hashv={27} />
        <Daycard hashv={28} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">8:00</div>
        <Daycard hashv={29} />
        <Daycard hashv={30} />
        <Daycard hashv={31} />
        <Daycard hashv={32} />
        <Daycard hashv={33} />
        <Daycard hashv={34} />
        <Daycard hashv={35} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">11:00</div>
        <Daycard hashv={36} />
        <Daycard hashv={37} />
        <Daycard hashv={38} />
        <Daycard hashv={39} />
        <Daycard hashv={40} />
        <Daycard hashv={41} />
        <Daycard hashv={42} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">12:00</div>
        <Daycard hashv={43} />
        <Daycard hashv={44} />
        <Daycard hashv={45} />
        <Daycard hashv={46} />
        <Daycard hashv={47} />
        <Daycard hashv={48} />
        <Daycard hashv={49} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">1:00</div>
        <Daycard hashv={50} />
        <Daycard hashv={51} />
        <Daycard hashv={52} />
        <Daycard hashv={53} />
        <Daycard hashv={54} />
        <Daycard hashv={55} />
        <Daycard hashv={56} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">2:00</div>
        <Daycard hashv={57} />
        <Daycard hashv={58} />
        <Daycard hashv={59} />
        <Daycard hashv={60} />
        <Daycard hashv={61} />
        <Daycard hashv={62} />
        <Daycard hashv={63} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">3:00</div>
        <Daycard hashv={64} />
        <Daycard hashv={65} />
        <Daycard hashv={66} />
        <Daycard hashv={67} />
        <Daycard hashv={68} />
        <Daycard hashv={69} />
        <Daycard hashv={70} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">4:00</div>
        <Daycard hashv={71} />
        <Daycard hashv={72} />
        <Daycard hashv={73} />
        <Daycard hashv={74} />
        <Daycard hashv={75} />
        <Daycard hashv={76} />
        <Daycard hashv={77} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">5:00</div>
        <Daycard hashv={78} />
        <Daycard hashv={79} />
        <Daycard hashv={80} />
        <Daycard hashv={81} />
        <Daycard hashv={82} />
        <Daycard hashv={83} />
        <Daycard hashv={84} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">6:00</div>
        <Daycard hashv={85} />
        <Daycard hashv={86} />
        <Daycard hashv={87} />
        <Daycard hashv={88} />
        <Daycard hashv={89} />
        <Daycard hashv={90} />
        <Daycard hashv={91} />
      </div>
      <div className="row">
        <div className="col-md-1 d-flex">7:00</div>
        <Daycard hashv={92} />
        <Daycard hashv={93} />
        <Daycard hashv={94} />
        <Daycard hashv={95} />
        <Daycard hashv={96} />
        <Daycard hashv={97} />
        <Daycard hashv={98} />
      </div>
    </div>
  );
}
