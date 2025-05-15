import { useState } from "react";
import Toolbar from "../toolbar/Toolbar";
import Canvas from "../canvas/Canvas";

import "./App.css";

function App() {
  const [tool, setTool] = useState("brush");

  return (
    <div className="app">
      <div className="container">
        <Canvas tool={tool} />
        <Toolbar tool={tool} setTool={setTool} />
      </div>
    </div>
  );
}

export default App;
