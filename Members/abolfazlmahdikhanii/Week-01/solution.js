function fizzBuzz(number){
    let fizzBuzzData=[]
    for(let i=1;i<=number;i++){
    
        if(i%3===0&&i%5===0) fizzBuzzData.push("FizzBuzz")
        else if(i%3===0) fizzBuzzData.push("Fizz")
        else if(i%5===0) fizzBuzzData.push("Buzz")
        else fizzBuzzData.push(i.toString())
    }
    return fizzBuzzData
}

const test=fizzBuzz(15)
console.log(test)