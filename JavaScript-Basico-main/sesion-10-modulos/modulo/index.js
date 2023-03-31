import { sum, multiplicar } from "../modulo/controller.js";
import chalk from "chalk";

let suma = sum(1, 2);
console.log(suma)

let mul = multiplicar(4, 5);
console.log(chalk.green(mul))