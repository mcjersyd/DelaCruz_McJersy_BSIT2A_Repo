// Generate random ship location
var randomLoc = Math.floor(Math.random() * 5);
var shipLocations = [randomLoc, randomLoc + 1, randomLoc + 2]; // Store ship locations in an array

let guesses = 0;
let hits = 0;
let isSunk = false;

while (!isSunk) {
    let guess = prompt("Ready, Aim, Fire! (Enter a number 0-6):");

    if (guess === null) {
        alert("Thank you for playing!");
        break;
    }

    guess = parseInt(guess, 10); // Convert input to number base 10

    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid number between 0 and 6!");
        continue;
    }

    guesses++;

    const hitIndex = shipLocations.indexOf(guess);

    if (hitIndex !== -1) { // -1 means not found
        alert("Hit!");
        shipLocations.splice(hitIndex, 1);
        hits++;

        if (shipLocations.length === 0) {
            isSunk = true;
        }
    } else {
        alert("Miss!");
    }
}

// Show game stats
var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);
var stats = "You took " + guesses + " guesses to sink the battleship!\n" +
            "Accuracy: " + accuracy + "%";
alert(stats);

