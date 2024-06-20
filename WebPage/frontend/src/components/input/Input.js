import { useState } from "react";
import "./input.css";

export default function Input({ onSendMessage }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!input) return;
    onSendMessage(input);
    // setInput("");
  }

  return (
    <form className="input-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type Your Content....."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17.5"
        height="22"
        viewBox="0 0 35 44"
        fill="none"
        className="arrow"
        onClick={handleSubmit}
      >
        <path
          d="M9.39644 0L0 8.24596L15.6607 21.9892L0 35.7325L9.39644 43.9785L34.4536 21.9892L9.39644 0Z"
          fill="black"
        />
      </svg>
    </form>
  );
}
