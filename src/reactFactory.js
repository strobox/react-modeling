import * as React  from 'react';
import {useEffect, useRef} from 'react';

export default function factory(tag, drawwer) {
    
    return props => {
        const domRef = useRef();
        const {defaultContent,children, ...rest} = props;
        function draw(content) {
          drawwer(content,domRef.current,props);
        }
        useEffect(() => {
          if(!children && defaultContent)
            draw(defaultContent);
        },[])
        useEffect(() => {
          if(children)
            draw(children);
        },[children]);


        return React.createElement(tag,{ref:domRef,...rest})
    }
}