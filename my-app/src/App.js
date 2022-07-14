import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/api/deploy")
      .then((response) => response.text())
      .then((promise) => {
        setMsg(promise);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>프로젝트</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
