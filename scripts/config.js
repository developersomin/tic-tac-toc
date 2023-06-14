function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;

  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorsOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  //폼데이터에서 event가 발생한 요소를 찾음 submit이기 때문에 Input을 찾게됨
  const enteredPlayerName = formData.get("playerName").trim(); //앞과 뒤 공백 제거

  if (!enteredPlayerName) {
    //enteredPlayerName===''
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "please enter a valid name!";
    return;
  }
  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;
  closePlayerConfig();
}
// preventDefault가 없다면 submit 버튼을 눌렀을 때
// console창에 log가 뜨고 바로 사라지게 됩니다.
// 왜냐하면 submit을 누르면 페이지가 새로 고침 되는 것이 기본 동작이기 때문인데요
// preventDefault를 사용하면 새로 고침이 실행되지 않아서 event log를 볼 수 있습니다.
