import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  { number: 1, imageUrl: '../src/images/1.png', description: 'Ivysaur' },
  { number: 2, imageUrl: '../src/images/2.png', description: 'Charmander' },
  { number: 3, imageUrl: '../src/images/3.png', description: 'Squirtle' },
  { number: 4, imageUrl: '../src/images/4.png', description: 'Pikachu' },
  { number: 5, imageUrl: '../src/images/5.png', description: 'Jigglypuff' }
];

ReactDOM.render(
  <Carousel images={ images }/>,
  document.querySelector('#root')
);
