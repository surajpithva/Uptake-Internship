"use strict";
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const suraj = new Person("parth", 2006);
console.log(suraj);

//Important note when we create constructer
//1. New {} is created
//2. function is called , this = {}
//3. {} linked to prototype
//4. function automatic return {}

const pratik = new Person("ankit", 1999);
const darshan = new Person("akshar", 2005);
console.log(suraj instanceof Person); //true

//prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
suraj.calcAge();
pratik.calcAge();

console.log(Person.prototype.isPrototypeOf(suraj));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "HOMO";
console.log(suraj.species, pratik.species);
