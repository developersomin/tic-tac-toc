function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("이름을 입력해");
    return;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;

  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI" || event.target.textContent.length !== 0) {
    return;
  }
  const selectedField = event.target;
  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  const selectedCol = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;
  gameData[selectedRow][selectedCol] = activePlayer + 1;
  const winnerId = checkForGameOver();
  console.log(winnerId);
  currentRound++;
  if (winnerId !== 0) {
  }

  switchPlayer();
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (gameData[0][0] === gameData[1][1] && gameData[1][1] === gameData[2][2]) {
    return gameData[0][0];
  }
  if (gameData[2][0] === gameData[1][1] && gameData[1][1] === gameData[0][2]) {
    return gameData[2][0];
  }
  if (currentRound === 9) {
    return -1;
  }

  return 0;
}
