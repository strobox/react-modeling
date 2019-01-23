import factory from './reactFactory';

import {mermaidAPI} from 'mermaid';

export default factory("div", (content,node,{onError}) => {
    if (node)
      try {
        const id = 'mermaid_draw';
        var insertSvg = (svgCode, bindFunctions) => {
            node.innerHTML = svgCode;
        };

        var graph = mermaidAPI.render(id, content, insertSvg, node);
      } catch (e) {
        console.error(e);
        onError && onError(e,content);
      }
})

