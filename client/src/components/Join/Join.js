import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

export default function Join() {
  let [name, setname] = useState("");
  let [room, setRoom] = useState("");

  function handleChange(event) {
    let { name, value } = event.target;

    if (name === "name") {
      setname(value);
    } else if (name === "room") {
      setRoom(value);
    }
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Welcome to the Community</h1>
        <div>
          <input
            type="text"
            name="name"
            className="joinInput"
            placeholder="Please enter your name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="room"
            className="joinInput mt-20"
            placeholder="Please enter a room name"
            value={room}
            onChange={handleChange}
          />
        </div>
        <Link
          to={`/chat?name=${name}&room=${room}`}
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
        >
          <button className="button mt-20">Enter</button>
        </Link>
      </div>
    </div>
  );
}
