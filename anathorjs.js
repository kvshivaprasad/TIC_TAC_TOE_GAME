let btndiv = document.getElementsByClassName("button_div")[0];
let buttons = btndiv.querySelectorAll("button");
buttons.forEach((button) => {
  button.classList.add("all_button");
});
let all_button = document.querySelectorAll(".all_button");
let restart = document.querySelector("#btn_restart");
let result = document.querySelector("btn_result");
let winner = document.querySelector(".winner");
let hide = document.querySelector(".hide");

let turno = true;
const winnigparten = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const disablebtn = () => {
  for (let box of all_button) {
    box.disabled = true;
  }
};

const showwinner = (winners) => {
  winner.innerText = `congratulation winner is ${winners} `;
  hide.classList.remove("hide");
  disablebtn();
};
const checkcondition = () => {
  let itstie = true;
  for (let pattern of winnigparten) {
    let pos1val = all_button[pattern[0]].innerText;
    let pos2val = all_button[pattern[1]].innerText;
    let pos3val = all_button[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwinner(pos1val);
      }
    }
  }
  for (let box of all_button) {
    if (box.innerText === "") {
      itstie = false;
      break;
    }
  }
  if (itstie) {
    winner.innerText = `Match was tie please try again`;
    hide.classList.remove("hide");
    disablebtn();
  }
};

all_button.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkcondition();
  });
});
const restartbtn = () => {
  for (let box of all_button) {
    box.innerText = "";
    box.disabled = false;
    hide.classList.add("hide");
  }
};
restart.addEventListener("click", restartbtn);
