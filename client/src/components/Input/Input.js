import React, { useState } from "react";
import "./Input.css";

export default function Input(props) {
  let [message, setMessage] = useState("");

  function handleEnter(event) {
    event.preventDefault();

    if (message) {
      props.sendMessage(message);
      setMessage("");
    }
  }

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? handleEnter(event) : null
        }
      />
      <button className="sendButton" onClick={(event) => handleEnter(event)}>
        Submit
      </button>
    </form>
  );
}
