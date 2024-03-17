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

function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}




window.onload = function () {
    let r1 = document.getElementById('r1')
    let r2 = document.getElementById('fibonacci');
    let r3 = document.getElementById('inverter');

    r1.onclick = () => {
        let indice = 13;
        let soma = 0;
        let k = 0;

        while (k < indice) {
            k += 1;
            soma += k;

        }
        document.getElementById('resposta1').innerHTML = `O resultado é: ${soma}`;

    }
    r2.onclick = () => {
        const numero = document.getElementById("numero").value;
        if (numero === '' || null) {
            window.alert('Valor incorreto! Por favor digite um número.')
        } else {
            fibonacciSequence();
            alert(fibonacciSequence(parseFloat(numero)));
        }

    };

    r3.onclick = () => {
        const texto = document.getElementById('texto').value;
        if (texto === '' || null) {
            window.alert('Valor incorreto! Por favor digite uma palavra.')
        } else {
            alert(`A string invertida é: ${inverterString(texto)}`);

        }
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const showButtons = document.querySelectorAll(".showButton");

    showButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const resolvedDiv = button.nextElementSibling;

            if (resolvedDiv.classList.contains("resolved")) {

                resolvedDiv.classList.toggle("escondida");

                const hideButton = resolvedDiv.querySelector(".hideButton");

                if (hideButton) {
                    hideButton.classList.remove("escondida");

                    hideButton.addEventListener("click", function () {

                        resolvedDiv.classList.add("escondida");

                        hideButton.classList.add("escondida");
                    });
                }
            }
        });
    });
});