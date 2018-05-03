/*
Write a function fib() that takes an integer nn and returns the nnth Fibonacci ↴ number.

Let's say our Fibonacci series is 0-indexed and starts with 0. So:

  fib(0);  // => 0
fib(1);  // => 1
fib(2);  // => 1
fib(3);  // => 2
fib(4);  // => 3
5
8
13
21
44
65

...
*/

// recursive
function fibonacci(n) {
  if (n === 0 || n === 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// this is expensive, lets memoize
function MyFib() {
  this.storage = new Map();
}

MyFib.prototype.fibonacci = function(n) {
  if (this.storage.has(n)) return this.storage.get(n);
  if (n === 0 || n === 1) return n;

  let value = this.fibonacci(n - 1) + this.fibonacci(n - 2);
  this.storage.set(n, value);
  return value;
};
const myFib = new MyFib();

// iterative
function fibonacciTwo(n) {
  if (n === 0 || n === 1) return n;
  let oneBack = 0;
  let total = 1;
  for (let i = 1; i < n; i++) {
    let temp = total;
    total = total + oneBack;
    oneBack = temp;
  }
  return total;
}
