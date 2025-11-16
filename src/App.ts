import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { RenderReciept } from "./classes/RenderReciept.js";
import { HasFomatter } from "./interfaces/HasFomatter.js";
let form = document.querySelector(".new-item-form") as HTMLFormElement;
let type = document.querySelector("#type") as HTMLSelectElement;
let amount = document.querySelector("#amount") as HTMLInputElement;
let detail = document.querySelector("#details") as HTMLInputElement;
let tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const ul = document.querySelector("ul") as HTMLUListElement;
//create instance for the list
let list = new RenderReciept(ul);

// let docOne: HasFomatter;
// let docTwo: HasFomatter;
// docOne = new Invoice("sulaiman", "sayan shinkafa", 333);
// docTwo = new Payment("Umar Haladu ", "girbin dawa".toUpperCase(), 833);

// let docs: HasFomatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// docs.push({
//   format(a: string = "sani") {
//     return a;
//   },
// });
// console.log(docs);
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFomatter;

  let values: [string, string, number];
  values = [tofrom.value, detail.value, amount.valueAsNumber];
  if (type.value === "invoice" && tofrom.value && amount.valueAsNumber) {
    doc = new Invoice(...values);
  } else if (type.value === "payment" && tofrom.value && amount.valueAsNumber) {
    doc = new Payment(...values);
  } else {
    tofrom.placeholder = "Invalid Input";
    detail.placeholder = "Invalid Input";
    amount.placeholder = "Invalid Input";

    tofrom.classList.add("invalidOption");
    detail.classList.add("invalidOption");
    amount.classList.add("invalidOption");
    doc = {
      format() {
        return "null";
      },
    };
  }
  function removeInvalidClass(a: HTMLInputElement) {
    a.classList.remove("invalidOption");
  }
  tofrom.addEventListener("input", () => {
    removeInvalidClass(tofrom);
    removeInvalidClass(amount);
    removeInvalidClass(detail);
    amount.placeholder = " ";
    tofrom.placeholder = " ";
    detail.placeholder = " ";
  });
  amount.addEventListener("input", () => {
    removeInvalidClass(tofrom);
    removeInvalidClass(amount);
    removeInvalidClass(detail);
    tofrom.placeholder = " ";
    detail.placeholder = " ";
    amount.placeholder = " ";
  });
  detail.addEventListener("input", () => {
    removeInvalidClass(tofrom);
    removeInvalidClass(amount);
    removeInvalidClass(detail);
    tofrom.placeholder = " ";
    detail.placeholder = " ";
    amount.placeholder = " ";
  });
  list.render(doc, type.value, "end");
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

//generics
let setUID = <T>(item: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...item, uid };
};
let uid1 = setUID({ name: "suhaya", age: 22 });

interface resource<T> {
  name: string;
  uid: number;
  data: T;
}
let docTree: resource<string> = {
  name: "sulaiman",
  uid: 2,
  data: "suhaya",
};

console.log(docTree);

interface resourceNum<T> {
  uid: number;
  name: string;
  data: number;
  rel: any;
}

enum resourceType {
  book,
  person,
  author,
  suhaya,
  sani,
  umar,
  katu,
}
let docFour: resourceNum<number> = {
  uid: Math.floor(Math.random() + 1 * 10),
  name: "resourceType.author",
  data: resourceType.book,
  rel: "",
};
console.log(docFour);
