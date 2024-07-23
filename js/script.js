// SCRIPT

// iniettiamo su html gli square gia' esistenti in css square


// ------- FUNZIONE CHE SELEZIONA LA DIFFICOLTA E RESTITUISCE LA PAROLA------------
function selezionaDifficolta() {
    let selezione = document.getElementById('difficulty').selectedIndex; 
    let difficoltaScelta = document.getElementById('difficulty').options[selezione].text;
    return difficoltaScelta;
}

// al momento del click il programma va a richiamare la funzione che restituira un valore,
    // da questo valore andra a valutare la difficolta e cambiera il gioco in base alla diffficolta/
// lo uso all'interno di un click perche cosi' va resettare ogni volta il gioco!
document.getElementById('swag').addEventListener('click', function() {
        // prendo il valore di difficoltascelta function
    let valoreDifficolta = selezionaDifficolta();
    console.log(valoreDifficolta);

        // valutiamo il valore restituito da function e in base a quello si seleziona la difficolta
    //
    if (valoreDifficolta == "easy"){
            // questo resetta cio che e' presentedentro square-container, qui direttamente cancelliamo il suo contenuto

        document.querySelector(".square-container").innerHTML = '';
        for (let i = 0; i < 100; i++) {
                // richiamo della funzione create square che restituisce un div con la class name gia' preparata nel css
//
            let squareEasy = createSquareEasy();
                // i + 1 perche senno partirebbe da 0
            //
            squareEasy.innerText = i + 1;
            // eventlistner cliccabile, cambio del colore e stampa numero
            squareEasy.addEventListener('click', function(){
                console.log('cliccato casella numero: ' + (i + 1)); 
                    // i+1 va a selezionare il cambio del colore in base a i 
                    //
                document.querySelector(`.square-easy:nth-child(${i+1})`).classList.toggle("lightCoral");            
            });
            document.querySelector(`.square-container`).appendChild(squareEasy);
        }
        // funzioni CREA SQUARE CREA UNA VARIABILE SQUARE EASY CHE RESTITUIRA CREATE ELEMENT DIV
        // RITORNERA SQUARE EASY UN DIV CON CLASS SQUARE EASY

        function createSquareEasy() {
            const squareEasy = document.createElement("div");
            squareEasy.className = "square-easy";
            return squareEasy;
        }

// -------------------------- DA QUI IN POI E' TUTTO UGUALE -------------------------------------------

    }else if (valoreDifficolta == "medium") {
        document.querySelector(".square-container").innerHTML = '';
        for (let i = 0; i < 81; i++) {
            let squareMedium = createSquareMedium();
            squareMedium.innerText = i + 1;
            // eventlistner cliccabile
            squareMedium.addEventListener('click', function(){
                console.log('cliccato casella numero: ' + (i + 1)); 
                document.querySelector(`.square-medium:nth-child(${i+1})`).classList.toggle("lightCoral");            
            });
            document.querySelector(`.square-container`).appendChild(squareMedium);
        }
        // funzioni
        function createSquareMedium() {
            const squareMedium = document.createElement("div");
            squareMedium.className = "square-medium";
            return squareMedium;
        }

    }else if (valoreDifficolta == "hard") { 
        document.querySelector(".square-container").innerHTML = '';
        for (let i = 0; i < 49; i++) {
            let squareHard = createSquareHard();
            squareHard.innerText = i + 1;
            // eventlistner cliccabile
            squareHard.addEventListener('click', function(){
                console.log('cliccato casella numero: ' + (i + 1)); 
                document.querySelector(`.square-hard:nth-child(${i+1})`).classList.toggle("lightCoral");            
            });
            document.querySelector(`.square-container`).appendChild(squareHard);
        }
        // funzioni
        function createSquareHard() {
            const squareHard = document.createElement("div");
            squareHard.className = "square-hard";
            return squareHard;
        }
    }
});











