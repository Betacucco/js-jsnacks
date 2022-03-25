let finoAllaVittoria = false;

let numeroComputer = Math.floor(Math.random() * 11);
console.log(numeroComputer);

while(!finoAllaVittoria){
    let numeroUtente = parseInt(prompt("Inserisci un numero: "));
    console.log(numeroUtente);

if(numeroUtente == numeroComputer){
    alert("Hai vinto!");
    finoAllaVittoria = true;
} else {
    alert("Hai perso");
}
}