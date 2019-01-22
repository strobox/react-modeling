import * as React  from 'react';
import {useEffect, useRef} from 'react';
import nomnoml from 'nomnoml';

function drawOnCanvas(canvas, text) {
  if (canvas)
    try {
      nomnoml.draw(canvas, text);
    } catch (e) {
      console.error(e);
    }
}

export default function NomnomlCanvas(props) {
  const canvRef = useRef();

  function draw(text) {
    drawOnCanvas(canvRef.current, text);
  }
  useEffect(() => {
    if(!props.children && props.defaultContent)
      draw(props.defaultContent, false);
  },[])
  useEffect(() => {
    if(props.children)
      draw(props.children);
  },[props.children]);


  return <canvas ref={canvRef}></canvas>

}