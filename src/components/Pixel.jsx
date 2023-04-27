import { useState } from "react";

const Pixel = ({selected}) => {
  const [color, setColor] = useState("white");

  return (
    <div
      onClick={() => setColor(selected)}
      style={{ width: "1rem", height: "1rem", background: color }}
    ></div>
  );
};

export default Pixel;
