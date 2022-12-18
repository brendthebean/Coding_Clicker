
let clickForPoints = document.getElementById("codeToClick");
let scoreBoard = document.getElementById("totalScore");
let ideClicker = document.getElementById("ide");
let unemployed = document.getElementById("unemployed");
let ai = document.getElementById("ai");

let points = 0;
let ide = 0;
let joblessProg = 0;
let chatGPT = 0;

const givePoints = () => {
    ++points;
    scoreBoard.innerText = points;
}
//these functions raise depending on which autoclick is purchased
const ideAutoClick = () => {
    points -= 3;
    ++ide;    
}

const unemployedAutoClick = () => {
    points -= 6;
    ++joblessProg;
}

const aiAutoclick = () => {
    points -= 9;
    ++chatGPT;
}

//this adds all points for the auto clickers that are purchased
//it is nested to require purchase of each element before being able to but the next one
const addAutoPoints = () => {
    if (ide !== 0){
        points += 1 * ide;
        if (joblessProg !== 0) {
            points += 2 * joblessProg;
            if (chatGPT !== 0)
                points += 3 * chatGPT;
        }
        scoreBoard.innerText = points;  
    }
   
}

setInterval(addAutoPoints, 1000);



clickForPoints.addEventListener('click', givePoints);
ideClicker.addEventListener('click', ideAutoClick);
unemployed.addEventListener('click', unemployedAutoClick);
ai.addEventListener('click', aiAutoclick);