function fibonacciSequence(number) {
    let fibonacci = [0, 1];
    let i = 1;

    while (fibonacci[i] < number) {
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
        i++;
    }

    if (fibonacci.includes(number)) {
        return `${number} pertence à sequência de Fibonacci.`;
    } else {
        return `${number} não pertence à sequência de Fibonacci.`;
    }
}

const numero = 21;
console.log(fibonacciSequence(numero));
