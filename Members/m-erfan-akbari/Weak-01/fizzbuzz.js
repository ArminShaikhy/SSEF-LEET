const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playFizzBuzz(number) {
  const isFizz = number % 3 === 0 ? true : false;
  const isBuzz = number % 5 === 0 ? true : false;

  if (!isFizz && !isBuzz) return number.toString();

  if (isFizz && isBuzz) return "FizzBuzz";

  if (isFizz) return "Fizz";

  return "Buzz";
}

console.clear();

rl.question(`Enter a natural number you want to play:  `, (enteredValue) => {
  const number = parseInt(enteredValue) || -1; // -1 to exit on next condition if not a number

  if (number < 1 || number > Math.pow(10, 4)) {
    console.log("Wrong input!");
    return rl.close();
  }

  let answers = [];
  for (let currentNumber = 1; currentNumber <= number; currentNumber++) {
    const result = playFizzBuzz(currentNumber);
    answers.push(result);
  }

  console.log(answers);
  rl.close();
});
