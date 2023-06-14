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
  //�������Ϳ��� event�� �߻��� ��Ҹ� ã�� submit�̱� ������ Input�� ã�Ե�
  const enteredPlayerName = formData.get("playerName").trim(); //�հ� �� ���� ����

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
// preventDefault�� ���ٸ� submit ��ư�� ������ ��
// consoleâ�� log�� �߰� �ٷ� ������� �˴ϴ�.
// �ֳ��ϸ� submit�� ������ �������� ���� ��ħ �Ǵ� ���� �⺻ �����̱� �����ε���
// preventDefault�� ����ϸ� ���� ��ħ�� ������� �ʾƼ� event log�� �� �� �ֽ��ϴ�.
