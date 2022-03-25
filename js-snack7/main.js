//Numero limite al quale arrivare e da inserire in input
let N = parseInt(prompt("Inserisci il tuo N: "));

//Stampa del risultato richiamando la funzione
let risultato = stampaCuboNumeriDa0aN(N);
console.log("La somma dei numeri al cubo e': " + risultato);

//Funzione che fa il cubo dei numeri da 0 ad N e li somma
function stampaCuboNumeriDa0aN(N){
    let somma = 0;

    for(let i = 0; i < N; i++){
        let cubo =  Math.pow(i, 3);
        console.log("Il numero al cubo e': " + cubo);

        somma = somma + cubo; 
    }
    return(somma);
}