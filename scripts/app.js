let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");

const cancelConfigBtnElement = document.getElementById("cancel-config-button");

const gameAreaElement = document.getElementById("active-game");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const activePlayerNameElement = document.getElementById("active-player-name");

//const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig); //이유를 모르겠다.

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }

gameBoardElement.addEventListener("click", selectGameField);
