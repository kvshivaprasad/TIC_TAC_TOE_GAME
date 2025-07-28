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
let turn0 = true; // player turn

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

all_button.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const disablebtn = () => {
  for (let box of all_button) {
    box.disabled = true;
  }
};
const newgamebtn = () => {
  for (let box of all_button) {
    box.disabled = false;
    box.innerText = "";
    hide.classList.add("hide");
  }
};

const showwinner = (winners) => {
  winner.innerText = `congratulation winner is ${winners}`;
  hide.classList.remove("hide");
  disablebtn();
};

const checkwinner = () => {
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
    winner.innerText = `MATCH WAS TIE`;
    hide.classList.remove("hide");
    disablebtn();
  }
};
restart.addEventListener("click", newgamebtn);

// const checkwinner = () => {
//   for (let pattern of winnigparten) {
//     console.log(pattern[0], pattern[1], pattern[2]);
//     console.log(
//       all_button[pattern[0]].innerText,
//       all_button[pattern[1]].innerText,
//       all_button[pattern[2]].innerText
//     );
//   }
// };
