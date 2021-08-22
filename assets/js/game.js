let wins = document.querySelector(".wins"),
    losses = document.querySelector(".losses"),
    guessesLeftSpan = document.querySelector(".guesses-left-span"),
    guessesSoFar = document.querySelector(".guesses-so-far");

// console.log(guessesSoFar);

let letters = ["q", "w", "e", "r"];

let guessesLeft = 9;

window.addEventListener("keypress", (e) => {
    guessesSoFar.textContent += e.key;

    let randomLetterIndex = Math.floor(Math.random() * letters.length);

    function letsGo() {
        guessesLeft--;

        function restart() {
            guessesLeft = 9;
        }

        for (letter of letters) {
            if(letter[randomLetterIndex] == e.key) {
                wins.textContent++;
                alert(`${letter} is the selected word :)`);
                restart();
            }   
            guessesLeftSpan.textContent = guessesLeft;
        }

        guessesLeft.textContent; 

        if(guessesLeft == 0) {
            losses.textContent++;
            restart();
        } else if (guessesLeft == 1) {
            alert("This is Your Last Chance Please, Be Careful! :) ");
        }
    }
    
    letsGo();
});