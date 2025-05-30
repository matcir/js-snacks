const oddNumbers = [];
for (let i=0; i < 6; i++) {
    const iNumber = Number(prompt("Inserisci un numero"));
    if (iNumber % 2 !== 0) {
        oddNumbers[i] = iNumber;
    }
}

console.log(oddNumbers);