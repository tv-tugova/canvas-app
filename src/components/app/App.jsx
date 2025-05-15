import { useState } from "react";
import Toolbar from "../toolbar/Toolbar";
import Canvas from "../canvas/Canvas";

import "./App.css";

function App() {
  const [tool, setTool] = useState("brush");

  const onClear = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 600, 300);
  };

  return (
    <div className="app">
      <div className="container">
        <Canvas tool={tool} />
        <Toolbar tool={tool} setTool={setTool} onClear={onClear} />
      </div>
    </div>
  );
}

export default App;
