var wins = 0;
var losses = 0;
// result is the total score added together
var result = 0;
var target;
var started = false;
var card1;
var card2;
var card3;
var card4;

$(document).ready(function(){
    startGame();
    $("#card-1").on("click", function(){
        result += card1;
        $("#result-num").text(result);
        $("#win-lose-message").text("");
        setWinLose();
    });
    $("#card-2").on("click", function(){
        result += card2;
        $("#result-num").text(result);
        $("#win-lose-message").text("");
        setWinLose();
    });
    $("#card-3").on("click", function(){
        result += card3;
        $("#result-num").text(result);
        $("#win-lose-message").text("");
        setWinLose();
    });
    $("#card-4").on("click", function(){
        result += card4;
        $("#result-num").text(result);
        $("#win-lose-message").text("");
        setWinLose();
    });
});

// Starts game
function startGame(){
    //starts the game by setting it to true
    started = true;

    //randomly generates a number at start of game
    //Number 120 since 1-6 can easily be used to go into it
    target = Math.round(Math.random() * 121);
    //set condition that the number will always be over 20
    while (target < 19) {
        target = Math.round(Math.random() * 121);
    }
    $("#target-num").text(target);

    // Prevents cards from having the same number
    while (
        card1 === card2 ||
        card1 === card3 ||
        card1 === card4 ||
        card2 === card3 ||
        card2 === card4 ||
        card3 === card4
    ) {
        card1 = Math.floor(Math.random() * 12) + 1;
        card2 = Math.floor(Math.random() * 12) + 1;
        card3 = Math.floor(Math.random() * 12) + 1;
        card4 = Math.floor(Math.random() * 12) + 1;
    }
    //starting a game resets the target total back to zero
    result = 0;
};

//Sets win/loss condition so that you have to have the same numbers to win
function setWinLose() {
    if (result === target){
        wins++;
        $("#win-num").text("Wins: " + wins);
        $("#win-lose-message").html("<h3>Congrats on your win!!</h3>");
        startGame();
    }
    else if (result > target) {
        losses++;
        $("#losses-num").text("Losses: " + losses);
        $("#win-lose-message").html("<h3>Well that sucks!</h3>");
        startGame();
    };
};