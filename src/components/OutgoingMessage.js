import React from "react";
import { monthHour } from "../helpers/date";

const OutgoingMessage = ({ msg }) => {
  return (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{msg.message}</p>
        <span className="time_date">{monthHour(msg.createdAt)}</span>
      </div>
    </div>
  );
};

export default OutgoingMessage;
