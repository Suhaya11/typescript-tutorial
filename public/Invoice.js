export class Invoice {
    constructor(costomer, details, amount) {
        this.costomer = costomer;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.costomer} owes  #${this.amount} for ${this.details}`;
    }
}
let me = {
    name: "sulaiman",
    age: 33,
    expense(a) {
        console.log(a);
        return a;
    },
    statement(a) {
        console.log(a);
    },
};
let greetPerson = (person) => {
    console.log(person.name);
};
greetPerson({
    name: "sulaiman",
    age: 22,
    expense(a) {
        console.log(a);
        return a;
    },
    statement: (a) => {
        console.log(a);
    },
});
me.name = "suhaya";
