# FizzBuzz Generator

A simple TypeScript implementation of the classic FizzBuzz problem.

## Description

This program generates an array of strings based on the FizzBuzz rules for numbers from `1` to a given `count`.

### Rules:

- If a number is divisible by **both 3 and 5** → `"FizzBuzz"`
- If a number is divisible by **3** → `"Fizz"`
- If a number is divisible by **5** → `"Buzz"`
- Otherwise → the number itself as a string

## Code Overview

| Function        | Description                                       |
|-----------------|---------------------------------------------------|
| `checkFizzBuzz` | Checks a single number and returns the result     |
| `generateArray` | Generates the full FizzBuzz array from 1 to count |

## Usage

```ts
const count: number = 15;

const result = generateArray(count);
console.log(result);