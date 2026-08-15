// FUNCTION fizzBuzz(n):
//     CREATE empty array called answer
//     FOR i FROM 1 TO n:
//         IF i % 3 === 0 && i % 5 === 0:
//             APPEND "FizzBuzz" TO answer
//         ELSE IF i % 3 === 0:
//             APPEND "Fizz" TO answer
//         ELSE IF i % 5 === 0:
//             APPEND "Buzz" TO answer
//         ELSE:
//             APPEND TO_STRING(i) TO answer
//     RETURN answer

function fizzBuzz(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(i.toString());
    }
  }
  return answer;
}
