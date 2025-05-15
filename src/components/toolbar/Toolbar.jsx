import "./toolbar.css";

export default function Toolbar({ tool, setTool }) {
  return (
    <div className="toolbar">
      <button
        className={tool === "brush" ? "active" : ""}
        onClick={() => setTool("brush")}
      >
        КИСТЬ
      </button>
      <button
        className={tool === "eraser" ? "active" : ""}
        onClick={() => setTool("eraser")}
      >
        ЛАСТИК
      </button>
    </div>
  );
}
