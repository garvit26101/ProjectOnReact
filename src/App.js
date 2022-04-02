import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import About from "./components/About";
function App() {
  const [mode, setMode] = useState("dark");

  return (
    <>
      <Navbar title="TextUtils" mode={mode}></Navbar>
      <div className="container my-30">
        <TextForm heading="Enter the text to analyze"></TextForm>
      </div>
    </>
  );
}

export default App;
