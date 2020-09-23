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
const startQuiz = document.getElementById("start");
const question = document.getElementById("questions");
const text = document.getElementById("questionText");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const displayStart = document.getElementById("buttons");
const answer1 = document.getElementById("1");
const answer2 = document.getElementById("2");
const answer3 = document.getElementById("3");
const answer4 = document.getElementById("4");
const checker = document.getElementById("checker");

// Game time
var seconds = 5;
const answers = document.getElementsByClassName("answer");
console.log(answers);


// container for questions to display
var container = [];
var count = 0;

// hide quiz buttons and input
displayStart.style.display = "none";
input.style.display = "none";


function start() {
    // show all buttons
    displayStart.style.display = "block";
    text.style.display = "none";
    document.getElementById("start").style.display = "none";
    timer();
    nextQuestion();
}

function nextQuestion() {
    if (seconds >= 1) {
        display();
    } else {
        highScore();
    }
}


function display() {
    var letters = ["a", "b", "c", "d"];
    var quesText = questions[count].question;
    question.textContent = quesText;
    // // iterate through questions with index count
    // questions[count][answers][answer index]
    // answer1.innerText = questions[count]["answer"]["a"];
    // answer2.innerText = questions[count]["answer"]["b"];
    // answer3.innerText = questions[count]["answer"]["c"];
    // answer4.innerText = questions[count]["answer"]["d"];

    // test button text filler
    for (i = 0; i < answers.length; i++) {
        answers[i].innerText = questions[count]["answer"][letters[i]];
    }
}

// set timeout in a recursive loop
function timer() {
    function time() {
        var timer = document.getElementById("timer");
        // timeElapsed++;
        seconds--;
        timer.innerHTML = seconds;
        // stops timer at 0
        if (seconds > 0) {
            // set Timeout - time it waits before running again
            setTimeout(time, 1000);
        } else {
            return;
        }
    }
    // calls function again after completing
    time();
}


// iterate answer length - create event handlers = number of answers
for (var i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function (event) {
        event.preventDefault();
        // targets clicked event - check if correct against question[count] correct answer - add to counter - call next question
        if (event.target.innerText == questions[count]["correct"]) {
            count++;
            checker.textContent = "Correct!";
            nextQuestion();
            // console.log(event.target.innerText == questions[count]["correct"]);
        } else {
            // if wrong - subtract 5 seconds, add to count, call next question
            checker.textContent = "Incorrect!";
            seconds = seconds - 5;
            count++;
            if (seconds <= 0) {
                alert("Time's up!");
                highScore();
            }
            nextQuestion();
            // console.log(event.target.innerText == questions[count]["correct"]);
        }
    })
}

// function to display high scores - save to local storage
function highScore() {
    displayStart.style.display = "none";

    // question.style.display = "none";
    if (seconds > 0) {
        text.style.display = "block";
        text.textContent = "Congratulations! Please enter your name: ";
    } else {
        text.style.display = "block";
        text.textContent = "Nice try! Please Enter your name: ";
    }
    
    question.textContent = "Game Over";
    input.style.display = "block";
    var score = seconds;
    console.log(name);
    localStorage.setItem("score", score);
    var name = input.textContent;
    // error checking for name
    if (name === "" || name === null) {
        alert("You must enter at least one character to save your score.");
        highScore();
    } else {
        localStorage.setItem("name", name);
        displayScore();
    }
}

// create display score function
function displayScore() {
    
    var create = document.createElement("div");
    text.appendChild(create);
    // create.setAttribute("style", "text-align: center; font-size: 50px;");
    // var winners = JSON.parse(localStorage.getItem("name", "score"));
    // console.log(winners);
    create.textContent = "1st Place: " + name + " Score: " + score;
}



// event listener for start button
startQuiz.addEventListener("click", start);
// event handler for submit button
submit.addEventListener("submit", displayScore);