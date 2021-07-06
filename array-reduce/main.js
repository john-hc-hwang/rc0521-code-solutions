const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = numbers.reduce(reducer);
console.log('sum:', sum);

const multiply = (accumulator, currentValue) => accumulator * currentValue;
const product = numbers.reduce(multiply);
console.log('product:', product);

const transaction = (accumulator, currentValue) => {
  if (currentValue.type === 'deposit') {
    return accumulator + currentValue.amount;
  } else {
    return accumulator - currentValue.amount;
  }
};

const balance = account.reduce(transaction, 0);
console.log('balance:', balance);

const composite = Object.assign({}, traits[0], traits[1], traits[2], traits[3], traits[4]);
console.log('composite:', composite);
