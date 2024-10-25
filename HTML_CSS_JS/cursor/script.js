// Define snakes and ladders
const ladders = {
    3: 22,
    5: 8,
    11: 26,
    20: 29,
  };
  
  const snakes = {
    27: 1,
    21: 9,
    19: 7,
    23: 15,
  };
  
  // Initialize player positions
  let player1Pos = 1;
  let player2Pos = 1;
  let currentPlayer = 1;
  
  // Create the board dynamically
  function createBoard() {
    for (let i = 100; i >= 1; i--) {
      const square = document.createElement("div");
  
      square.className = "square";
      square.id = "square-" + i;
      square.textContent = i;
  
      if (ladders[i]) {
        square.classList.add("ladder");
      } else if (snakes[i]) {
        square.classList.add("snake");
      }
  
      document.querySelector(".board").appendChild(square);
    }
  
    // Set the initial player positions
    updatePlayerPosition(1, player1Pos, 'player1');
    updatePlayerPosition(2, player2Pos, 'player2');
  }
  
  // Function to roll the dice
  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Function to move players
  function movePlayer(playerPos, diceResult) {
    let newPosition = playerPos + diceResult;
  
    if (newPosition > 100) {
      newPosition = playerPos;  // Stay in the same position if exceeding 100
    }
    else if (newPosition==100)
    {
        newPosition=playerPos;
        alert("Match draw");
        location.href("raji.html");
    }
  
    if (ladders[newPosition]) {
      newPosition = ladders[newPosition];
      alert("You climbed a ladder to " + newPosition);
    }
  
    if (snakes[newPosition]) {
      newPosition = snakes[newPosition];
      alert("You got bitten by a snake! Go down to " + newPosition);
    }
  
    return newPosition;
  }
  
  // Function to update player position on the board
  function updatePlayerPosition(playerNumber, newPosition, playerClass) {
    // Remove previous player position
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      square.classList.remove(playerClass);  // Remove player's class from previous square
    });
  
    // Add player to new position
    const currentSquare = document.getElementById("square-" + newPosition);
    currentSquare.classList.add(playerClass);
  }
  
  // Roll Dice button logic
  document.getElementById('rollDice').addEventListener('click', function () {
    const diceResult = rollDice();
    document.getElementById('diceResult').textContent = diceResult;
  
    if (currentPlayer === 1) {
      const newPos = movePlayer(player1Pos, diceResult);
      updatePlayerPosition(1, newPos, 'player1');  // Update Player 1 position on the board
      player1Pos = newPos;
      document.getElementById('player1Pos').textContent = player1Pos;
      currentPlayer = 2;  // Switch to Player 2
    } else {
      const newPos = movePlayer(player2Pos, diceResult);
      updatePlayerPosition(2, newPos, 'player2');  // Update Player 2 position on the board
      player2Pos = newPos;
      document.getElementById('player2Pos').textContent = player2Pos;
      currentPlayer = 1;  // Switch to Player 1
    }
  });
  
  // Create the board when the page loads
  createBoard();
  