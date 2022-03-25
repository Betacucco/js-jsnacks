//Dichiaro variabile somma
let somma = 0;

//Somma si sommera' per ogno numero che inserisco
for(let i = 0; i < 10; i++){
    let numero = parseInt(prompt("Inserisci numero: "));
    console.log(numero);
    somma = somma + numero;
}
//Stampa
console.log(somma);