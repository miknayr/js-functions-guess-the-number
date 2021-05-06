// let favVeg = prompt("What is your favorite vegetable?", "Brussel Sprouts")

// console.log(`Oh, I see - your favorite vegetable is ${favVeg}.`)



// let randomNumber = Math.floor(Math.Random() * 10) + 1;
// const guessSubmit = document.querySelector('.guessSubmit');

// let guessCount = 1;
// let resetButton;

   

let randomNum = Math.floor(Math.random() * 10 + 1) 

function ask() {
    let guessedNum = prompt('guess 1-10')
    if (guessedNum == randomNum) {
        console.log('you got it!');
    } else {
        console.log('keep trying!')
        ask()
    }
}

ask()