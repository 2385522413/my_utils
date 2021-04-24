import newInstance from "./object/newInstance";

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = new Person("YK", 18);
console.log(p);
console.log(p.constructor);
console.log('************');
const p2 = newInstance(Person, "YK菌", 19);
console.log(p2);
console.log(p2.constructor);

console.log('************');

function Person2(name, age) {
  this.name = name;
  this.age = age;
  return { a: 100 };
}

console.log(new Person2());
console.log(newInstance(Person2));