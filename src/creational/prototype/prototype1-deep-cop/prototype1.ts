export interface Prototype{
  clone():Prototype;
}
export class Address{
  constructor(public street:string, public number:number){}
}
export class Person implements Prototype{
  private addresses:Address[] = []
  constructor(public name:string,public age:number){}
  clone():this{
    const newObj = Object.create(this);
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
person2.name = 'Joana'
console.log(person2.name);
