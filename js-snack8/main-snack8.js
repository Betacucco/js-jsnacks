let arrayDiNumeri = [];
let numeroDaInserire;

for(let i = 0; i < 10; i++){
    numeroDaInserire = parseInt(prompt("Inserisci numero nell'array"));
    arrayDiNumeri.push(numeroDaInserire);
}
console.log(arrayDiNumeri);

let risultato = sommmaNumeri(arrayDiNumeri);

function sommmaNumeri(arrayDiNumeri){
    let somma = 0;
    
    for(let i = 0; i < 10; i++){
        somma += arrayDiNumeri[i]; 
    }
    console.log("La somma dei numeri nel mio array e': " + somma);
}
