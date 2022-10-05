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
    wins: 0,
    losses: 0,
    totalGames: 0
};

// FUNCTIONS

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

    wordDisplay.innerHTML = ""; //code gets executed the first time user navigates to the page/refreshes page
var object = JSON.parse(localStorage.getItem("scoreCard"));
if(object !== null){
    scoreSaved = object;
}



newGameBtn.addEventListener("click", );
gameResetBtn.addEventListener("click", );
document.addEventListener("keypress", keypressCallback);

// USER INTERACTIONS
// A user can click...
//The user starts the coding quiz by clicking the start button
    // when the user click the start button a timer will start
    // the first question will appear
//When the user answers a question
    //if the answer is correct the user will get 5 points, a "correct!" message will be displayed and another question will appear  
    // if the answer is incorrect 10 seconds will be subtracted from the clock, a "wrong! message will be displayed and another question will appear
    //the user will get 0 points for a wrong answer
// The user answers as many questions as possible until all questiosn are answered or the time runs out
    // if the timer reaches 0 the game is over
// The user has completed the game either by a win or loss
    // The user can save their initials and their score


// INITIALIZATION