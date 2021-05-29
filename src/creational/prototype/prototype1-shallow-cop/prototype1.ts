export interface Prototype{
  clone():Prototype;
}
export class Address implements Prototype{
  constructor(public street:string, public number:number){}
  clone():Address{
    return new Address(this.street,this.number);
  }
}
export class Person implements Prototype{
  private addresses:Address[] = []
  constructor(public name:string,public age:number){}
  clone():Person{
    const newObj = new Person(this.name, this.age);
    newObj.addresses = this.addresses.map( item => item.clone() )
    return newObj;
  }
  addAddress(address:Address):void{
    this.addresses.push(address);
  }
}

const address1 = new Address('Av brasil',1);
const person1 = new Person('Luiz', 25);
person1.addAddress(address1);

const person2 = person1.clone();

console.log(person1);
console.log(person2);
console.log(person2.name);
person2.name = 'Joana';
console.log(person2.name);
console.log(person1);