// SCRIPT

// iniettiamo su html gli square gia' esistenti in css square



function selezionaDifficolta() {
    let selezione = document.getElementById('difficulty').selectedIndex; 
    let difficoltaScelta = document.getElementById('difficulty').options[selezione].text;
    return difficoltaScelta;
}


let valoreDifficolta; 
document.getElementById('swag').addEventListener('click', function() {
    valoreDifficolta = selezionaDifficolta();
    console.log(valoreDifficolta);

    if (valoreDifficolta == "easy"){
        document.querySelector(".square-container").innerHTML = '';
        for (let i = 0; i < 100; i++) {
            let squareEasy = createSquareEasy();
            squareEasy.innerText = i + 1;
            // eventlistner cliccabile
            squareEasy.addEventListener('click', function(){
                console.log('cliccato casella numero: ' + (i + 1)); 
                document.querySelector(`.square-easy:nth-child(${i+1})`).classList.toggle("lightCoral");            
            });
            document.querySelector(`.square-container`).appendChild(squareEasy);
        }
        // funzioni
        function createSquareEasy() {
            const squareEasy = document.createElement("div");
            squareEasy.className = "square-easy";
            return squareEasy;
        }
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











