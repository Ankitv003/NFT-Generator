import Pixel from "./Pixel";

const Row = ({ width, color, selected }) => {
  let pixels = [];
  for (let i = 0; i < width; i++) {
    pixels.push(<Pixel selected={selected} />);
  }
  return (
    <div style={{ display: "flex" }}>
      {pixels.map((elem) => (
        <h1>{elem}</h1>
      ))}
    </div>
  );
};

export default Row;
