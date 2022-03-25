let arrayNumeriDispari = [];

for(let i = 0; i < 6; i++){
    let numeroUtente = parseInt(prompt("inserisci i numeri"));
    
    if(numeroUtente % 2 == 1){
        arrayNumeriDispari.push(numeroUtente);
    }   
}

console.log(arrayNumeriDispari);