function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

const minhaString = "Olá, mundo!";
console.log("String original:", minhaString);
console.log("String invertida:", inverterString(minhaString));