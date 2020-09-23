// declarations
const displayStart = document.getElementById("buttons");
const startQuiz = document.getElementById("start");
const question = document.getElementById("questions");
const answer1 = document.getElementById("1");
const answer2 = document.getElementById("2");
const answer3 = document.getElementById("3");
const answer4 = document.getElementById("4");
var text = document.getElementById("questionText");
let possible = [];
// var answerId = "";
let i = 0;
// set up object for questions and answers or array of objects 
const questions = ["question 1", "question 2", "question 3", "question 4", "question 5", "question 6", "question 7", "question 8", "question 9", "question 10"];
const answers = ["answer 1", "answer 2", "answer 3", "answer 4", "answer 5", "answer 6", "answer 7", "answer 8", "answer 9",];
const correct = ["correct 1", "correct 2", "correct 3", "correct 4", "correct 5", "correct 6", "correct 7", "correct 8", "correct 9", "correct 10"];

var score = 0;
var seconds = 180;
var timeLeft;
// hide all buttons until start
displayStart.style.display = "none";
var x = 0;
var answer = true;


function start(check) {
    // show all buttons
    displayStart.style.display = "block";
    text.style.display = "none";
    document.getElementById("start").style.display = "none";
    // document.getElementById("questionText").style.display = "none";
    console.log("start #: " + x);

    // call timer
    var timeleft = timer(seconds);
    displayQA(x);
    // call questionAnswer - show button text from object

    // trying to get this 

    //  for (let i = 0; i < 10; i++) {
    console.log("x = " + x);
    console.log("this is check: " + check);
    // starting at 0, calls function with the number x
    var ans = correct[x];
    console.log("the correct answer is: " + ans);
    console.log("container passed out = " + possible);

    // doesnt work
    // var answerId = document.getElementById(check);
    // console.log("MY FINAL ANSWER IS: " + answerId);

    // var check = checkAnswer(possible);

    // TODO - find a way to take textContent of clicked button
    // figure out how to test check variable against correct answer from array
    if (x > 0) {
        answer = checkAnswer(check, ans);

        document.getElementById("checker").textContent = "Correct!";
        if (answer) {
            document.getElementById("checker").textContent = "Correct!";
        }
        else {
            document.getElementById("checker").textContent = "Incorrect!";
            seconds = seconds - 5;
        }
    }
    // if (check == ans) {
    //     document.getElementById("checker").textContent = "Correct!";
    // }

    // else {
    //     timeLeft = timeLeft - 5;
    //     seconds = timeLeft;
    //     document.getElementById("checker").textContent = "Incorrect!";
    // }

    // if you run out of time
    if (timeLeft < 1) {
        highScores(timeLeft);
    }
    // if you answer all questions
    if (x == 10) {
        highScores(timeLeft);
    }

    x++;
}

// function to display question and answers with the index of x from above (num here)
function displayQA(num) {
    // do {
    possible.length = 0;
    // var clickOne = "";
    // var clickTwo = "";
    // var clickThree = "";
    // var clickFour = "";
    // let q = 0;
    // let a = 0;
    // var x = Math.floor(Math.random() * 4);
    possible.push(answers[num]);
    possible.push(answers[num + 1]);
    possible.push(answers[num + 2]);
    possible.push(correct[num]);
    console.log("original possible container = " + possible);

    // console.log(possible);

    // shuffle possible array
    for (let i = 0; i < possible.length; i++) {
        var x = Math.floor(Math.random() * i);
        var y = possible[i];
        // console.log("variable stored = " + y);
        possible[i] = possible[x];
        // console.log("first swap = " + possible[i]);
        possible[x] = y;
        // console.log("second swap = " + possible[x]);
        // console.log("password after swaps = " + possible);
    }
    // console.log("possible after swaps = " + possible);

    // write question and shuffled answers to page
    question.textContent = questions[num];
    answer1.textContent = possible[0];
    answer2.textContent = possible[1];
    answer3.textContent = possible[2];
    answer4.textContent = possible[3];
    console.log("question is: " + questions[i]);
    // prepare for next set of questions
    // q = q + 1;
    // a = a + 4;
    // i = i + 1;    
    console.log("possible container" + possible);

    return correct[num];
}

// WORKING TEXT CONTENT GRABBER on click

$("#buttons").on("click", "button", function (event) {
    var numId = this.id;
    var test = this.textContent;
    console.log("TEST ID PLS IGNORE: " + numId);
    console.log("WINRAR: " + test);
    // calls start with the parameter of textcontent of the button
    start(numId, test);

});

function checkAnswer(check, ans) {
    var test = false;
    console.log("Check = " + check + " Answer = " + ans);
    if (check === ans) {
        test = true;
        console.log("test true = " + test);
    } else {
        test = false;
        console.log("test false = " + test);
    }
    return test;

}

function highScores() {
    displayStart.style.display = "none";
    question.textContent = "High Scores: ";
    // text.style.display = "block";
    // text.textContent = "High Scores List";
}

var timeElapsed = 0;
function timer(seconds) {

    function time() {
        var timer = document.getElementById("timer");
        timeElapsed++;
        seconds--;
        timer.innerHTML = seconds;
        if (seconds > 0) {
            setTimeout(time, 1000);
        } else {
            // alert("Time's up!");
            return seconds;
        }
    }
    time();
}


startQuiz.addEventListener("click", start);


// old id grabber on click
// trying to get this function to take textContent of whichever id is pressed and return it

// gets id of button pressed
function testClick(clicked_id) {
    var currentValue = clicked_id;
    console.log("current value = " + currentValue);
    var convert = parseInt(currentValue);
    var final = JSON.stringify(convert);
    // console.log("text content of final = " + final.textContent);
    var almost = ("answer" + final);
    console.log("almost there... " + almost);
    // console.log(almost.textContent);
    // console.log("this is my answer + " + final);
    // console.log("THIS IS THE ID " + currentValue);
    // localStorage.setItem("Id", currentValue);
    start(final);
    // console.log("this is the answer you selected: " + currentValue.textContent);
}

// function to show high scores and retain memory of top 10 winners










    // get answerId from function answerClick

    // answer1.addEventListener("click", answerClick);
    // answer2.addEventListener("click", answerClick);
    // answer3.addEventListener("click", answerClick);
    // answer4.addEventListener("click", answerClick);




    // pull id from local storage
    // var test = localStorage.getItem("Id");
    // console.log("New Test ID = " + test);
    // answerId = test.textContent;
    // console.log("answer id = : " + answerId);


    // end of original QuestionAnswer function



    // if correct object is selected, score++, if incorrect, seconds - 5, then go to next question


    // } while (i < 10);




// var currentValue = 0;
// // function called when user clicks an answer button
// function answerClick(clicked_id) {
//     answerId = "";
//     currentValue = clicked_id;
//     console.log("THIS is THE NEW Id:  " + currentValue);
//     event.preventDefault();
//     answerId = answer1.textContent;
//     console.log(answerId);
//     // i++;
//     return answerId;

// }

// function answerClick2(event) {
//     answerId = "";
//     event.preventDefault();
//     answerId = answer2.textContent;
//     console.log(answerId);
//     // i++;
//     return answerId;
// }

// function answerClick3(event) {
//     answerId = "";
//     event.preventDefault();
//     answerId = answer3.textContent;
//     console.log(answerId);
//     // i++;
//     return answerId;
// }

// function answerClick4(event) {
//     answerId = "";
//     event.preventDefault();
//     answerId = answer4.textContent;
//     console.log(answerId);
//     // i++;
//     return answerId;
// }

// answerId = event.target.parentElement.id; cant get to work


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
