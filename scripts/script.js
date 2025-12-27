const guess = document.getElementById('guess');
const submitbtn = document.querySelector('#submit');
const startnewbtn = document.getElementById('startnew');
const exitbtn = document.getElementById('exit');
const msgbtn = document.getElementById('message');
const changebtn = document.getElementById('changesubmit');
const changeinput = document.getElementById('changes');
// const formbtn = document.getElementById('guessForm');

// Get a random number
let answer = Math.floor(Math.random() * 100) + 1;
// console.log('answer ' + answer);

// Event Handelers
//guessbtn.addEventListener('click', guessit);
submitbtn.addEventListener('click', submitit);
startnewbtn.addEventListener('click', startnew);
exitbtn.addEventListener('click', exit);
changebtn.addEventListener('click', changeit);

function changeit(event) {
    // Modify the HTML or text content of at least one element in response to user interaction using innerHTML,
    // innerText, or textContent.
    submitbtn.value = changeinput.value;
}

function submitit(event) {
    event.preventDefault();

    // cache the guess into hisitory
    let history = document.getElementById('historyguess'); // ('guessForm');
    let li = document.createElement("li");
    li.textContent = guess.value;
    // Use appendChild and/or prepend to add new elements to the DOM.
    history.prepend(li);

    // *** Use the parent-child-sibling relationship to navigate between elements at least once 
    let theparentnode = submitbtn.parentNode;
    // console.log('The submit button parent is: ', theparentnode);

    // get the buttons and the colors for them
    const buttons = document.getElementsByTagName('button');
    const colorarr = ['red', 'green', 'blue', 'purple', 'DarkGray', 'orange', 'MidnightBlue', 'Gunmetal', 'magenta', 'Navy'];
    let newcolor = Math.round(Math.random() * colorarr.length); // get a random number between 1-10

    // ** Iterate over a collection of elements to accomplish some task. (turn all the buttons color to a randowm color)
    for (const button of buttons) {
        button.style.color = colorarr[newcolor];  // turn all the buttons color to a randowm color on submit
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

    // Clear the messages
    msgbtn.textContent = "";
    historyguess.textContent = "";
    guess.value = "";
    changeinput.value = "";


    // Get a new random number number every time "Start New Game" is clicked.
    answer = Math.floor(Math.random() * 100) + 1;
    //console.log('answer ' + answer);

    // Create at least one element using createElement.
    let container = document.getElementById('guessForm')
    let newbutton = document.createElement('button');
    newbutton.style.width = '50px';
    newbutton.style.height = '30px';
    container.appendChild(newbutton);

    return;
}

function exit() {
    window.close();
    return;
}