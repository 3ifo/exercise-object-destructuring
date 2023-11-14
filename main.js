//Esercizio 1//

/*const utente = {
  nome: "Alice",
  eta: 25,
  hobby: ["leggere", "giocare ai videogiochi", "fare escursioni"],
  indirizzo: {
    via: "123 Via degli Aceri",
    citta: "Paese delle Meraviglie",
  },
};

const utenteJSON = JSON.stringify(utente);

console.log(utenteJSON); */

//Esercizio 2 //
/*let stringaJSON =
  '{"id": 1, "nome": "John Doe", "email": "john.doe@example.com"}';

let stringaJSONConvertita = JSON.parse(stringaJSON);

const idName = { id: 1, email: "john.doe@example.com" };
console.log(idName);*/

//Esercizio 3 Utilizza la distrutturazione degli oggetti per estrarre il `titolo` e l'`anno` dal seguente oggetto e registrarli nella console.
//

/*const film = {
  titolo: "Inception",
  regista: "Christopher Nolan",
  anno: 2010,
  valutazione: 8.8,
};

const { titolo, anno } = film;
console.log(titolo, anno); */

//Esercizio 4 Utilizza la distrutturazione degli oggetti per estrarre la `via` e la `citta` dall'oggetto `indirizzo` all'interno dell'oggetto `utente`.
//

/*const utente = {
    nome: "Alice",
    indirizzo: {
        via: "123 Via degli Aceri",
        citta: "Paese delle Meraviglie"
    }
};

const {indirizzo: {via, citta}} = utente
console.log(via)
console.log(citta) */

//Esercizio 5 Utilizza la distrutturazione degli oggetti per estrarre il `nome` e l'`eta` dall'oggetto `persona`. Se l'`eta` non è fornita, dovrebbe avere un valore predefinito di `30`.//

/* const etaDefault = 30;

const persona = {
  nome: "Bob",
};

const { nome, eta = etaDefault } = persona;
console.log(nome, eta); */

//Esercizio 6 Scrivi una funzione `presentati` che prende un oggetto con le proprietà `nome` e `occupazione` e registra un messaggio nella console. //

const presentati = ({ nome, occupazione }) => {
  console.log(`nome ${nome}, occupazione ${occupazione}`);
};
presentati({ nome: "giovanni", occupazione: "programmatore" });
