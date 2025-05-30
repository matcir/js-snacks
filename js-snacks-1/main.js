const num1 = Number(prompt("Inserisci un numero"))
const num2 = Number(prompt("Inserisci un altro numero"))

if (num1 > num2) {
    console.log(num1);
}
else if (num2 > num1) {
    console.log(num2);
}
else{
    console.log("I due numeri sono uguali, riprova");
}

