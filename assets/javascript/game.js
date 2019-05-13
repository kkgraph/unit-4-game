
//VARIABLES
  var matchNum = Math.floor(Math.random() * ((120-19)+1) + 19);
  var result_p = document.querySelector(".result > p");
  var win = 0;
  var loss = 0;
  var images = ["assets/images/green.png", "assets/images/pink.png", "assets/images/red.png", "assets/images/white.png"];
  var counter = 0;
  var numberOptions = [4, 12, 7, 9]

//TARGET NUMBER
  $("#guess-num").text(matchNum);

// GEM STONE NUMBERS
for (var i = 0; i < numberOptions.length; i++) {
  var imageGem = $("<img>");
  imageGem.addClass("gem");
  imageGem.attr("src", images[i]);
  imageGem.attr("data-gemValue", numberOptions[i]);
  $(".gems").append(imageGem);
}

// CLICK EVENT TO START GAME
$(".gem").on("click", function() {
  var gemValue = ($(this).attr("data-gemValue"));
  gemValue = parseInt(gemValue);
  counter += gemValue;

//RESULT COUNTERS
$("#your-num").text(counter);


//WIN AND LOSS UPDATE + YOU WON / LOST UPDATE
    if (counter === matchNum) {
        result_p.innerHTML = "🎯 You won! Good job!";
        $("#win-counter").text(win++);
    }

    else if (counter >= matchNum) {
        result_p.innerHTML = " 👾 Sorry, you lost this round. ";
        $("#loss-counter").text(loss++);
    }
  });

// function gameReset() {
//     myGame.round.guessesLeft = 0;
//     hasLost(myGame.round.guessesLeft);

//     if (isEndOfRound(myGame.round)) {
//         myGame = startNewRound(myGame);
//         myGame.round = setupRound(randomWord(gameWords));
//     }
// }