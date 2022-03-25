let arrayDiNumeri = [];
let numeroDaInserire;

for(let i = 0; i < 10; i++){
    numeroDaInserire = parseInt(prompt("Inserisci numero nell'array"));
    arrayDiNumeri.push(numeroDaInserire);
}
console.log(arrayDiNumeri);

let risultato = mediaAritmeticaNumeri(arrayDiNumeri);

function mediaAritmeticaNumeri(arrayDiNumeri){
let somma = 0;
let media = 0;
    
for(let i = 0; i < 10; i++){
    somma += arrayDiNumeri[i]; 
}
    media = parseFloat(somma / 10);
    media.toFixed(3);
    console.log("La media dei numeri nel mio array e': " + media);
}
