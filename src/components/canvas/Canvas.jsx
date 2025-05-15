import { useEffect, useRef, useState } from "react";

import "./canvas.css";

export default function Canvas({ tool }) {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth = 5;
    context.lineCap = "round";
    setCtx(context);
  }, []);

  const start = (e) => {
    if (!ctx) return;
    isDrawing.current = true;
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawing.current || !ctx) return;
    ctx.strokeStyle = tool === "eraser" ? "white" : "black";
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
  };

  const stop = () => {
    if (!ctx) return;
    isDrawing.current = false;
    ctx.closePath();
  };

  return (
    <canvas
      id={"canvas"}
      ref={canvasRef}
      width={600}
      height={300}
      className="canvas"
      onMouseDown={start}
      onMouseMove={draw}
      onMouseUp={stop}
    />
  );
}
