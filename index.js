
let clickForPoints = document.getElementById("codeToClick");

let scoreBoard = document.getElementById("totalScore");

let points = 0;

const givePoints = () => {
    ++points;
    scoreBoard.innerText = points;
}


clickForPoints.addEventListener('click', givePoints);