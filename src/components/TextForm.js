import { getByTestId } from "@testing-library/react";
import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("upper case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("lower case was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearText = () => {
    console.log("lower case was clicked " + text);
    let newText = "";
    setText(newText);
  };
  const handleCopyText = () => {
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-danger mx-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-3" onClick={handleClearText}>
          Clear the text
        </button>
        <button className="btn btn-danger mx-3" onClick={handleCopyText}>
          Copy text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text Summery</h1>
        <p> {text.length} charcter</p>
      </div>
    </>
  );
}
