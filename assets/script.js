var timer = document.querySelector('.timer');
var sec = document.querySelector('.timer-sec');
var questions = document.querySelector('.questions');
var start = document.querySelector('#start-button');

// stored questions
var q = [
    {
        question: "what is your favorite taco?",
        answers: [
            {text: "lengua", correct: false},
            {text: "beef", correct: false},
            {text: "lengucheesea", correct: true},
            {text: "chicken", correct: false}
        ]
    }, 
    {
        question: "what is your favorite car?",
        answers: [
            {text: "honda", correct: false},
            {text: "teslsa", correct: false},
            {text: "toyota", correct: false},
            {text: "rivian", correct: true}
        ]
    },
    {
        question: "what is your favorite show?",
        answers: [
            {text: "regular show", correct: false},
            {text: "adventure time", correct: false},
            {text: "rick and morty", correct: true},
            {text: "one piece", correct: false}
        ]
    },
    {
        question: "what is your favorite thing to do?",
        answers: [
            {text: "sports", correct: false},
            {text: "relax", correct: false},
            {text: "video games", correct: true},
            {text: "movies", correct: false}
        ]
    }
]
// user sees strtBtn , click start
    // document.addEventListener
var strtBtn = document.createElement("button");
strtBtn.innerHTML = ('Begin!');
start.appendChild(strtBtn);

strtBtn.addEventListener("click", strtQuiz);
// user sees  question w/ 4 possible answers
    // .innerText .innerHTML / dynamic HTML generation / class hide - remove hide class

function strtQuiz (event) {
    event.preventDefault();
    var number = 0;
    var q1 = console.log(q[number].question);
    var q1 = document.getElementById('questions').innerHTML(q[0]);
    var a1 = console.log(q[number].answers);
    number ++;
};    



// this adds the question to the div
// document.getElementById('questions').innerHTML = ();


// console.log(q[0].question);
// console.log(q[0].answers)

// select an answer
// correct or incorrect message appears
// time has run out or questions have ended
// user enters initials
// score is stored 
// restart btn to play again

// var number = 0;

// console.log(q[number].question);

// number ++;

// console.log(q[number].question);
