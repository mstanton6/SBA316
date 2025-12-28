
// 1. Requirement Cache at least one element using selectElementById.
const guess = document.getElementById('guess');
// 2. Requirement Cache at least one element using querySelector
const submitbtn = document.querySelector('#submit');
const startnewbtn = document.getElementById('startnew');
const exitbtn = document.getElementById('exit');
const msgbtn = document.getElementById('message');
const changebtn = document.getElementById('changesubmit');
const changeinput = document.getElementById('changes');
const history = document.getElementById('historyguess'); // ('guessForm');
const overviewbtn = document.getElementById('overview');
// const formbtn = document.getElementById('guessForm');

// Get a random number
let answer = Math.floor(Math.random() * 100) + 1;
// console.log('answer ' + answer);

try {
    overviewbtn.textContent = `A number guessing game is a simple challenge where a player tries to guess a secret number chosen by the computer or another player within a limited number of attempts, receiving "too high" or "too low" hints after each incorrect guess to narrow down the possibilities and find the answer efficiently.`;

    // Event listeners
    // 11. Requirement - Register at least two different event listeners and create the associated event handler functions.
    //guessbtn.addEventListener('click', guessit);
    submitbtn.addEventListener('click', submitit);
    startnewbtn.addEventListener('click', startnew);
    exitbtn.addEventListener('click', exit);
    changebtn.addEventListener('click', changeit);
}
catch (err) {
    console.error(err);

}

function changeit(event) {
    // 10. Requirement - Modify at least one attribute of an element in response to user interaction.
    let changevalue = changeinput.value;
    submitbtn.value = changevalue;
    changeinput.value = "";
}

function submitit(event) {
    event.preventDefault();

    // Requirement 14 - Include at least one form and/or input with DOM event-based validation.
    // (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
    if (guess.value === '') {  // Prevent the user from entering an empty string
       msgbtn.textContent = "Submit a number 1-100";
       return;
    }

    // 8. Requirement - Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
    overviewbtn.textContent = "This text has now been changed."

    // 3. Requirement Use the parent-child-sibling relationship to navigate between elements at least once 
    let theparentnode = submitbtn.parentNode;
    // console.log('The submit button parent is: ', theparentnode);

    // get the buttons and the colors for them
    const buttons = document.getElementsByTagName('button');
    const colorarr = ['red', 'green', 'blue', 'purple', 'DarkGray', 'orange', 'MidnightBlue', 'Gunmetal', 'magenta', 'Navy'];
    let newcolor = Math.floor(Math.random() * colorarr.length); // get a random number between 1-10

    // ** 4. Requirement - Iterate over a collection of elements to accomplish some task. (turn all the buttons color to a randowm color)
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

    // cache the guess into hisitory
    let li = document.createElement("li");
    li.textContent = guess.value + ' - ' + msgbtn.textContent;
    // 6. Requirement - Use appendChild and/or prepend to add new elements to the DOM.
    history.prepend(li);

    guess.value = "";

    return;
}

function startnew() {

    // Clear the messages
    msgbtn.textContent = "";
    history.textContent = "";
    guess.value = "";
    changeinput.value = "";


    // Get a new random number number every time "Start New Game" is clicked.
    answer = Math.floor(Math.random() * 100) + 1;
    //console.log('answer ' + answer);

    let container = document.getElementById('guessForm')
    // 5. Requirement - Create at least one element using createElement.
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