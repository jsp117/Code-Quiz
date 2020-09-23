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
        correct: "c"
    },
    {
        question: "What is the name of Tidus' father?",
        answer: {
            a: "Jecht",
            b: "Wakka",
            c: "Auron",
            d: "Kimahri"
        },
        correct: "a"
    },
    {
        question: "What is the name of Seymour's Aeon/mother?",
        answer: {
            a: "Rheya",
            b: "Magus",
            c: "Yunalesca",
            d: "Anima"
        },
        correct: "d"
    },
    {
        question: "What is the name of the sport popular in Zanarkand?",
        answer: {
            a: "Beigoma",
            b: "Blitzball",
            c: "Otedama",
            d: "Baseball"
        },
        correct: "b"
    },
    {
        question: "What were the name's of Yuna's first three guardians?",
        answer: {
            a: "Seymour Chappu, and Jyscal",
            b: "Auron, Jecht, and Braska",
            c: "Wakka, Lulu, and Kimahri",
            d: "Tidus, Rikku, and Paine"
        },
        correct: "c"
    },
    {
        question: "What race is Rikku?",
        answer: {
            a: "Japanese",
            b: "Spira",
            c: "Al Bhed",
            d: "Besaid"
        },
        correct: "c"
    },
    {
        question: "What are the Al Bhed hated for?",
        answer: {
            a: "Creating and using machines",
            b: "Their religion",
            c: "Hunting sacred monsters",
            d: "War with Spira"
        },
        correct: "a"
    },
    {
        question: "What is the name of Tidus' mysterious friend/mentor?",
        answer: {
            a: "Wakka",
            b: "Ifrit",
            c: "Jecht",
            d: "Auron"
        },
        correct: "d"
    },
    {
        question: "What is the name of the monster destroying Spira?",
        answer: {
            a: "Pride",
            b: "Gluttony",
            c: "Sin",
            d: "Bahamut"
        },
        correct: "c"
    },
    {
        question: "What is Sin's true identity?",
        answer: {
            a: "Sir Braska",
            b: "Jecht",
            c: "Yunalesca",
            d: "Auron"
        },
        correct: "b"
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
var timeElapsed = 0;
var seconds = 180;

// new
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
    display(count);
    count++;
}


function display(count) {
    


    // var quesText = questions[i].question;

    for (let i = 0; i < questions.length; i++) {
        let answerArray = questions[i].question;
        for (let j = 0; j < answerArray.length; j++) {
            console.log(answerArray[j]);
        }
    }



    // var ansText = questions[i].answer[i];
    // console.log(ansText);
    console.log(question);
    question.textContent = quesText;

}

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