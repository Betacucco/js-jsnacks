let N = parseInt(prompt("Inserisci il tuo N: "));

let risultato = stampaCuboNumeriDa0aN(N);
console.log("La somma dei numeri al cubo e': " + risultato);

function stampaCuboNumeriDa0aN(N){
    let somma = 0;

    for(let i = 0; i < N; i++){
        let cubo =  Math.pow(i, 3);
        console.log("Il numero al cubo e': " + cubo);

        somma = somma + cubo; 
    }
    return(somma);
}