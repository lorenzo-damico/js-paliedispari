// L’utente sceglie pari o dispari e inserisce
// un numero da 1 a 5.

// Generiamo un numero random (sempre da 1 a 5)
// per il computer (usando una funzione).

// Sommiamo i due numeri.

// Stabiliamo se la somma dei due numeri è pari
// o dispari (usando una funzione).

// Dichiariamo chi ha vinto.

// 1. Chiedo all'utente di scegliere pari o dispari
var sceltaUtente = prompt("Scegli pari o dispari").toLowerCase();
console.log("Il giocatore ha scelto: " + sceltaUtente);

// 2. Chiedo all'utente di inserire un numero da 1 a 5
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(numeroUtente);

// 3. Creo un numero random da 1 a 5 per il computer usando una funzione
function randomNumber(min, max) {
  var numeroComputer = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(numeroComputer);
  return numeroComputer;
}

// 4. Sommo il numero inserito dall'utente con il numero
//    random generato per il computer
var somma = numeroUtente + randomNumber(1, 5);
console.log(somma);

// 5. Scrivo una funzione che controlli se un
//    numero è pari o dispari
function isEven(num) {
  if (num % 2 == 0) {
    var esito = "pari";
  } else {
    var esito = "dispari";
  }
  console.log("La somma è: " + esito);
  return esito;
}

// 6. Applico la funzione per controllare l'esito
var esitoFinale = isEven(somma);

// 7. Stampo il vincitore
if (esitoFinale == sceltaUtente) {
  console.log("Hai vinto!");
} else {
  console.log("Hai perso!");
}
