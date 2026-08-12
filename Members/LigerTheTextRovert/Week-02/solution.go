// Package week02.
package main

func main() {
	arr := []int{1, 3, 5, 7, 9, 11, 13}
	index := binarySearch(arr, 7)
	println(index)
}

func binarySearch(arr []int, target int) int {
	low := 0
	high := len(arr) - 1

	for low <= high {
		mid := (low + high) / 2

		if arr[mid] == target {
			return mid // Return the index, not the target
		} else if arr[mid] < target {
			low = mid + 1 // Move past mid
		} else {
			high = mid - 1 // Move before mid
		}
	}

	return -1
}
