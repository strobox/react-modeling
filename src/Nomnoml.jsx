import factory from './reactFactory';

import nomnoml from 'nomnoml';

export default factory("canvas", (content,node,{onError}) => {
    if (node)
      try {
        nomnoml.draw(node, content);
      } catch (e) {
        console.error(e);
        onError && onError(e,content);
      }
})