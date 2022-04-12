// INPUT

// 1. creare l'array delle email consentite

const allowedEmail = ["e.musk@spacex.net", "g-bill@gmail.com", "a.fartade@edu.it", "boyan.oceanscleanup@gmail.com", "xi-jinping@dictator.ch.intranet"];
console.log(allowedEmail);

// 2. chiedere all'utente la sua email
const userEmailAdress = prompt ("inserisci il tuo indirizzo email")
console.log(userEmailAdress);

// SCRIPT

// 3. confrontare la mail data dall'utente con quelle presenti nell'array
let AccessGranted = false;
for( let i = 0; i < allowedEmail.length; i++) {
    const thisAllowedEmail = allowedEmail[i];
    if (thisAllowedEmail === userEmailAdress) {
       AccessGranted = true;
    }
    console.log(thisAllowedEmail,"l'accesso è consentito?", AccessGranted );
}

// OUTPUT

// 4.comunicare esito tentativo di accesso

if (AccessGranted === true) {
    console.log("accesso concesso, benvenuto. vuoi fare un gioco? scegli tra: scacchi, guerra batteriologica, guerra termonucleare");
} else {
    console.log("accesso negato");
}