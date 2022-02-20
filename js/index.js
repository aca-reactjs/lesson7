import createHeader from "./service/createHeader.dom.js";
import {
  capitalize,
  getRandomNumber,
  A as FIRST_LETTER,
} from "./util/index.js";

function main() {
  const name = "john";
  const text = `${capitalize(name)}`;

  const h1 = createHeader("h1", text);

  document.body.append(h1);
}

main();
