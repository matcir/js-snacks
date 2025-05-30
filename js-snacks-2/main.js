const firstWord = prompt("Inserisci una parola")
const secondWord = prompt("Inserisci un'altra parola")
if (firstWord.length > secondWord.length) {
    console.log(` ${secondWord} ${firstWord} `)
}
else if (secondWord.length > firstWord.length) {
    console.log(` ${secondWord} ${firstWord} `)
}
else if (firstWord.length == secondWord.length) {
    console.log(` ${firstWord} ${secondWord} `)
}

