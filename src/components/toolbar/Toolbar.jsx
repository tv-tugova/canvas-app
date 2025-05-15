import "./toolbar.css";

export default function Toolbar({ tool, setTool, onClear }) {
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
      <button className="clearall" onClick={onClear}>
        Очистить все
      </button>
    </div>
  );
}
