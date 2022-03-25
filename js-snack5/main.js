//Dichiaro un array vuoto che conterra' i miei numeri dispari
let arrayNumeriDispari = [];

//Inserisco numeri per 6 volte 
for(let i = 0; i < 6; i++){
    let numeroUtente = parseInt(prompt("inserisci i numeri"));
    
    //Nell'array pusho solo quelli dispari
    if(numeroUtente % 2 == 1){
        arrayNumeriDispari.push(numeroUtente);
    }   
}
//Stampa
console.log(arrayNumeriDispari);