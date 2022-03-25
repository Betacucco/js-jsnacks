//Dichiariamo il nostro array vuoto e la variabile dei numeri da inserire
let arrayDiNumeri = [];
let numeroDaInserire;

//Riempiamo il nostro array
for(let i = 0; i < 10; i++){
    numeroDaInserire = parseInt(prompt("Inserisci numero nell'array"));
    arrayDiNumeri.push(numeroDaInserire);
}
console.log(arrayDiNumeri);

//Richiamiamo la funzione con la somma
let risultato = sommmaNumeri(arrayDiNumeri);

//Funzione della somma
function sommmaNumeri(arrayDiNumeri){
    let somma = 0;
    
    //Nel nostro for usiamo la variabile somma per mantenerci la somma di tutti gli elementi dell'array che scorriamo
    for(let i = 0; i < 10; i++){
        somma += arrayDiNumeri[i]; 
    }
    console.log("La somma dei numeri nel mio array e': " + somma);
}
