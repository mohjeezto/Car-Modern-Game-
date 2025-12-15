// Hel dhammaan box-yada ciyaarta
let boxes = document.querySelectorAll(".box");

// Player-ka ugu horreeya waa X
let turn = "X";

// Ciyaartu wali ma dhammaan
let isGameOver = false;

// Event listener - marka box la taabto
boxes.forEach(e => {
    e.addEventListener("click", () => {
        // Hubi in aan la ciyaarin box hore iyo in ciyaarta socoto
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn;
            checkWin();   // hubi in uu qof guulaystay
            checkDraw();  // hubi in ciyaartu barbaro tahay
            changeTurn(); // beddel player-ka
        }
    });
});

// Beddelka turn-ka (X -> O ama O -> X)
function changeTurn() {
    if (turn === "X") {
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    } else {
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

// Hubinta guusha
function checkWin() {
    // Dhammaan isku darka guusha
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if (v0 !== "" && v0 === v1 && v0 === v2) {
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " Wins!";
            document.querySelector("#play-again").style.display = "inline";

            // Midabee saddexda sanduuq ee guuleystay
            for (let j = 0; j < 3; j++) {
                boxes[winConditions[i][j]].style.backgroundColor = "#08d9d6";
                boxes[winConditions[i][j]].style.color = "#000";
            }
            break;
        }
    }
}

// Hubinta haddii ciyaartu barbaro tahay
function checkDraw() {
    if (!isGameOver) {
        let isDraw = true;

        boxes.forEach(e => {
            if (e.innerHTML === "") isDraw = false;
        });

        if (isDraw) {
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw!";
            document.querySelector("#play-again").style.display = "inline";
        }
    }
}

// Dib u bilaabid ciyaarta
document.querySelector("#play-again").addEventListener("click", () => {
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(e => {
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff";
    });
});
