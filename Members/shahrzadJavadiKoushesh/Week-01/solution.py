n = int(input())
answer = [0] * (n + 1)
for i in range(1, n+1):
    if i % 15 == 0:
        answer[i] = "FizzBuzz"
    elif i % 3 == 0:
        answer[i] = "Fizz"
    elif i % 5 == 0:
        answer[i] = "Buzz"
    else:
        answer[i] = str(i)

print(str(answer[1:n+1]))