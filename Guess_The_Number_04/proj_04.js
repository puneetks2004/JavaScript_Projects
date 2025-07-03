let random_number = parseInt(Math.random() * 100 + 1);

const user_input = document.querySelector('#input');
const btn = document.querySelector("#btn");
const storing_values = document.querySelector("#storing_values");
const decreasing_count = document.querySelector("#decreasing_count");
const low_or_high = document.querySelector("#low_or_high");
const start_over = document.querySelector('#segment_3');

const p = document.createElement('p');

let prev_guess = [];//empty array to store guesses

let play_game = true;//to start game
let num_guess = 1;


if (play_game === true) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const input_fetch = parseInt(user_input.value);
        console.log(input_fetch);
        validate_guess(input_fetch);
    })
}



function validate_guess(input_fetch) {
    //checks truthness of guess
    if (input_fetch < 1) {
        alert('please enter number higher than 1')
    }
    else if (input_fetch > 100) {
        alert('please enter a number less than 100')
    }
    else if (isNaN(input_fetch)) {
        alert(`enter valid number`);
    }
    else {
        prev_guess.push(input_fetch);
        if (num_guess === 11) {//if exceeds 10
            display_guess(input_fetch);
            display_message(`Game over, random number was ${random_number}`)
            endgame();
        }
        else {
            display_guess(input_fetch);
            check_guess(input_fetch);
        }
    }

}

function check_guess(input_fetch) {
    //check right guess or not

    if (input_fetch > random_number) {
        display_message(`The number is too high`);
    }
    else if (input_fetch < random_number) {
        display_message(`The number is too low`);
    }
    else if (input_fetch === random_number) {
        display_message(`You guessed it right`)
        endgame();
    }

}


function display_guess(input_fetch) {
    user_input.value = '';//to clean value from main text box after entering value
    //now to display all in array
    storing_values.innerHTML += ` ${input_fetch}, `//storing values
    num_guess++;//increamenting num_guess
    decreasing_count.innerHTML = ` ${11 - num_guess} `


}

function display_message(message) {
    low_or_high.innerHTML = `<h2>${message}</h2>`;

}

function endgame() {
    user_input.value = "";
    user_input.setAttribute("disabled", "");
    // p.classList.add('button');//p.classList.add('button') adds the class button to the class attribute of the p element. -----------------no significant use 
    p.innerHTML = `<h2 id="newGame"> start new game</h2>`;
    start_over.appendChild(p);//to append 
    play_game = false;
    newgame();
}


function newgame() {
    const newgame = document.querySelector("#newGame");
    newgame.addEventListener("click", function (e) {
        random_number = parseInt(Math.random() * 100 + 1);
        play_game = true;
        prev_guess = [];
        num_guess = 1;
        storing_values.innerHTML = "";
        decreasing_count.innerHTML = `${11 - num_guess}`;
        p.remove();
        user_input.removeAttribute('disabled');//When the "Start New Game" button is clicked, the game state is reset, but you may also need to re - enable the input field.
    })
}