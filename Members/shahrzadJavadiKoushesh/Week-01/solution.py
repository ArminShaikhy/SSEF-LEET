n = int(input())
answer = []
for i in range(1, n+1):
    if i % 15 == 0:
        answer.append("FizzBuzz")
    elif i % 3 == 0:
        answer.append("Fizz")
    elif i % 5 == 0:
        answer.append("Buzz")
    else:
        answer.append(i)

print(answer)