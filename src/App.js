import { useState } from "react";
import Layout from "./components/Layout";
import "./styles.css";
import Editor from "./components/Editor";
import { CirclePicker } from 'react-color';

const App = () => {
  const [width, setwidth] = useState(16);
  const [height, setheight] = useState(16);
  const [hide, setHide] = useState(false);
  const [selected, setSelected] = useState("#f44336");

  return (
    <div className="container">
    <Layout>
      {!hide ? (
        <div
          style={{
            border: "2px solid red",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>NFT Generator</h1>
          <label>Enter the width</label>
          <input
            onChange={(e) => setwidth(e.target.value)}
            value={width}
            type="number"
            placeholder="please enter width"
            style={{ padding: "4px" }}
          />
          <label>Enter the height</label>
          <input
            onChange={(e) => setheight(e.target.value)}
            value={height}
            type="number"
            placeholder="please enter height"
            style={{ padding: "4px" }}
          />
        </div>
      ) : (
        <>
          <Editor
            width={width}
            height={height}
            selected={selected}
          />
        </>
      )}
      <button
        onClick={() => setHide(!hide)}
        style={{ margin: "10px", padding: "4px", cursor: "pointer" }}
      >
        {!hide ? "Submit" : "Reset"}
      </button>
      <CirclePicker onChangeComplete={(color)=> setSelected(color.hex)}/>
    </Layout>
</div>
  );
};
export default App;
