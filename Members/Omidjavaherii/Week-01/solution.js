function fizzBuzz(n) {
    const answer = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            answer.push("FizzBuzz");
        } else if (i % 3 === 0) {
            answer.push("Fizz");
        } else if (i % 5 === 0) {
            answer.push("Buzz");
        } else {
            answer.push(String(i));
        }
    }

    return answer;
}

console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));