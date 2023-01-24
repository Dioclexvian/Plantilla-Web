// Conceptos typescript

const username: string | number = 'WebMaster UD';

const sum = (a:  number,  b: number) => {
  return a + b;

}

class person {
  constructor(private age: number, public lastName: string){}
}

const Nicola = new person(167, 'Tesla')
Nicola.lastName;
