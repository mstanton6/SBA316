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
    /** This is the event handler function for the changebtn button.
     *  The changebtn button is for "Change Submit Button"
     *  This function 1. Changes the text of the Submit button to what the user wants
     *  2. Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
     */

    if (changeinput.value === '') {  // Prevent the user from entering an empty string
        msgbtn.textContent = "Enter Text for the Submit Button";
        return;
    } else {msgbtn.textContent = "" // clear out the message

    }
    // 10. Requirement - Modify at least one attribute of an element in response to user interaction.
    // This is changing the text of the submit button to whatever the user wants
    let changevalue = changeinput.value;
    submitbtn.value = changevalue;
    changeinput.value = "";

    // 9. Requirement - Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
    overviewbtn.style.fontSize = '20px';
}

function submitit(event) {
    /**This is the event handler function for the submitbtn button.
    *  The submitbtn button is for "Submit"
    *  This function 1. Prevent the user from entering an empty string 2. Modify the HTML or text content of at least one element and Use at least two Browser Object Model (BOM) properties or methods
    *  3. Use the parent-child-sibling relationship to navigate between elements at least once
    *  4. The color of the buttons will change randomly upon the submit button being clicked and Iterate over a collection of elements to accomplish some task.
    *  5. The game logic 6. cache the guess into hisitory
    */
    event.preventDefault();

    // Requirement 14 - Include at least one form and/or input with DOM event-based validation.
    // (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
    if (guess.value === '') {  // Prevent the user from entering an empty string
        msgbtn.textContent = "Submit a number 1-100";
        return;
    }

    // 8. Requirement - Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
    // Requirement 12b: Use at least two Browser Object Model (BOM) properties or methods
    overviewbtn.textContent = "This text has now been changed to show you window width and height: " + window.innerWidth + " X " + window.innerHeight;

    // 3. Requirement Use the parent-child-sibling relationship to navigate between elements at least once 
    let theparentnode = submitbtn.parentNode;
    // console.log('The submit button parent is: ', theparentnode);

    // get the buttons and the colors for them - the color of the buttons will change randomly upon the submit button being clicked
    const buttons = document.getElementsByTagName('button');
    const colorarr = ['red', 'green', 'blue', 'purple', 'DarkGray', 'orange', 'MidnightBlue', 'brown', 'magenta', 'Navy'];
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
    /** This is the event handler function for the startnewbtn button.
     * The startnewbtn button is for "Start New Game"
    *  This function 1. Clears the messages 2. Gets a new random number
    *  3. Creates a new button on the fly
    */
    // Clear the messages
    msgbtn.textContent = "";
    history.textContent = "";
    guess.value = "";
    changeinput.value = "";


    // Get a new random number number every time "Start New Game" is clicked.
    answer = Math.floor(Math.random() * 100) + 1;
    //console.log('answer ' + answer);

    // Creates a new button on the fly
    let container = document.getElementById('guessForm')
    // 5. Requirement - Create at least one element using createElement.
    let newbutton = document.createElement('button');
    newbutton.style.width = '50px';
    newbutton.style.height = '30px';
    container.appendChild(newbutton);

    return;
}

function exit() {
    /** This is the event handler function for the exitbtn button.
     * The exitbtn button is for "Exit Game"
     */
    // Requirement 12a: Use at least two Browser Object Model (BOM) properties or methods.
    window.close();
    return;
}