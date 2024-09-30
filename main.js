let btn_small = document.querySelector(".btn_small");
let btn_medium = document.querySelector(".btn_medium");
let btn_large = document.querySelector(".btn_large");
let btn_extra_large = document.querySelector(".btn_extra_large");

let size = 16;

let color = "black";

let btn_eraser = document.querySelector(".btn_eraser");
let btn_clear = document.querySelector(".btn_clear");

function createBoard(size) {
  let numGrid = size * size;

  let board = document.querySelector("#board");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  board.innerHTML = "";

  for (let i = 0; i < numGrid; i++) {
    let grid = document.createElement("div");
    grid.className = "squares";
    grid.style.border = "1px solid black";
    grid.style.backgroundColor = "#fff";
    grid.addEventListener("mouseover", colorSelector);

    board.insertAdjacentElement("beforeend", grid);
  }
}

function colorSelector() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else if (color === "black") {
    this.style.backgroundColor = "black";
  } else if (color === "white") {
    this.style.backgroundColor = "white";
  }
}

function colorSetter(colorSelection) {
  color = colorSelection;
}

function clear() {
  let clear = document.querySelectorAll(".squares");
  clear.forEach((div) => (div.style.backgroundColor = "white"));
}

createBoard(size);

btn_small.addEventListener("click", function () {
  createBoard(8);
});

btn_medium.addEventListener("click", function () {
  createBoard(16);
});

btn_large.addEventListener("click", function () {
  createBoard(32);
});

btn_extra_large.addEventListener("click", function () {
  createBoard(64);
});

btn_eraser.addEventListener("click", function () {
  colorSetter("white");
});

btn_clear.addEventListener("click", function () {
  clear();
});
