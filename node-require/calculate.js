const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const op = process.argv[3];
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);

if (op === 'plus') console.log('result:', add(num1, num2));
if (op === 'minus') console.log('result:', subtract(num1, num2));
if (op === 'times') console.log('result:', multiply(num1, num2));
if (op === 'over') console.log('result:', divide(num1, num2));
