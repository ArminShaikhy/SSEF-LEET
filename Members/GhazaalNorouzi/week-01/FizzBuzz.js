const fizzBuzz = (n) => {
  const string = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      string.push("FizzBuzz");
    } else if (i % 5 === 0) {
      string.push("Buzz");
    } else if (i % 3 === 0) {
      string.push("Fizz");
    } else {
      string.push(`${i}`);
    }
  }
  return string;
};

console.log(fizzBuzz(20));
