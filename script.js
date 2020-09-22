// declarations
var displayStart = document.getElementById("buttons");
var startQuiz = document.getElementById("start");
var question = document.getElementById("questions");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var possible = [];



var questions = ["question 1", "question 2", "question 3"];
var answers = ["answer 1", "answer 2", "answer 3", "answer 4", "answer 5", "answer 6", "answer 7", "answer 8", "answer 9",];
var correct = ["correct 1", "correct 2", "correct 3"];

var score = 0;


// hide all buttons until start
displayStart.style.display = "none";



function start() {
    // show all buttons
    displayStart.style.display = "block";
    document.getElementById("start").style.display = "none";
    document.getElementById("questionText").style.display = "none";
   
    // call timer
    timer();
    // call questionAnswer - show button text from object
    questionAnswer();

    document.getElementById("checker").textContent = score;

    // start timer
}

// function to display question and answers
function questionAnswer() {
    var i = 0;
    do {
        
        
        let q = 0;
        let a = 0;
        var x = Math.floor(Math.random() * 4);
        possible.push(answers[q]);
        possible.push(answers[q+1]);
        possible.push(answers[q+2]);
        possible.push(correct[a]);

        console.log(possible);

        // shuffle possible
        for (let i = 0; i < possible.length; i++) {
            var x = Math.floor(Math.random() * i);
            var y = possible[i];
            console.log("variable stored = " + y);
            possible[i] = possible[x];
            console.log("first swap = " + possible[i]);
            possible[x] = y;
            console.log("second swap = " + possible[x]);
            console.log("password after swaps = " + possible);
        }

        console.log(possible);



        question.textContent = questions[q];
        answer1.textContent = possible[0];
        answer2.textContent = possible[1];
        answer3.textContent = possible[2];
        answer4.textContent = possible[3];

        q = q + 1;
        a = a + 4;
        i = i + 1;
        possible.length = 0;


        // if correct object is selected, score++, if incorrect, seconds - 5, then go to next question


    } while (i < 10)
    return score;
}


// function called when user clicks an answer button
// function answerClick() {

// }

// function startTimer() {
//     seconds = 10;
//     var timer = document.getElementById("timer");
//     // We only want to start the timer if totalSeconds is > 0
//     /* The "interval" variable here using "setInterval()" begins the recurring increment of the
//        secondsElapsed variable which is used to check if the time is up */
//     interval = setInterval(function () {
//         seconds--;
//         // So renderTime() is called here once every second.
//         timer.innerHTML = seconds;
//     }, 1000);
//     if (seconds = 0) {
//         return alert("Time is up!");
//     }
// }

function timer() {
    var seconds = 180;
    function time() {
        var timer = document.getElementById("timer");
        seconds--;
        timer.innerHTML = seconds;
        if (seconds > 0) {
            setTimeout(time, 1000);
        } else {
            alert("Time's up!");
            finalScore();
        }
    }
    time();
}


startQuiz.addEventListener("click", start);
// answer1.addEventListener("click", answerClick);
// answer2.addEventListener("click", answerClick);
// answer3.addEventListener("click", answerClick);
// answer4.addEventListener("click", answerClick);

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
