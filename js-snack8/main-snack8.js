//Dichiariamo il nostro array vuoto e la variabile dei numeri da inserire
let arrayDiNumeri = [5, 48, 23, 8, 4, 7, 6, 72, 9, 1];

//Chiamiamo la funzione che fa la somma e stampa il risultato
sommmaNumeri();

//Funzione della somma
function sommmaNumeri(){
    let somma = 0;
    
    //Nel nostro for usiamo la variabile somma per mantenerci la somma di tutti gli elementi dell'array che scorriamo
    for(let i = 0; i < arrayDiNumeri.length; i++){
        somma += arrayDiNumeri[i]; 
    }
    console.log("La somma dei numeri nel mio array e': " + somma);
}
