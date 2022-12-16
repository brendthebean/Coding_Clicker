
let clickForPoints = document.getElementById("codeToClick");
let scoreBoard = document.getElementById("totalScore");
let ideClicker = document.getElementById("ide");

let points = 0;
let ide = 0;

const givePoints = () => {
    ++points;
    scoreBoard.innerText = points;
}

const ideAutoClick = () => {
    points -= 10;
    ++ide;
    
}

clickForPoints.addEventListener('click', givePoints);
ideClicker.addEventListener('click', ideAutoClick);