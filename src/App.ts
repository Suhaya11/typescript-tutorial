let form = document.querySelector(".new-item-form") as HTMLFormElement;
let type = document.querySelector("#type") as HTMLSelectElement;
let amount = document.querySelector("#amount") as HTMLInputElement;
let detail = document.querySelector("#details") as HTMLInputElement;
let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
form.addEventListener("submit", (e: Event) => {
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
  constructor(
    readonly costomer: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.costomer} owes Suhaya ${this.amount} for #${this.details}`;
  }
}
let invOne = new Invoice("sani ", "website building ", 333);
let inv2 = new Invoice("sani ", "website building ", 333);
let inv3 = new Invoice("sani ", "website building ", 333);
const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.unshift(inv2);
invoices.push(inv3);
console.log(inv2.format());
// invoices.forEach((inv) => {
//     console.log(inv.amount, inv.costomer,inv.format(), inv.details);
//     inv.costomer = 'somethidn'
// }
// )
