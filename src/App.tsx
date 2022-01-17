import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Examples } from "./Examples";

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Examples />
      </div>
    </Suspense>
  );
}

export default App;
