import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const FizzBuzz = async () => {
  const rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  const number = await rl.question("Enter a number:");

  const list = ["1", "2"];

  for (let i = 3; i <= number; i++) {
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    list.push(output || String(i));
  }

  console.log(list);

  rl.close();
};

FizzBuzz();
