function FizzBuzz(input) {
  const resultArray = [];
  if (input <= 1 || input >= 10 ** 4) return "Input is out of range.";
  for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultArray.push("Fizz");
    } else if (i % 5 === 0) {
      resultArray.push("Buzz");
    } else {
      resultArray.push(`${i}`);
    }
  }
  return resultArray;
}
console.log(FizzBuzz(3));
console.log(FizzBuzz(5));
console.log(FizzBuzz(15));
