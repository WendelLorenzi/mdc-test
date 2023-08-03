// Write a function to calculate the factorial of a number. Next, create a program that allows the user to enter a number and displays the corresponding factorial.

const exercise3 = () => {
    const number = parseFloat(document.getElementById('numberF').value);
    if (number) {
        const factorial = _factorial(number);
        document.getElementById('factorialNumber').innerHTML = factorial;
    }
    
}

function _factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
      } else {
        let fatorial = 1;
        for (let i = 2; i <= number; i++) {
          fatorial *= i;
        }
        return fatorial;
      }
}