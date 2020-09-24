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

// const answer1 = document.getElementById("1");
// const answer2 = document.getElementById("2");
// const answer3 = document.getElementById("3");
// const answer4 = document.getElementById("4");

// attach variables to each id being used
const startQuiz = document.getElementById("start");
const question = document.getElementById("questions");
const scoreId = document.getElementById("scores");
const restart = document.getElementById("restart");
const text = document.getElementById("questionText");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const displayStart = document.getElementById("buttons");
const checker = document.getElementById("checker");
const music = document.getElementById("music");
// var enterName = document.getElementById("nameInput").value;

// correct answers
var cor = 0;

// high score holder
var scores = [];

// Game time
var seconds = 0;
const answers = document.getElementsByClassName("answer");
console.log(answers);


// container for questions to display
var container = [];
var count = 0;

// hide quiz buttons and input
displayStart.style.display = "none";
input.style.display = "none";


function start() {
    seconds = 120;
    count = 0;
    cor = 0;
    // show all buttons
    displayStart.style.display = "block";
    text.style.display = "none";
    startQuiz.style.display = "none";

    // start music
    music.play();

    timer();
    nextQuestion();
}

function nextQuestion() {
    if (seconds > 0 && count < 10) {
        display();
    } else {
        highScore();
    }
}


function display() {
    var letters = ["a", "b", "c", "d"];
    var quesText = questions[count].question;
    question.textContent = quesText;

    for (i = 0; i < answers.length; i++) {
        // iterate through questions with index count
        answers[i].innerText = questions[count]["answer"][letters[i]];
    }
}

// set timeout in a recursive loop
function timer() {
    function time() {
        var timer = document.getElementById("timer");
        console.log(seconds);
        seconds--;
        timer.innerHTML = seconds;
        // stops timer at 0
        if (seconds > 0 && count < 10) {
            // set Timeout - time it waits before running again - while seconds > 0
            setTimeout(time, 1000);
        } else {
            highScore();
        }
    }
    // calls function again after completing
    time();
}


// iterate for i < number of buttons - create event handlers
for (var i = 0; i < answers.length; i++) {
    answers[i].addEventListener("click", function (event) {
        event.preventDefault();
        // targets clicked event - check if correct against question[count] correct answer - add to counter - call next question
        if (event.target.innerText == questions[count]["correct"]) {
            count++;
            cor++;
            checker.textContent = "Correct!";
            nextQuestion();
            // console.log(event.target.innerText == questions[count]["correct"]);
        } else {
            // if wrong - subtract 5 seconds, add to count, call next question
            checker.textContent = "Incorrect!";
            seconds = seconds - 5;
            count++;
            nextQuestion();
            // console.log(event.target.innerText == questions[count]["correct"]);
        }
    })
}

// function to display high scores - save to local storage
function highScore() {
    document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/jsp117/Code-Quiz/master/assets/endbackground.jpg')";
    displayStart.style.display = "none";
    question.textContent = "Game Over";
    input.style.display = "block";
    // localStorage.setItem("score", seconds);
}
function submitName() {
    var name = document.getElementById("nameInput").value;
    // localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("highscores", "Name: " + name + " Score: " + seconds + " Correct Answers: " + cor);
    displayScore();
}

function displayScore() {
    question.textContent = "High Scores";
    input.style.display = "none";
    scores = localStorage.getItem("highscores");
    console.log(scores);
    var li = document.createElement("li");
    var reset = document.createElement("button");
    scoreId.appendChild(li);
    restart.appendChild(reset);
    li.textContent = scores;
    reset.textContent = "Restart";

    // restart function
    reset.addEventListener("click", function (event) {
        event.preventDefault();
        document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/jsp117/Code-Quiz/master/assets/startbackground.jpg')";
        displayStart.style.display = "none";
        li.style.display = "none";
        input.style.display = "none";
        reset.style.display = "none";
        scoreId.style.display = "none";
        questions.textContent = "Final Fantasy X Quiz!";
        text.style.display = "block";
        startQuiz.style.display = "block";
        text.textContent = "Click start to begin the quiz! You will have two minutes to complete and lose 5 seconds for every incorrect answer!";
        
        seconds = 120;
        count = 0;
    })
}

// event listener for start button
startQuiz.addEventListener("click", start);
// event handler for submit button
submit.addEventListener("click", submitName);


