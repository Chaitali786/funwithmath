function startGame() {
  //console.log("startGame called");

  const operations = ["addition", "subtraction", "multiplication", "division"];
  let score = 0;
  let roundsPlayed = 0;

  let totalRounds = parseInt(
    prompt(
      "Welcome to the Math Game! \nHow many rounds would you like to play? (1-5)"
    )
  );
  //if (isNaN(totalRounds) || totalRounds <= 0)
  if (totalRounds >= 5) {
    alert("Enter number between 1-5 !!! You can have max 5 chances only !");
  } else if (isNaN(totalRounds) || totalRounds <= 0) {
    alert("Invalid input. Game cancelled.");
  } else {
    while (roundsPlayed < totalRounds) {
      let randomIndex = Math.floor(Math.random() * operations.length);
      let chosenOperation = operations[randomIndex];

      let num1 = prompt(
        `Round ${roundsPlayed + 1} of ${totalRounds}\nEnter the first number:`
      );
      if (num1 === null) break;
      let num2 = prompt("Enter the second number:");
      if (num2 === null) break;

      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter numbers only.");
        continue;
      }

      let correctAnswer;
      if (chosenOperation === "addition") {
        correctAnswer = num1 + num2;
      } else if (chosenOperation === "subtraction") {
        correctAnswer = num1 - num2;
      } else if (chosenOperation === "multiplication") {
        correctAnswer = num1 * num2;
      } else if (chosenOperation === "division") {
        if (num2 === 0) {
          alert(" Division by zero is not allowed. Skipping this round.");
          continue;
        }
        correctAnswer = num1 / num2;
      }

      let userAnswer = prompt(`What is ${num1} ${chosenOperation} ${num2}?`);
      if (userAnswer === null) break;

      userAnswer = parseFloat(userAnswer);

      if (userAnswer === correctAnswer) {
        alert("Correct! Well done!");
        score++;
      } else {
        alert(`Wrong! The correct answer was ${correctAnswer}`);
      }

      roundsPlayed++;
    }

    if (roundsPlayed > 0) {
      if (score > roundsPlayed / 2) {
        alert(`You win! You got ${score} out of ${roundsPlayed} correct.`);
      } else {
        alert(
          `Sorry You lose! You only got ${score} out of ${roundsPlayed} correct.`
        );
      }
    } else {
      alert("Game ended without playing any rounds.");
    }
  }
}
