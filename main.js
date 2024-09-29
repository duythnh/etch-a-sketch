function createBoard() {
  let board = document.querySelector("#board");
  board.style.gridTemplateColumns = "repeat (16, 1fr)";
  board.style.gridTemplateRows = "repeat (16, 1fr)";

  for (let i = 0; i < 16*16; i++) {
    let grid = document.createElement("div");
    grid.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", grid);
  }
}
createBoard();
