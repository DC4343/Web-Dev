var buttonColours = ["red", "blue", "green", "yellow" ];
var gamePattern = [];
var userClickPattern = [];

var started = false;

var level = 0 ;

//function to detct key is pressed to start game
$(document).keypress(function() {
    if (!started) {
  
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

//to detect which color is pressed
$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickPattern.length-1);
}
);

//to check answer of game pattern and the user format by comparing the alst color clicked by the user with the game pattern last ement of array
function checkAnswer(currentLevel) {
    
    if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
        if (gamePattern.length === userClickPattern.length) {

            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }


    else {
        console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press any key to continue...");
    startOver();
    }
}


//to choose a colour randomly and its the main function
function nextSequence(){

    userClickPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

//To play sound functioin
function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

//to animate when user clicks on
function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
    }
    

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}