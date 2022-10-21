import React, { Suspense } from "react";
import "./App.css";
import { Examples } from "./Examples";
import { Examples2 } from "./Examples2";

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Examples />
        <Examples2 />
      </div>
    </Suspense>
  );
}

export default App;
