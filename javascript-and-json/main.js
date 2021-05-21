var books = [
  {
    isbn: '978-0753476369',
    title: 'Ultimate Gamer: Career Mode',
    author: 'Craig Steele'
  },
  {
    isbn: '978-1250143686',
    title: 'My Life as a Gamer',
    author: 'Janet Tashjian'
  },
  {
    isbn: '978-1338670875',
    title: 'Game On! 2021',
    author: 'Scholastic'
  }
];

console.log('Array of books:', books);
console.log('Typeof Array of books:', typeof books);

var serialization = JSON.stringify(books);
console.log('JSON.stringify(books):', serialization);
console.log('Typeof JSON.stringify(books):', typeof serialization);

var student = '{"id": 23,"name": "John Hwang"}';

var deserialization = JSON.parse(student);
console.log('JSON.parse(student):', deserialization);
