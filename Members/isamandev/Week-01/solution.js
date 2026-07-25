import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const FizzBuzz = async () => {
  const rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  const number = await rl.question("Enter a number:");

  const list = [];

  for (let i = 0; i <= number; i++) {
    if (i === 1 || i === 2) {
      list.push(String(i));
      continue;
    }

    let output = "";

    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";

    list.push(output || String(i));
  }

  console.log(list);

  rl.close();
};

FizzBuzz();
