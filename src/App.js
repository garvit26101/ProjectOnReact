import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode}></Navbar>
        {/* <Alert alert={alert}></Alert> */}
        <div className="container my-3">
          <Routes>
            {/* <Route path="/about">
              {/* <About />
            </Route> */}{" "}
            <Route path="/">
              <>
                {/* <TextForm heading="Enter the text to analyze"></TextForm> */}
                {/* <About></About> */}
              </>
            </Route>
          </Routes>
        </div>{" "}
        <Routes>
          <Route>
            <Route
              path="/"
              element={
                <>
                  <TextForm heading="Enter the text to analyze"></TextForm>
                  {/* <About></About> */}
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
