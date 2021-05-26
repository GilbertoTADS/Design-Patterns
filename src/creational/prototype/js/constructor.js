function Person(name, lastName, age){
  this.firstName = name;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName:'Luiz',
  lastName:'Miranda',
  age:30,
  fullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}
Person.prototype = Object.create(personPrototype);

const person1 = new Person('Luiz', 'Miranda', 30);
console.log(person1.fullName());
