/*
// Learned from https://www.youtube.com/watch?v=maB0r59KOUk //
const minimum = 1;
const maximum = 100;
const answer = Math.round(Math.random() * (maximum - minimum + 1)) + minimum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minimum} and ${maximum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess < minimum || guess > maximum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low. Try again.");
        }
        else if(guess > answer){
            window.alert("Too high. Try again.");
        }
        else{
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts. 😲`)
            running = false;
        }
    }
}
*/

/*
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let from = 0;

while (from<10){
    document.write(num.join("   ") + "<br>");
    
    from++;
}
*/