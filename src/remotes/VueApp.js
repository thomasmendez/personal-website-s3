// eslint-disable-next-line import/no-unresolved
import { mount } from 'vueApp/App';
import React, { useRef, useEffect } from 'react';

const VueApp = () => {
    const ref = useRef(null);
    useEffect(() =>{
        mount(ref.current);
    }, []);
    return(
      <div ref={ref} />
    );
};

export default VueApp;