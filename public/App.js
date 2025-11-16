import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { RenderReciept } from "./classes/RenderReciept.js";
let form = document.querySelector(".new-item-form");
let type = document.querySelector("#type");
let amount = document.querySelector("#amount");
let detail = document.querySelector("#details");
let tofrom = document.querySelector("#tofrom");
const ul = document.querySelector("ul");
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
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, detail.value, amount.valueAsNumber];
    if (type.value === "invoice" && tofrom.value && amount.valueAsNumber) {
        doc = new Invoice(...values);
    }
    else if (type.value === "payment" && tofrom.value && amount.valueAsNumber) {
        doc = new Payment(...values);
    }
    else {
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
    function removeInvalidClass(a) {
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
//generics
let setUID = (item) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, item), { uid });
};
let uid1 = setUID({ name: "suhaya", age: 22 });
let docTree = {
    name: "sulaiman",
    uid: 2,
    data: "suhaya",
};
console.log(docTree);
var resourceType;
(function (resourceType) {
    resourceType[resourceType["book"] = 0] = "book";
    resourceType[resourceType["person"] = 1] = "person";
    resourceType[resourceType["author"] = 2] = "author";
    resourceType[resourceType["suhaya"] = 3] = "suhaya";
    resourceType[resourceType["sani"] = 4] = "sani";
    resourceType[resourceType["umar"] = 5] = "umar";
    resourceType[resourceType["katu"] = 6] = "katu";
})(resourceType || (resourceType = {}));
let docFour = {
    uid: Math.floor(Math.random() + 1 * 10),
    name: "resourceType.author",
    data: resourceType.book,
    rel: "",
};
console.log(docFour);
