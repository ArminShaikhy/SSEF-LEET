function fizzBuzzCheck(m) {
  if (m % 3 === 0 && m % 5 === 0) {
    return "FizzBuzz";
  } else if (m % 5 === 0) {
    return "Buzz";
  } else if (m % 3 === 0) {
    return "Fizz";
  } else {
    return m.toString();
  }
}

function FizzBuzzResult(n) {
  let result = [];

  if (1 <= n && n <= Math.pow(10, 4)) {
    for (let i = 1; i <= n; i++) {
      result.push(fizzBuzzCheck(i));
    }
    return result;
  } else {
    return;
  }
}

console.log("result=", FizzBuzzResult(15));
