function ExampleConstructor() {

}

console.log('value of the prototype property of the ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof of the prototype property of the ExampleConstructor:', typeof ExampleConstructor.prototype);

var exConst = new ExampleConstructor();
console.log(exConst);

var check = exConst instanceof ExampleConstructor;
console.log(check);
