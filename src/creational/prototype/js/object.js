const personPrototype = {
  firstName:'Luiz',
  lastName:'Miranda',
  age:30,
  fullName(){
    return `${this.firstname} ${this.lastName}`;
  }
}

const anotherPerson = Object.create(personPrototype);
anotherPerson.lastName = 'Miranda';
console.log(personPrototype);
console.log(anotherPerson);
console.log(anotherPerson.fullName());