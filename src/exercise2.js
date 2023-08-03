// Write a function that checks whether a number is prime or not. Then create a program that prints the first 10 prime numbers.
const exercise2 = () => {
    const number = parseFloat(document.getElementById('numberP').value);

    if(number) {
        const isPrime = _isPrime(number);
        const firstPrimes = _printFirstNPrimes(number);
        document.getElementById('isPrimeNumer').innerHTML = isPrime;
        document.getElementById('isFirstPrimes').innerHTML = firstPrimes;
    }
}

function _isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    if (number <= 3) {
      return true;
    }
  
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
  
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
  
    return true;
  }

function _printFirstNPrimes(n) {
    let count = 0;
    let number = 2;
    const primes = [];
  
    while (count <= n) {
      if (_isPrime(number)) {
        primes.push(number);
        if (primes.length > 9) {
            return primes;
        }
        count++;
      }
      number++;
    }
    return primes;
}



