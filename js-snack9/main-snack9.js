//Dichiariamo il nostro array vuoto e la variabile dei numeri da inserire
let arrayDiNumeri = [];

//Riempiamo il nostro array
for(let i = 0; i < 10; i++){
    let numeroDaInserire = parseInt(prompt("Inserisci numero nell'array"));
    arrayDiNumeri.push(numeroDaInserire);
}
console.log(arrayDiNumeri);

//Richiamiamo la funzione con la media
let mediaFinale = mediaAritmeticaNumeri(arrayDiNumeri);
console.log("La media dei numeri nel mio array e': " + mediaFinale);

//Funzione della somma
function sommaNumeri(array){
    let somma = 0;
    
    //Nel nostro for usiamo la variabile somma per mantenerci la somma di tutti gli elementi dell'array che scorriamo
    for(let i = 0; i < 10; i++){
        somma += array[i]; 
    }
    return somma;
}
//Funzione della media
function mediaAritmeticaNumeri(inputArray){

    let somma = sommaNumeri(inputArray);
    //Media
    let media = parseFloat(somma / 10);
    return media;
}
