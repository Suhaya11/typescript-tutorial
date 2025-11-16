import { HasFomatter } from "../interfaces/HasFomatter.js";
export class Invoice implements HasFomatter {
  constructor(
    readonly costomer: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.costomer} owes  #${this.amount} for ${this.details}`;
  }
}
interface isPerson {
  name: string;
  age: number;
  expense(a: number): number;
  statement(a: string): void;
}
let me: isPerson = {
  name: "sulaiman",
  age: 33,
  expense(a: number) {
    console.log(a);
    return a;
  },
  statement(a: string) {
    console.log(a);
  },
};
let greetPerson = (person: isPerson) => {
  console.log(person.name);
};
greetPerson({
  name: "sulaiman",
  age: 22,
  expense(a: number) {
    console.log(a);
    return a;
  },
  statement: (a: string) => {
    console.log(a);
  },
});
me.name = "suhaya";
