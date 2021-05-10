var student = {
  firstName: 'John',
  lastName: 'Hwang',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Logistics Associate';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of stduent:', student);

var vehicle = {
  make: 'Scion',
  model: 'TC',
  year: 2009
};

vehicle['color'] = 'navy';
vehicle['isConvertible'] = false;

console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Rengar',
  type: 'cat'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
