import Row from "./Row";
import {exportComponentAsPNG } from 'react-component-export-image';
import { useRef } from "react";
const Editor = ({ width, height,selected }) => {
  const drawingRef =useRef();
  let rows = [];
  for (let i = 0; i < height; i++) {
    rows.push(<Row width={width} selected={selected} />);
  }
  return (
  <>
  <div ref={drawingRef}>{rows.map((elem, idx) => elem)}</div>
  <button style={{margin:"10px"}} onClick={()=>exportComponentAsPNG(drawingRef)}>Export as PNG</button>
  </>
)};

export default Editor;
