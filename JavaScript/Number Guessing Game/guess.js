answer = "wrong";
var number = 0;

function numberGen() {
  number = Math.floor((Math.random() * 10) +1 );
  return number;
}

function guess() {
  numberGen();
  while (answer == "wrong") {
    guess = Number(prompt("Pick a number"));
    if (guess < number) {
      alert("Number too low")
    }
    else if (guess > number) {
      alert("Number too high")
    }
    else if (guess === number) {
      alert("You guessed it! The number was " + number);
      answer = "correct"
    }
  }

  while (answer == "correct") {
    play = prompt("Play again? (y/n)");
    if (play == "y") {
      guess();
    }
    else {
      alert("Thanks for playing");
      answer = "wrong"
    }
  }
}

guess();
