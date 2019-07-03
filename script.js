/* Chiedi all’utente il cognome,
 inseriscilo in un array con altri cognomi
 e stampa la lista ordinata alfabeticamente.
Scrivi a che posizione della lista il nuovo utente si trova. */


// Dichiarazione delle variabili
var cognome, tuocognome, list, elenco;

// Lista dei nostri cognomi
list = ["Rossi", "Bianchi", "Carli", "Visco"];

// id elenco
elenco = document.getElementById('mioid');

// Chiedi all'utente il cognome
tuocognome = prompt("Inserisci il tuo cognome");
list.push(tuocognome);

// Stampa la lista dei cognomi
for (var i = 0; i < list.length; i++) {
  cognome = elenco.innerHTML;
  elenco.innerHTML = cognome + "<li>" + list.sort()[i] + "</li>";
}

// Comunicare la posizione nella Lista
document.getElementById('di').innerHTML = "Il tuo cognome è in posizione " + (list.indexOf(tuocognome) + 1);
