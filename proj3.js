

let SECRETNUM =
    Math.trunc(Math.random() * 100) + 1;
let score =
    document.getElementById('second').textContent;
let highScore =
    document.getElementById('third').textContent;
const displaymsg =
    function (message) {
        document.getElementById('first').textContent = message;
    }

document.getElementById('guessing').addEventListener("click", function () {
    const userInput = Number(document.querySelector('.text').value);
    if (isNaN(userInput) || (userInput < 0) || (userInput > 100)) {
        if (document.getElementById('first')) { displaymsg('INVALID INPUT ⛔'); }
    }
    else if (!userInput) {
        displaymsg('NO NUMBER ⛔');
    }
    else if (userInput !== SECRETNUM && (score >= 1)) {
        score = score - 1;
        document.getElementById('second').textContent = score;
        if (score === 0) {
            if (document.getElementById('first')) { displaymsg('⌛ GAME OVER ⌛'); }
        }
        else if (userInput > SECRETNUM) { displaymsg('TOO HIGH 📈'); }
        else if (userInput < SECRETNUM) { displaymsg('TOO LOW 📉'); }
    }
    else if (userInput === SECRETNUM) {
        displaymsg('🎉 CORRECT 🎉');
        document.getElementById('third').textContent = score;
        document.getElementById('game-win').style.background = 'linear-gradient(lightyellow, #bfee90)';
        document.getElementById("image-win").src = "WIN.png";
    }
});
document.getElementById('autobox').addEventListener("click", function () {
    document.getElementById('first').textContent = 'Start guessing .. 💭'
    document.getElementById('second').textContent = '10';
    document.getElementById('third').textContent = '0';
    document.querySelector('.text').textContent = " ";
    document.getElementById("image-win").src = "TITLE.png";
    SECRETNUM = Math.trunc(Math.random() * 100) + 1;
    score = 10;
    document.getElementById('game-win').style.background = 'linear-gradient(lightyellow, lightpink)';
});
