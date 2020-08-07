// DESTRUCTURING ASSIGNMENT

let a, b;
[a, b] = [100, 200];
// REST PATTERN ... assigns whatever is left over to the variable rest
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// console.log(rest);

// ARRAY DESTRUCTURING
// const people = ["Salaam", "Shaq", "Sanad"];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// PARSE ARRAY RETURNED FROM FUNCTION
// function getPeople() {
//   return ["Salaam", "Shaq", "Sanad"];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// OBJECT DESTRUCTURING
// USED IN REACT OR ES6 MODULES

const person = {
  name: "Salaam",
  age: 27,
  city: "new york",
  gender: "male",
  sayHello: function () {
    console.log("Hello");
  },
};

// OLD ES6
// const name = person.name,
//   age = person.age,
//   city = person.city;

// NEW ES6 DESTRUCTURING
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();
