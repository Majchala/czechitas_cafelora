import "./layer.css";

export const Layer = ({ layers }) => {
  return (
    <div className="layer">
      <div className="layer__color" style={{ backgroundColor: layers.color }}></div>
      <div className="layer__label">{layers.label}</div>
    </div>
  );
};
