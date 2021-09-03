import React from 'react';
import ReactDOM  from 'react-dom';

const Amir = ()=>{
return React.createElement('h1',{}, 'hello');
};
ReactDOM.render(<Amir/> ,document.getElementById('root'));