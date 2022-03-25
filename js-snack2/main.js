//Inserisco le due parole in input
let primaParola = prompt("Inserisci prima parola");
let secondaParola = prompt("Inserisci seconda parola");

//Se la prima e' piu lunga stampa la seconda e poi la prima
if(primaParola.length > secondaParola.length){
    alert(secondaParola + " " + primaParola);
    //Se la seconda e' piu lunga stampa la prima e poi la seconda
} else if(primaParola.length < secondaParola.length){
    alert(primaParola + " " + secondaParola);
    //Se sono uguali e' indifferente quale stampa per prima
} else {
    (secondaParola + " " + primaParola);
}