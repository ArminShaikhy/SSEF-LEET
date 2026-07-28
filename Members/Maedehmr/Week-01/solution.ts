const count: number = 15

const checkFizzBuzz = (index: number): string => {
    if (index % 3 === 0 && index % 5 === 0) return "FizzBuzz";
    else if (index % 3 === 0) return "Fizz";
    else if (index % 5 === 0) return "Buzz";
    else return String(index);
}

const generateArray = (count: number): string[] => {
    const result: string[] = [];

    for (let i: number = 1; i <= count; i++) {
        result.push(checkFizzBuzz(i))
    }

    return result;
};

console.log("🚀 ~  ~ generateArray: ", generateArray(count));

