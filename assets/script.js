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
   // var q1 = console.log(q[number].question);
    var q1 = questions.innerHTML = (q[number].question);
    var a1 = questions.innerHTML = (q[number].answers);
   // var a1 = console.log(q[number].answers);
    number ++;
};    


// timer

// var timeleft = 60;
// var gameTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(gameTimer);
//   }
//   document.timer.value = 60 - timeleft;
//   timeleft -= 1;
// }, 1000);



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
