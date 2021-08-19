import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url = "";
  const token = "";
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then(
        (result) => {
          setTimeout(() => {
            setLoading(!result);
          }, 5000);
        },

        (error) => {
          setError(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading && (
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Please wait while loading...</p>
          </>
        )}
        {!loading && <p>Page has loaded...</p>}
        {error && <p>An error has occurred...</p>}
      </header>
    </div>
  );
}

export default App;
