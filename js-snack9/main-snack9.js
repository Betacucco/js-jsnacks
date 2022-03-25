//Dichiariamo il nostro array vuoto e la variabile dei numeri da inserire
let arrayDiNumeri = [];
let numeroDaInserire;

//Riempiamo il nostro array
for(let i = 0; i < 10; i++){
    numeroDaInserire = parseInt(prompt("Inserisci numero nell'array"));
    arrayDiNumeri.push(numeroDaInserire);
}
console.log(arrayDiNumeri);

//Richiamiamo la funzione con la media
let risultato = mediaAritmeticaNumeri(arrayDiNumeri);

//Funzione della media
function mediaAritmeticaNumeri(arrayDiNumeri){
let somma = 0;
let media = 0;

//Nel nostro for usiamo la variabile somma per mantenerci la somma di tutti gli elementi dell'array che scorriamo
for(let i = 0; i < 10; i++){
    somma += arrayDiNumeri[i]; 
}
    //Media potrebbe essere con la virgola e la fisso con un massimo di 3 decimali
    media = parseFloat(somma / 10);
    media.toFixed(3);
    console.log("La media dei numeri nel mio array e': " + media);
}
