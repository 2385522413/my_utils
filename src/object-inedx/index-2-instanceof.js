import myInstanceOf from "./object/myInstanceOf";

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p = new Person("YK", 18);
console.log(myInstanceOf(p, Object), p instanceof Object);
console.log(myInstanceOf(p, Person), p instanceof Person);
console.log(myInstanceOf(p, Function), p instanceof Function);
console.log(myInstanceOf(Person, Function), Person instanceof Function);