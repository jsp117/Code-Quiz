// declare array of objects
const questions = [
    {
        question: "What was the name of Yuna's first Aeon?",
        answer: {
            a: "Ifrit",
            b: "Ixion",
            c: "Valefor",
            d: "Bahamut"
        },
        correct: "Valefor"
    },
    {
        question: "What is the name of Tidus' father?",
        answer: {
            a: "Jecht",
            b: "Wakka",
            c: "Auron",
            d: "Kimahri"
        },
        correct: "Jecht"
    },
    {
        question: "What is the name of Seymour's Aeon/mother?",
        answer: {
            a: "Rheya",
            b: "Magus",
            c: "Yunalesca",
            d: "Anima"
        },
        correct: "Anima"
    },
    {
        question: "What is the name of the sport popular in Zanarkand?",
        answer: {
            a: "Beigoma",
            b: "Blitzball",
            c: "Otedama",
            d: "Baseball"
        },
        correct: "Blitzball"
    },
    {
        question: "What were the name's of Yuna's first three guardians?",
        answer: {
            a: "Seymour Chappu, and Jyscal",
            b: "Auron, Jecht, and Braska",
            c: "Wakka, Lulu, and Kimahri",
            d: "Tidus, Rikku, and Paine"
        },
        correct: "Wakka, Lulu, and Kimahri"
    },
    {
        question: "What race is Rikku?",
        answer: {
            a: "Japanese",
            b: "Spira",
            c: "Al Bhed",
            d: "Besaid"
        },
        correct: "Al Bhed"
    },
    {
        question: "What are the Al Bhed hated for?",
        answer: {
            a: "Creating and using machines",
            b: "Their religion",
            c: "Hunting sacred monsters",
            d: "War with Spira"
        },
        correct: "Creating and using machines"
    },
    {
        question: "What is the name of Tidus' mysterious friend/mentor?",
        answer: {
            a: "Wakka",
            b: "Ifrit",
            c: "Jecht",
            d: "Auron"
        },
        correct: "Auron"
    },
    {
        question: "What is the name of the monster destroying Spira?",
        answer: {
            a: "Pride",
            b: "Gluttony",
            c: "Sin",
            d: "Bahamut"
        },
        correct: "Sin"
    },
    {
        question: "What is Sin's true identity?",
        answer: {
            a: "Sir Braska",
            b: "Jecht",
            c: "Yunalesca",
            d: "Auron"
        },
        correct: "Jecht"
    }];

// attach variables to each id being used
const displayStart = document.getElementById("buttons");
const startQuiz = document.getElementById("start");
const question = document.getElementById("questions");
const answer1 = document.getElementById("1");
const answer2 = document.getElementById("2");
const answer3 = document.getElementById("3");
const answer4 = document.getElementById("4");
var text = document.getElementById("questionText");
var seconds = 180;

var answers = document.getElementsByClassName("answer");
// console.log(answers);


// container for questions to display
var container = [];
var count = 0;
// hide quiz buttons
displayStart.style.display = "none";


function start(check) {
    // show all buttons
    displayStart.style.display = "block";
    text.style.display = "none";
    document.getElementById("start").style.display = "none";
    timer();
    nextQuestion();
}

function nextQuestion() {
    if(seconds == 0){
        alert("Time's up!");
        highScore();
    }
    if(count == 10){
        alert("Good job!");
        highScore();
    }
    display();

}


function display() {

    var quesText = questions[count].question;
    question.textContent = quesText;

    answer1.innerText = questions[count]["answer"]["a"];
    answer2.innerText = questions[count]["answer"]["b"];
    answer3.innerText = questions[count]["answer"]["c"];
    answer4.innerText = questions[count]["answer"]["d"];

}

// set timeout in a recursive loop
function timer() {
    function time() {
        var timer = document.getElementById("timer");
        // timeElapsed++;
        seconds--;
        timer.innerHTML = seconds;
        if (seconds > 0) {
            // time it waits before running again
            setTimeout(time, 1000);
        } else {
            // alert("Time's up!");
            return seconds;
        }
    }
    // calls function again after completing
    time();
}


// iterate through array - list out all event handlers and return to start
for (var i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function (event) {
        event.preventDefault();
        // check correct answer - add to counter - call next question
        if (event.target.innerText == questions[count]["correct"]) {
            count++;
            nextQuestion();
            // console.log(event.target.innerText == questions[count]["correct"]);
        } else {
            // if wrong - subtract 5 seconds, add to count, call next question
            seconds = seconds - 5;
            count++;
            nextQuestion();
            // console.log(event.target.innerText == questions[count]["correct"]);
        }
    })
}

// function to display high scores - save to local storage
function highScore(){
    displayStart.style.display = "none";
    text.style.display = "block";
    text.textContent = "Congratulations! Here are the high scores: ";
    question.textContent = "High Scores";
    var score = seconds;

}



startQuiz.addEventListener("click", start);