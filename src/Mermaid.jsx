import React from 'react';
import {useEffect, useRef} from 'react';
import {mermaidAPI} from 'mermaid'

function drawOnCanvas(canvas, text) {
  if (canvas)
    try {
      const id = 'mermaid_draw';
      var insertSvg = (svgCode, bindFunctions) => {
          canvas.innerHTML = svgCode;
      };

      var graph = mermaidAPI.render(id, text, insertSvg, canvas);
    } catch (e) {
      console.error(e);
    }
}

export default function Mermaid(props) {
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


  return <div ref={canvRef}></div>

}