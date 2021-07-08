import React from 'react';
import ReactDOM from 'react-dom';

// function component below
const CustomButton = () => {
  return <button>Click Me!</button>;
};

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
