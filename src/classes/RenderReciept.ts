import { HasFomatter } from "../interfaces/HasFomatter";

export class RenderReciept {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFomatter, header: string, pos: "start" | "end") {
    const li = document.createElement("li");

    let h4 = document.createElement("h4");
    h4.innerText = header;
    li.append(h4);

    let p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);
    if (pos === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
