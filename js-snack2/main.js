let primaParola = prompt("Inserisci prima parola");
let secondaParola = prompt("Inserisci seconda parola");

if(primaParola.length > secondaParola.length){
    alert(secondaParola + " " + primaParola);
} else if(primaParola.length < secondaParola.length){
    alert(primaParola + " " + secondaParola);
} else {
    (secondaParola + " " + primaParola);
}