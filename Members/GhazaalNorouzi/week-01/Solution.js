const fizzBuzz = (n) => {
  const Array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      Array.push("FizzBuzz");
    } else if (i % 5 === 0) {
      Array.push("Buzz");
    } else if (i % 3 === 0) {
      Array.push("Fizz");
    } else {
      Array.push(`${i}`);
    }
  }
  return Array;
};

console.log(fizzBuzz(20));
