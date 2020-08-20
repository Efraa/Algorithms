const recursiveFibonacci = (n) => (n === 0 || n === 1) ? n : (recursiveFibonacci(n-1) + recursiveFibonacci(n-2));

console.log(recursiveFibonacci(10));