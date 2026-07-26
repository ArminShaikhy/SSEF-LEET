const fizzBuzz = (n) => {
    const arrNum = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0)
            arrNum.push('FizzBuzz')
        else if (i % 3 === 0)
            arrNum.push('Fizz')
        else if (i % 5 === 0)
            arrNum.push('Buzz')
        else
            arrNum.push(`${i}`)
    }
    return arrNum
}

console.log(fizzBuzz(3))
console.log(fizzBuzz(15))
console.log(fizzBuzz(5))