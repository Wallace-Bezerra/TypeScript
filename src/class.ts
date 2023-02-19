interface IPerson {
  id: number;
  name: string;
  age: number;
}

class Person implements IPerson{
  id: number;
  name: string;
  age: number;
  constructor(id: number, name: string, age:number){
    this.id = id;
    this.name = name;
    this.age = age;
  }
}