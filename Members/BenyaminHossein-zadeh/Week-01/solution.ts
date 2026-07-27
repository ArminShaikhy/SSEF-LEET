function fizzBuzz(n: number): string[] {
  const fizzBuzzArr: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      fizzBuzzArr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      fizzBuzzArr.push("Buzz");
    } else if (i % 3 === 0) {
      fizzBuzzArr.push("Fizz");
    } else {
      fizzBuzzArr.push(`${i}`);
    }
  }
  return fizzBuzzArr;
}
