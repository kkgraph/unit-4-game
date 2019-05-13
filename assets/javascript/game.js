
//variables
  var result_p = document.querySelector(".result > p");
  var wins = 0;
  var losses = 0;
  var yourNum = 0;
  var numberOptions = [4, 12, 7, 9]
  var crystals = 0;

//adding numbers to class
$("#red").addClass("red");
$("#green").addClass("green");
$("#white").addClass("white");
$("#pink").addClass("pink");

//so it can start and reset
function Game(){
  counter = 0;
  randomNumber = Math.floor(Math.random() * 101) + 19;
  $("#guess-num").text(randomNumber);
  console.log("randomNumber");
  red = Math.floor(Math.random() * 11) + 1;
  green = Math.floor(Math.random() * 12) + 1;
  white = Math.floor(Math.random() * 12) + 1;
  pink = Math.floor(Math.random() * 12) + 1;

}

//starting the game 
Game();
//generating number for red
    $("#red").click(function (){
        yourNum += red;
        console.log(yourNum);
    $("#your-num").html(yourNum);
            Win();
            Lost();
        });

//number for green
    $("#green").on('click', function (){
        $("#your-num").html(green+counter);
        yourNum += green;
        console.log(yourNum);
    $("#your-num").html(yourNum);
        console.log("green");
        Win();
        Lost();
        });
//white numbers
    $("#white").on('click', function (){
        $("#your-num").html(white+counter);
        yourNum += white;
        console.log(yourNum);
    $("#your-num").html(yourNum); 
    Win();
    Lost();
        });
//pink number
        $("#pink").on('click', function (){
          yourNum += pink;
            console.log(yourNum);
        $("#your-num").html(yourNum);
        Win();
        Lost();
        });
    

//restart the game and winning
    function Win(){
      if (randomNumber === yourNum){
         result_p.innerHTML = "🎯 You won! Good job!";
  
          wins++;
          $("#win-counter").html(wins);
          yourNum = 0;
          $("#your-num").html(0);
  
          Game()
      }
  } 

  //loss function 
  function Lost(){
    if (randomNumber < yourNum){
        result_p.innerHTML = " 👾 Sorry, you lost this round. ";
        // $("#your-num").html(0);

        losses++;
        $("#loss-counter").html(losses);
        yourNum = 0;
        $("#your-num").html(0);

        Game()
    }
  };


