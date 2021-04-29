import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [message, setMessage] = useState("Ei vielä mitään");
  axios
    .get("http://localhost:4000/hello")
    .then(function (response) {
      setMessage(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return <div className="App">{message}</div>;
}

export default App;
