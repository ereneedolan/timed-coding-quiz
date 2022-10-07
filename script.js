// DEPENDENCIES (DOM ELEMENTS)
// Button to start the game/new game
// container that container 
    // each character not filled in will be an underscore
// Need another container that will hold the time, scorecard
    // The timer should display the number(seconds) and the words seconds remaining    
    // the scorecard should display headers Player Score and Player Initials

var newGameBtn = document.getElementById("new-game");
var timeCountdown = document.getElementById("time-countdown");   
var gameResetBtn = document.getElementById("game-reset");
var answerBtn = document.querySelectorAll(".answer-buttons")


var newGameBtnCallback = function (event){
    event.stopPropagation();
    countdownRemaining = 60;
}
    

// DATA / STATE
// need a variable to hold our questions
// variable to hold the answer the user selected
// variable to hold the actual timer
// variable to hold the countdown of remaining seconds
// variable to hold initials
// Variable of player's score
// Variable to save score in local storage

var timer = {}; //going to hold the timer passed from the setInterval
var countdownRemaining = 60;

var scoreSaved = {
    
};
 var sectionNum = 0

// FUNCTIONS

function startQuiz (){
    startTimer();
    sectionNum++
    startSlides();
}

function startSlides(){
    for(i=0; i<7; i++){
        document.getElementById("section-"+ i).
        classList.add("hidden")
    }
    document.getElementById("section-"+ sectionNum).
        classList.remove("hidden")
}
 startSlides()

function nextQuestion(event){
    var answer = event.target.dataset.correct;
    //took out of if, else to consolidate/refactor
        sectionNum ++;
        startSlides();
        stopTimer();
    if(answer === "true") {
    }
    else {
        countdownRemaining -= 10;
    }
}

function stopTimer (){
    console.log(sectionNum)
    if (sectionNum === 6){ 
        clearInterval(timer);
    }
}

function startTimer (){
    timeCountdown.textContent=countdownRemaining;
    timer = setInterval(function(){
        countdownRemaining--;
        if(countdownRemaining===0){
            clearInterval(timer);
            localStorage.setItem("", JSON.stringify(scoreSaved));
        }
        timeCountdown.textContent=countdownRemaining;
    }, 1000); 
    //wordDisplay.innerHTML = ""; //code gets executed the first time user navigates to the page/refreshes page
}
var object = JSON.parse(localStorage.getItem("scoreCard"));
if(object !== null){
    scoreSaved = object;
}

function saveHighScore (){
    //grab the initials
    // localStorage.setItem("score", initials+countdownRemaining)
    // when they click the submit button for initials saved high score 

}
function getHighScore (){
    // var highScore = localStorage.getItem("score")
}

newGameBtn.addEventListener("click", startQuiz);
gameResetBtn.addEventListener("click", startQuiz);
answerBtn.forEach(function(button){
    button.addEventListener("click", nextQuestion);
})


//multiple choice selection


// USER INTERACTIONS
// A user can click...
//The user starts the coding quiz by clicking the start button
    // when the user click the start button a timer will start
    // the first question will appear
//When the user answers a question and hits the submit button
    //if the answer is correct the user will get 5 points, a "correct!" message will be displayed and another question will appear  
    // if the answer is incorrect 10 seconds will be subtracted from the clock, a "wrong! message will be displayed and another question will appear
    //the user will get 0 points for a wrong answer
// The user answers as many questions as possible until all questiosn are answered or the time runs out
    // if the timer reaches 0 the game is over
// The user has completed the game either by a win or loss
    // The user can save their initials and their score


// INITIALIZATION