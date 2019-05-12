
//RANDOM GENERATED TARGET NUMBER

  var matchNum = Math.floor(Math.random() * ((120-19)+1) + 19);
  var result_p = document.querySelector(".result > p");
  var win = 0;
  var loss = 0;

  $("#guess-num").text(matchNum);
  

// GEM STONE NUMBERS
   var counter = 0;
   var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//ADDING VALUE TO GEM STONES
  for (var i = 0; i < numberOptions.length; i++) {
    var imageGem = $(".gem");
    imageGem.attr("data-gemValue", numberOptions[i]);
  }

// CLICK EVENT
  $(".gem").on("click", function() {
  var gemValue = ($(this).attr("data-gemValue"));
  gemValue = parseInt(gemValue);
  counter += gemValue;

//results will display down here & update win/loss
$("#your-num").text(counter);

    if (counter === matchNum) {
        result_p.innerHTML = "You won! Good job!";
        $("#win-counter").text(win++);
    }

    else if (counter >= matchNum) {
        result_p.innerHTML = "Sorry, you lost this round.";
        $("#loss-counter").text(loss++);

    }

  });