//Dichiaro una variabile flag per uscire dal while
let finoAllaVittoria = false;

//Genero un numero casuale
let numeroComputer = Math.floor(Math.random() * 11);
console.log(numeroComputer);

//Finche' il numero del giocatore non e' uguale a quello generato dal PC rimango nel ciclo
while(!finoAllaVittoria){
    let numeroUtente = parseInt(prompt("Inserisci un numero: "));
    console.log(numeroUtente);

    //Se sono uguali esco dal ciclo
if(numeroUtente == numeroComputer){
    alert("Hai vinto!");
    finoAllaVittoria = true;
} else {    //Altrimenti continuo a perdere
    alert("Hai perso");
}
}