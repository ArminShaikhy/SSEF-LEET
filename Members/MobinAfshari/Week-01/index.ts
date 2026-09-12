enum FizzBuzz {
  Fizz = "Fizz",
  Buzz = "Buzz",
  FizzBuzz = "FizzBuzz",
}

const fizzBuzz = (number: number): string[] => {
  const res: string[] = [];
  for (let i = 1; i <= number; i++) {
    let token = "";
    if (i % 3 == 0 && i % 5 === 0) {
      token = FizzBuzz.FizzBuzz;
    } else if (i % 3 === 0) {
      token = FizzBuzz.Fizz;
    } else if (i % 5 === 0) {
      token = FizzBuzz.Buzz;
    } else {
      token = `${i}`;
    }
    res.push(token);
  }

  return res;
};
