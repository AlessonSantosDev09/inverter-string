function inverterString() {
    const inputString = document.getElementById('inputString').value;
    let invertedString = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        invertedString += inputString[i];
    }

    document.getElementById('resultado').innerHTML = `String invertida: ${invertedString}`;
}
