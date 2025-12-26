const guess = document.getElementById('guess');
const submitbtn = document.querySelector('#submit');
const startnewbtn = document.getElementById('startnew');
const exitbtn = document.getElementById('exit');
const msgbtn = document.getElementById('message');
// const formbtn = document.getElementById('guessForm');
// console.log('submitbtn ' + submitbtn.name);

// Get a random number
let answer = Math.round(Math.random() * 100)
console.log('answer ' + answer);

// Event Handelers
//guessbtn.addEventListener('click', guessit);
submitbtn.addEventListener('click', submitit);
startnewbtn.addEventListener('click', startnew);
exitbtn.addEventListener('click', exit);

function submitit(event) {
    event.preventDefault();

    // *** Use the parent-child-sibling relationship to navigate between elements at least once 
    let theparentnode = submitbtn.parentNode;
    console.log('The submit button parent is: ', theparentnode);

    // ** Iterate over a collection of elements to accomplish some task. (turn all the buttons color to blue)
    const buttons = document.getElementsByTagName('button');

    for (const button of buttons) {
        button.style.color = 'blue';  // turn all the buttons color to blue on submit
    }

    // This is the game logic
    if (isNaN(Number(guess.value))) {
        msgbtn.textContent = "That is not a number";
    } else if (Number(guess.value) === answer) {
        msgbtn.textContent = "You guessed it!";
    } else if (Number(guess.value) < answer) {
        msgbtn.textContent = "Too low";
    }
    else {
        msgbtn.textContent = "Too high";
    }

    return;
}

function startnew() {
    // console.log('Got to the start new function');
    // Get a new random number number every time "Start New Game" is clicked.
    answer = Math.round(Math.random() * 100);
    console.log('answer ' + answer);
    return;
}

function exit() {
    window.close();
    return;
}