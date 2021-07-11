import React from "react";
import "./Message.css";
import ReactEmojis from "react-emoji";

export default function Messages(props) {
  let {
    message: { user, msg },
    name,
  } = props;
  name = name.trim();

  let sendByCurrentUser = false;

  if (name === user) {
    sendByCurrentUser = true;
  }

  return sendByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{user}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmojis.emojify(msg)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{ReactEmojis.emojify(msg)}</p>
      </div>
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
}
