function isPrime(num) {
  if (num === 0 || num === 1) {
    return false;
  }

  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(10));
