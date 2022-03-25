//Dichiariamo il nostro codice da inserire in input
let codice = (prompt("Inserisci codice a 4 cifre: "));
console.log(codice);

//Controlliamo che la sua lunghezza non sia minore/maggiore di 4 e che sia un numero  
if(codice.length > 4 || codice.length <= 3 || isNaN(codice)){
    alert("Il codice che hai inserito non e' un codice o non e' a 4 cifre!");
} else {    //Se ha 4 cifre e' un codice quindi stampa la somma delle cifre chiamando la funzione scomponi
    let risultatoSomma = scomponi(codice);
    alert(risultatoSomma);
}

/*La funzione ricorsiva ritorna il resto del codice/10 
che andra' a sommarsi ad ogni chiamata ricorsiva 
dalla sua ultima cifra fino alla prima, fin quando
il codice sara' divisibile per 10*/
function scomponi(code){
if(code == 0)
    return 0;

return(code % 10 + scomponi(parseInt(code / 10)));   
}


//CODICE ITERATIVO
/*
let codice = (prompt("Inserisci codice a 4 cifre: "));
console.log(codice);

if(codice.length > 4 || codice.length <= 3 || isNaN(codice)){
    alert("Il codice che hai inserito non e' un codice o non e' a 4 cifre!");
} else {
    let risultatoSomma = scomponi(codice);
    console.log(risultatoSomma);
}

function scomponi(codice){
    
    let totale = 0;
    let resto = 0;

 /*Dichiariamo la variabile totale e resto
    che ci serviranno per mantenerci il valore 
    totale che fara' da somma/contenitore del risultato finale
    e il resto sara' il resto che sommeremo fin quando non usciamo dal while.
    while (codice > 10) {
        resto = codice % 10;
        totale += resto;
        codice = parseInt(codice / 10);
    }
    
//Ritorneremo il totale + la prima cifra del codice 
    return (totale + codice);
}*/