let numero1 = parseInt(prompt("Inserisci primo numero:"));
let numero2 = parseInt(prompt("Inserisci secondo numero:"));

if(numero1 > numero2){
    alert(numero1 + " e' il maggiore");
} else if (numero1 < numero2){
    alert(numero2 + " e' il maggiore");
} else {
    alert(numero1 + " e " + numero2 + " sono uguali");
}
