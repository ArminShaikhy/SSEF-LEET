const fizzBuzz = function(n) {
    const answer = new Array(n);

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            answer[i - 1] = "FizzBuzz";
        } else if (i % 3 === 0) {
            answer[i - 1] = "Fizz";
        } else if (i % 5 === 0) {
            answer[i - 1] = "Buzz";
        } else {
            answer[i - 1] = String(i);
        }
    }

    return answer;
};