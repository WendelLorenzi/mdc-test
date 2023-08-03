//Create a calculator that takes two numbers and an operator (+, -, *, /) and returns the result of the operation
const exercise1 = () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operador = document.getElementById('operador').value;

    let resultado;
    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        default:
            resultado = 'Operador inválido';
    }

    document.getElementById('resultado').innerHTML = resultado;
    return resultado;
}



