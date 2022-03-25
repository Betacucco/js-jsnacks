//Array di nomi
const nomiInvitati = ["gatsby", "carraway", "buchanan", "wilson", "baker", "cody"];

//Inserisco il mio nome
let inserisciNome = prompt("Inserisci il tuo nome: ");
inserisciNome.toLowerCase();

//Variabile per uscire dal for se trovo il nome
let controllo = false;

//Entri alla festa se il nome inserito e' presente nell'array
for(let i = 0; i < nomiInvitati.length; i++){
    if(inserisciNome == nomiInvitati[i]){
        alert("Puoi entrare alla festa!");
        controllo = true;
    }
}

//Se il nome non c'e' non puoi entrare
if(!controllo){
alert("Non puoi partecipare alla festa!");
} 