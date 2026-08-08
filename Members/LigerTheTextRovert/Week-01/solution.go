// Package main implements the week-01 FizzBuzz problem.
package main

import (
	"fmt"
	"strconv"
)

func main() {
	var n int
	fmt.Print("Enter n: ")
	if _, err := fmt.Scan(&n); err != nil || n < 1 {
		fmt.Println("Please enter a valid positive integer.")
		return
	}

	// Pre-allocate slice capacity to avoid re-allocations
	result := make([]string, 0, n)

	for i := 1; i <= n; i++ {
		switch {
		case i%15 == 0:
			result = append(result, "FizzBuzz")
		case i%3 == 0:
			result = append(result, "Fizz")
		case i%5 == 0:
			result = append(result, "Buzz")
		default:
			result = append(result, strconv.Itoa(i))
		}
	}

	fmt.Println(result)
}
