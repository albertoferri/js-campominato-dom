// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// PARTE 2
// Il computer deve generare 16 numeri casuali e inserirli in un array
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// Il computer deve generare 16 numeri casuali e inserirli in un array
function randomNumber100() {
    // creo array vuoto
    const numeriCasuali100 = [];
    while (numeriCasuali100.length < 16) {
        const numeroCasuale100 = Math.floor(Math.random() * 100) + 1;
        // controllo se il numero generato è già presente nell'array, se non lo è, lo pusho
        if (!numeriCasuali100.includes(numeroCasuale100)) {
            numeriCasuali100.push(numeroCasuale100);
        }
    }
    return numeriCasuali100;
}
function randomNumber81() {
    // creo array vuoto
    const numeriCasuali81 = [];
    while (numeriCasuali81.length < 16) {
        const numeroCasuale81 = Math.floor(Math.random() * 81) + 1;
        // controllo se il numero generato è già presente nell'array, se non lo è, lo pusho
        if (!numeriCasuali81.includes(numeroCasuale81)) {
            numeriCasuali81.push(numeroCasuale81);
        }
    }
    return numeriCasuali81;
}
function randomNumber49() {
    // creo array vuoto
    const numeriCasuali49 = [];
    while (numeriCasuali49.length < 16) {
        const numeroCasuale49 = Math.floor(Math.random() * 49) + 1;
        // controllo se il numero generato è già presente nell'array, se non lo è, lo pusho
        if (!numeriCasuali49.includes(numeroCasuale49)) {
            numeriCasuali49.push(numeroCasuale49);
        }
    }
    return numeriCasuali49;
}

// Esempio di utilizzo della funzione
const randomElement = randomNumber100();
console.log("BOMBE NELLA MODALITA' FACILE", randomNumber100());
const randomElement81 = randomNumber81();
console.log("BOMBE NELLA MODALITA' MEDIA", randomNumber81());
const randomElement49 = randomNumber49();
console.log("BOMBE NELLA MODALITA' DIFFICILE", randomNumber49());

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
        const squareElement = document.createElement("button");
        squareElement.classList.add("square");
        squareElement.innerHTML = i + 1; 
        gridElement.append(squareElement);
        
        // cambio colore al click
        squareElement.addEventListener("click", function(){

            let pressed = Number(this.innerText)
            // funzione per capire se l'elemento è contenuto nell'array
            // 10x10
            if (randomElement.includes(pressed)){
                this.classList.add("bomb");

                finePartita();
            } else {
                this.classList.add("revealed");
                verificaFinePartita();
            }
            // 9x9
            if (randomElement81.includes(pressed)){
                this.classList.add("bomb");

                finePartita();
            } else {
                this.classList.add("revealed");
                verificaFinePartita();
            }
            // 7x7
            if (randomElement49.includes(pressed)){
                this.classList.add("bomb");

                finePartita();
            } else {
                this.classList.add("revealed");
                verificaFinePartita();
            }
            // console.log("HAI SELEZIONATO LA CELLA: " + this.innerText);

            
            // inpedisco di cliccare due volte sullo stesso pulsante
            squareElement.setAttribute('disabled', 'true');
            // console.log('cell disabled');
        });
    }
}

let numeriScoperti = 0;
// Funzione per verificare la fine della partita
function verificaFinePartita() {
    numeriScoperti++;
    if (numeriScoperti === 100 - randomElement.length) {
        finePartita();
    }
    console.log("PUNTEGGIO:  " + numeriScoperti);
}

function finePartita() {
    const punteggio = numeriScoperti;
    alert("Game Over! Il tuo punteggio è: " + punteggio);
}