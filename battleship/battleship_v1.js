var location1 = 3;
var location2 = 4;
var location3 = 5;

var guesses = 0;
var hits = 0;
var isSunk = false;

// game logic
while (isSunk == false) {
    var guess = prompt("Ready, Aim, Fire! 🔫 (Enter number 0-6)");

   
    guess = Number(guess);

    if (guess < 0 || guess > 6 ) {
        alert("Please enter a valid cell number!");
    } else {
     
        guesses += 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit!");
            hits += 1;

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship! 🚢");
            }
        } else {
            alert("You missed!");
        }
    }
}


var stats = "You sank my battleship in " + guesses + " guesses. Your accuracy is: " + accuracy;
alert(stats);
