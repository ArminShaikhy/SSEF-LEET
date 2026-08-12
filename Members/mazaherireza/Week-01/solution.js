/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
  let answer = [];

  for (let counter = 1; counter <= n; counter++) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      answer.push("FizzBuzz");
    } else if (counter % 3 === 0) {
      answer.push("Fizz");
    } else if (counter % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(`${counter}`);
    }
  }

  return answer;
};
