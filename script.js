// declarations
var displayStart = document.getElementById("buttons");
var startQuiz = document.getElementById("start");
var question = document.getElementById("questions");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var qa = {
    questions: ["question 1", "question 2", "question 3"],
    answers: ["answer 1", "answer 2", "answer 3", "answer 4", "answer 5", "answer 6", "answer 7", "answer 8", "answer 9",],
    correct: ["correct 1", "correct 2", "correct 3"];
};
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
    do {
        let q = 0;
        let a = 0;
        question.textContent = qa.questions[q];
        answer1.textContent = qa.answers[a];
        answer2.textContent = qa.answers[a + 1];
        answer3.textContent = qa.answers[a + 2];
        answer4.textContent = qa.correct[a + 3];
        q = q + 1;
        a = a + 4;

        


        // if correct object is selected, score++, if incorrect, seconds - 5, then go to next question


    } while (i < 10)
    return score;
}


// function called when user clicks an answer button
function answerClick() {

}











startQuiz.addEventListener("click", start);
answer1.addEventListener("click", answerClick);
answer2.addEventListener("click", answerClick);
answer3.addEventListener("click", answerClick);
answer4.addEventListener("click", answerClick);

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
