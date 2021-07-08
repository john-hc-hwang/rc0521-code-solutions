import React from 'react';
import ReactDOM from 'react-dom';

// function component
const CustomButton = () => {
  return <button>Click Me!</button>;
};

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
