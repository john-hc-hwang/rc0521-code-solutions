import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const contents = [
  { number: '1', name: 'Scott Bowler', description: 'Super cool instructor aka the King of Vape Nation.' },
  { number: '2', name: 'Brett Albright', description: 'Also super cool instructor aka the King of clarification.' },
  { number: '3', name: 'Cohort', description: 'The diligent peasants including myself. Will later be Kings.' }
];

ReactDOM.render(
  <Accordion contents={contents} />,
  document.querySelector('#root')
);
