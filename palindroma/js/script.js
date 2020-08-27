// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola
// inserita è palindroma.

// 1. Creo una funzione che restituisce true o false in base
//    a se la parola inserita è palindroma o meno.
function isPalindrome(parola) {
  var parolaNormale = parola.toLowerCase();
  var parolaInvertita = parolaNormale.split("").reverse().join("");

  if (parolaNormale == parolaInvertita) {
    return true;
  } else {
    return false;
  }
}

// 2. Chiedo all'utente di scrivere una parola con un prompt
var parolaUtente = prompt("Inserisci una parola");

// 3. Eseguo un controllo sulla parola con la funzione
var esito = isPalindrome(parolaUtente);

// 4. Stampo il risultato il base all'esito
if (esito == true) {
  console.log("La parola è Palindroma");
} else {
  console.log("La parola non è Palindroma");
}
