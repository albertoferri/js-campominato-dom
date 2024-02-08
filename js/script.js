// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



// assegno variabile al bottone
const createGridElement = document.getElementById("createGrid-Btn");

// inposto che al click fa partire la funzione "createGrid"
createGridElement.addEventListener("click", createGrid);

// codice per generare griglia
let cellNumber;


// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
function createGrid() {
    const gridElement = document.getElementById("grid");
    // per evitare che generi ogni volta una griglia, resetto ogni volta 
    gridElement.innerHTML = '';
    
    const selectElement = document.querySelector("#difficulty");
    console.log(selectElement.value);
    
    if (selectElement.value == "easy"){
        cellNumber = 100;
    } else if (selectElement.value == "medium"){
        cellNumber = 81;
    } else {
        cellNumber = 49;
    }
    gridElement.className = selectElement.value;
    
    for (let i = 0; i < cellNumber; i++) {
        const squareElement = document.createElement("div");
        squareElement.classList.add("square");
        squareElement.innerHTML = i + 1; 
        gridElement.append(squareElement);
        
        // cambio colore al click
        squareElement.addEventListener("click", function(){
            this.classList.toggle("active");
            console.log("HAI SELEZIONATO LA CELLA: " + this.innerText);
        });
    }
}

// PARTE 2
// Il computer deve generare 16 numeri casuali e inserirli in un array
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

function randomNumber() {
    // creo array vuoto
    const numeriCasuali = [];
    while (numeriCasuali.length < 16) {
        const numeroCasuale = Math.floor(Math.random() * 100) + 1;
        // controllo se il numero generato è già presente nell'array, se non lo è, lo pusho
        if (!numeriCasuali.includes(numeroCasuale)) {
            numeriCasuali.push(numeroCasuale);
        }
    }
    return numeriCasuali;
}

// Esempio di utilizzo della funzione
const randomElement = randomNumber();
console.log(randomElement);