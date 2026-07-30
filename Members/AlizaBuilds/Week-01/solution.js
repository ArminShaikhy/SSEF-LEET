function fizzBuzz(n) {
  if (typeof n !== "number" || n < 1 || n > 1e4)
    throw new Error("the argument must be a number between 1 to 1e4");

  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
      continue;
    }

    if (i % 3 === 0) {
      result.push("Fizz");
      continue;
    }

    if (i % 5 === 0) {
      result.push("Buzz");
      continue;
    }

    result.push(i.toString());
  }

  return result;
}

console.log(fizzBuzz(15));
