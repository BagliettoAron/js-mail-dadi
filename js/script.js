// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// INPUT

// 1 genero numero random per l'utente
const randomUserNumber = Math.floor((Math.random() * 6) + 1);
console.log("user number", randomUserNumber);

// 2 genero numero random per il pc
const randomPcNumber = Math.floor((Math.random() * 6) + 1);
console.log("pc number", randomPcNumber);

// stabilisco chi ha il numero più alto

// let winnerIs = "0";

if (randomPcNumber > randomUserNumber) {
    let winnerIs = "Ha vinto il PC";
    
} else if (randomUserNumber > randomPcNumber) {
    let winnerIs = "Ha vinto l'utente";

} 

console.log(winnerIs);