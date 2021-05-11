var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max(num1, num2, num3);
console.log('value of maximumValue:', maximumValue);

var heroes = [
  'superman', 'batman', 'ironman', 'thor'
];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'You Are Not Stupid: Computers and Techonology Simplified',
    author: 'Jack Stanley'
  },
  {
    title: 'HTML and CSS QuickStart Guide',
    author: 'David DuRocher'
  },
  {
    title: 'Computer Programming for Beginners',
    author: 'Nathan Clark'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library array:', library);

var fullName = 'John Hwang';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
