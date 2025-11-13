"use strict";
let form = document.querySelector(".new-item-form");
let type = document.querySelector("#type");
let amount = document.querySelector("#amount");
let detail = document.querySelector("#details");
let tofrom = document.querySelector("#tofrom");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    //   console.log(
    //     `suhaya sent` +
    //       amount.valueAsNumber +
    //       " to" +
    //       tofrom.value +
    //       "for" +
    //       detail.value +
    //       "and the transaction is" +
    //       type.value
    //   );
});
//classes
class Invoice {
    constructor(costomer, details, amount) {
        this.costomer = costomer;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.costomer} owes Suhaya ${this.amount} for #${this.details}`;
    }
}
let invOne = new Invoice("sani ", "website building ", 333);
let inv2 = new Invoice("sani ", "website building ", 333);
let inv3 = new Invoice("sani ", "website building ", 333);
const invoices = [];
invoices.push(invOne);
invoices.unshift(inv2);
invoices.push(inv3);
console.log(inv2.format());
// invoices.forEach((inv) => {
//     console.log(inv.amount, inv.costomer,inv.format(), inv.details);
//     inv.costomer = 'somethidn'
// }
// )
