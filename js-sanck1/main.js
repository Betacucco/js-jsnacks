//Inserisco due numeri in input
let numero1 = parseInt(prompt("Inserisci primo numero:"));
let numero2 = parseInt(prompt("Inserisci secondo numero:"));

//Se n1 > n2 e' maggiore il primo
if(numero1 > numero2){
    alert(numero1 + " e' il maggiore");
    //Se n1 < n2 e' maggiore il secondo
} else if (numero1 < numero2){
    alert(numero2 + " e' il maggiore");
    //Sono uguali
} else {
    alert(numero1 + " e " + numero2 + " sono uguali");
}
