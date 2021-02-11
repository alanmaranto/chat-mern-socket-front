import React from "react";
import SendMessage from "./SendMessage";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";

const Messages = () => {
  const messages = [1, 2, 3, 4, 5];
  return (
    <div className="mesgs">
      {/*                 <!-- Historia inicio -->
       */}{" "}
      <div className="msg_history">
        {messages.map((msg) =>
          msg % 2 ? (
            <IncomingMessage key={msg} />
          ) : (
            <OutgoingMessage key={msg} />
          )
        )}
      </div>
      {/*                 <!-- Historia Fin -->
       */}
      <SendMessage />
    </div>
  );
};

export default Messages;
