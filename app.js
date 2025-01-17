let drawnNumbers = [];
let maxNumber = 10

let secretNumber = randomNumber();


function showText(tag, textVar) {
    let field = document.querySelector(tag);
    field.innerHTML = textVar
    responsiveVoice.speak(textVar, 'UK English Female', {rate:1.2});
}

function showFirstMessage() {
    showText('h1','Secret Number Game');
    showText('p',`Pick a number between 1 and ${maxNumber}`);
}

function restartGame() {
    secretNumber = randomNumber();
    clearField();
    attemptCount = 1;
    document.getElementById('restart').setAttribute('disabled',true);
    showFirstMessage();
}



function randomNumber() {
    let chosenNumber = parseInt(Math.random() * maxNumber + 1);
    let drawnNumbersCount = drawnNumbers.length;

    if (drawnNumbersCount == maxNumber) {
        drawnNumbers = [];
    }
    if (drawnNumbers.includes(chosenNumber)) {
        return randomNumber();
    } else {
        drawnNumbers.push(chosenNumber)
        return chosenNumber
    }
}

function clearField() {
    guess = document.querySelector('input');
    guess.value = '';
}


//let title = document.querySelector('h1');
//title.innerHTML = 'Secret Number Game';
////showText('h1','Secret Number Game');

//let paragraph = document.querySelector('p');
//paragraph.innerHTML = 'Pick a number between 1 and 10';
////showText('p','Pick a number between 1 and 10');
showFirstMessage()

let attemptCount = 1;

function verifyGuess() {
    let guess = document.querySelector('input').value;
    if (guess < secretNumber) {
        showText('p', `Try a higher number!`)
        attemptCount++;
        clearField();
    } else if (guess > secretNumber) {
        showText('p', `Try a lower number!`)
        attemptCount++;
        clearField();
    } else {
        let attemptWord = attemptCount > 1? 'attempts' : 'attempt'
        showText('h1', 'Nailed it!');
        showText('p', `You've discovered my secret number with ${attemptCount} ${attemptWord}!`);
        document.getElementById('restart').removeAttribute('disabled');
    }

}

