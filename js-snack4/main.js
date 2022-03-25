const nomiInvitati = ["gatsby", "carraway", "buchanan", "wilson", "baker", "cody"];

let inserisciNome = prompt("Inserisci il tuo nome: ");
inserisciNome.toLowerCase();

let controllo = false;

for(let i = 0; i < nomiInvitati.length; i++){
    if(inserisciNome == nomiInvitati[i]){
        alert("Puoi entrare alla festa!");
        controllo = true;
    }
}

if(!controllo){
alert("Non puoi partecipare alla festa!");
} 