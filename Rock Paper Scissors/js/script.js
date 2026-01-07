// let computerMove = '';
let result = '';
let score1 = 0
let score2 = 0
let check = 0
function gameResult() {
  let resultScore1 = score1
  let resultScore2 = score2

  if (resultScore1 === 20) {
    $('#main').show();
    $('#win-result').show();
    $('#lose-result').hide();
  } else if (resultScore2 === 20) {
    $('#main').show();
    $('#win-result').hide();
    $('#lose-result').show();
  }
}



$(document).ready(function () {

  function autoPlay() {
    if (check === 1) {
      let autoPlay1 = Math.floor(1 + Math.random() * 3); // player
      let autoPlay2 = Math.floor(1 + Math.random() * 3); // computer
      let autoPlay1Move = "";
      let autoPlay2Move = "";

      // Map numbers to moves
      const moves = { 1: "Rock", 2: "Paper", 3: "Scissors" };
      autoPlay1Move = moves[autoPlay1];
      autoPlay2Move = moves[autoPlay2];

      // Hide default players
      $('#player').hide();
      $('#computer').hide();

      // Reset all displays first
      $('#rock-hide-1, #paper-hide-1, #scissors-hide-1,' +
        '#rock-hide-2, #paper-hide-2, #scissors-hide-2,' +
        '#rand-rock-hide, #rand-paper-hide, #rand-scissors-hide,' +
        '#rock-tie-img-hide, #rock-win-img-hide, #rock-lose-img-hide'
      ).hide();

      // Show player choice
      if (autoPlay1Move === "Rock") {
        $('#rock-hide-1').show();
      }
      if (autoPlay1Move === "Paper") {
        $('#paper-hide-1').show();
      }
      if (autoPlay1Move === "Scissors") {
        $('#scissors-hide-1').show();
      }

      // Show computer choice
      if (autoPlay2Move === "Rock") {
        $('#rock-hide-2').show();
      }
      if (autoPlay2Move === "Paper") {
        $('#paper-hide-2').show();
      }
      if (autoPlay2Move === "Scissors") {
        $('#scissors-hide-2').show();
      }

      // Show random emoji box
      if (autoPlay2Move === "Rock") {
        $('#rand-rock-hide').show();
        $('#rand-hide').hide();
      }
      if (autoPlay2Move === "Paper") {
        $('#rand-paper-hide').show();
        $('#rand-hide').hide();
      }
      if (autoPlay2Move === "Scissors") {
        $('#rand-scissors-hide').show();
        $('#rand-hide').hide();
      }

      // Decide winner
      if (autoPlay1Move === autoPlay2Move) {
        // Tie
        $('#rock-tie-img-hide').show();
        $("#tie-sound")[0].play();
      } else if (
        (autoPlay1Move === "Rock" && autoPlay2Move === "Scissors") ||
        (autoPlay1Move === "Paper" && autoPlay2Move === "Rock") ||
        (autoPlay1Move === "Scissors" && autoPlay2Move === "Paper")
      ) {
        // Player wins
        score1++;
        $('#win').text(score1);
        $("#win-sound")[0].play();
      } else {
        // Computer wins
        score2++;
        $('#lose').text(score2);
        $("#lose-sound")[0].play();
      }
    }
  }

  let inter = setInterval(autoPlay, 2000);


  $('#game-level').hide();
  $('#main').hide();
  $('#all-vs').hide();
  $('#select-game-level-2').hide();
  $('#select-game-level-3').hide();
  $('.emoji-box').hide();
  $('.move-hides').hide();
  $('.pause-options').hide();

  $('#start-button').click(function () {
    $('#start').hide();
    $('#game-page').show();
    $('#game-level').show();
  })
  // firstGameOptions
  $('#next-1').click(function () {
    $('#select-game-level-1').hide();
    $('#select-game-level-2').fadeIn();
  })
  $('#back-1').click(function () {
    $('#select-game-level-1').hide();
    $('#select-game-level-2').fadeIn();
  })
  $('#main-menu-1').click(function () {
    $('#game-level').hide();
    $('#game-page').hide();
    $('#start').show();
  })
  $('#game-level-start-1').click(function () {
    $('#game-level').hide();
    $('#all-vs').show();
    $('#start').hide();
    $('#game-page').show(); 
    $('#main').hide();
    score1 = 0;
    score2 = 0;
    $('#win').text(score1);
    $('#lose').text(score2);
  })

  // secondGameOptions
  $('#next-2').click(function () {
    $('#select-game-level-2').hide();
    $('#select-game-level-1').fadeIn();
  })
  $('#back-2').click(function () {
    $('#select-game-level-2').hide();
    $('#select-game-level-1').fadeIn();
  })
  $('#main-menu-2').click(function () {
    $('#game-level').hide();
    $('#game-page').hide();
    $('#start').show();
  })

  // levelOnePauseGame
  $('#pause').click(function () {
    $('#game-level').show();
    $('.pause-options').show();
    $('#all-vs').hide();
    $('#select-game-level-1').hide();
    $('#select-game-level-2').hide();
    $('#select-game-level-3').hide();
  })
  $('#pause-level-restart-1').click(function () {
    $('#game-level').hide();
    $('#all-vs').show();
    $('#player').show();
    $('#computer').show();
    $('#rock-hide-1').hide();
    $('#paper-hide-1').hide();
    $('#scissors-hide-1').hide();
    $('#rock-hide-2').hide();
    $('#paper-hide-2').hide();
    $('#scissors-hide-2').hide();
    $('#rand-rock-hide').hide();
    $('#rand-paper-hide').hide();
    $('#rand-scissors-hide').hide();
    $('#rand-hide').show();
    score1 = 0;
    score2 = 0;
    $('#win').text(score1);
    $('#lose').text(score2);
  })
  $('#pause-level-continue-1').click(function () {
    $('#game-level').hide();
    $('#all-vs').show();
  })
  $('#pause-menu-1').click(function () {
    $('#game-level').show();
    $('.pause-options').hide();
    $('#all-vs').hide();
    $('#select-game-level-1').show();
    $('#select-game-level-2').hide();
    $('#select-game-level-3').hide();
  })
  $('#pause-main-menu-1').click(function () {
    $('#game-level').hide();
    $('#game-page').hide();
    $('#start').show();
  })


  // rockResult
  $('#rock-1').click(function () {
    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      $('#player').hide();
      $('#computer').hide();
      $('#rock-hide-1').show();
      $('#paper-hide-1').hide();
      $('#scissors-hide-1').hide();
      $('#rock-hide-2').show();
      $('#paper-hide-2').hide();
      $('#scissors-hide-2').hide();
      $('#rand-rock-hide').show();
      $('#rand-paper-hide').hide();
      $('#rand-scissors-hide').hide();
      $('#rand-hide').hide();
      $('#rock-tie-img-hide').show();
      $('#rock-win-img-hide').hide();
      $('#rock-lose-img-hide').hide();
      $("#tie-sound")[0].play();
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      $('#player').hide();
      $('#computer').hide();
      $('#rock-hide-1').show();
      $('#paper-hide-1').hide();
      $('#scissors-hide-1').hide();
      $('#rock-hide-2').hide();
      $('#paper-hide-2').show();
      $('#scissors-hide-2').hide();
      $('#rand-rock-hide').hide();
      $('#rand-paper-hide').show();
      $('#rand-scissors-hide').hide();
      $('#rand-hide').hide();
      $('#rock-lose-img-hide').show()
      $('#rock-tie-img-hide').hide();
      $('#rock-win-img-hide').hide();
      score2++
      $('#lose').text(score2);
      $("#lose-sound")[0].play();
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      $('#player').hide();
      $('#computer').hide();
      $('#rock-hide-1').show();
      $('#paper-hide-1').hide();
      $('#scissors-hide-1').hide();
      $('#rock-hide-2').hide();
      $('#paper-hide-2').hide();
      $('#scissors-hide-2').show();
      $('#rand-rock-hide').hide();
      $('#rand-paper-hide').hide();
      $('#rand-scissors-hide').show();
      $('#rand-hide').hide();
      $('#rock-win-img-hide').show();
      $('#rock-tie-img-hide').hide();
      $('#rock-lose-img-hide').hide();
      score1++
      $('#win').text(score1);
      $("#win-sound")[0].play();

    }

  })

  // paperResult
  $('#paper-1').click(function () {
    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      $('#player').hide();
      $('#computer').hide();
      $('#rock-hide-1').hide();
      $('#paper-hide-1').show();
      $('#scissors-hide-1').hide();
      $('#rock-hide-2').show();
      $('#paper-hide-2').hide();
      $('#scissors-hide-2').hide();
      $('#rand-rock-hide').show();
      $('#rand-paper-hide').hide();
      $('#rand-scissors-hide').hide();
      $('#rand-hide').hide();
      $('#paper-tie-img-hide').hide();
      $('#paper-win-img-hide').show();
      $('#paper-lose-img-hide').hide();
      score1++
      $('#win').text(score1);
      $("#win-sound")[0].play();
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      $('#player').hide();
      $('#computer').hide();
      $('#rock-hide-1').hide();
      $('#paper-hide-1').show();
      $('#scissors-hide-1').hide();
      $('#rock-hide-2').hide();
      $('#paper-hide-2').show();
      $('#scissors-hide-2').hide();
      $('#rand-rock-hide').hide();
      $('#rand-paper-hide').show();
      $('#rand-scissors-hide').hide();
      $('#rand-hide').hide();
      $('#paper-tie-img-hide').show();
      $('#paper-win-img-hide').hide();
      $('#paper-lose-img-hide').hide();
      $("#tie-sound")[0].play();
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {

      $('#player').hide();
      $('#computer').hide();
      $('#rock-hide-1').hide();
      $('#paper-hide-1').show();
      $('#scissors-hide-1').hide();
      $('#rock-hide-2').hide();
      $('#paper-hide-2').hide();
      $('#scissors-hide-2').show();
      $('#rand-rock-hide').hide();
      $('#rand-paper-hide').hide();
      $('#rand-scissors-hide').show();
      $('#rand-hide').hide();
      $('#paper-tie-img-hide').hide();
      $('#paper-win-img-hide').hide();
      $('#paper-lose-img-hide').show();
      score2++
      $('#lose').text(score2);
      $("#lose-sound")[0].play();
    }


  })

  // scissorsResult
  $('#scissors-1').click(function () {
    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      $('#player').hide();
      $('#computer').hide();
      $('#rock-hide-1').hide();
      $('#paper-hide-1').hide();
      $('#scissors-hide-1').show();
      $('#rock-hide-2').show();
      $('#paper-hide-2').hide();
      $('#scissors-hide-2').hide();
      $('#rand-rock-hide').show();
      $('#rand-paper-hide').hide();
      $('#rand-scissors-hide').hide();
      $('#rand-hide').hide();
      $('#scissors-tie-img-hide').hide();
      $('#scissors-win-img-hide').hide();
      $('#scissors-lose-img-hide').show();
      score2++
      $('#lose').text(score2);
      $("#lose-sound")[0].play();
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      $('#player').hide();
      $('#computer').hide();
      $('#rock-hide-1').hide();
      $('#paper-hide-1').hide();
      $('#scissors-hide-1').show();
      $('#rock-hide-2').hide();
      $('#paper-hide-2').show();
      $('#scissors-hide-2').hide();
      $('#rand-rock-hide').hide();
      $('#rand-paper-hide').show();
      $('#rand-scissors-hide').hide();
      $('#rand-hide').hide();
      $('#scissors-tie-img-hide').hide();
      $('#scissors-win-img-hide').show();
      $('#scissors-lose-img-hide').hide();
      score1++
      $('#win').text(score1);
      $("#win-sound")[0].play();
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {

      $('#player').hide();
      $('#computer').hide();
      $('#rock-hide-1').hide();
      $('#paper-hide-1').hide();
      $('#scissors-hide-1').show();
      $('#rock-hide-2').hide();
      $('#paper-hide-2').hide();
      $('#scissors-hide-2').show();
      $('#rand-rock-hide').hide();
      $('#rand-paper-hide').hide();
      $('#rand-scissors-hide').show();
      $('#rand-hide').hide();
      $('#scissors-tie-img-hide').show();
      $('#scissors-win-img-hide').hide();
      $('#scissors-lose-img-hide').hide();
      $("#tie-sound")[0].play();
    }

  })


  // win & lose result
  $('.player-move').click(function () {
    gameResult();
  
  })

  $('.button').click(function () {
    if (check === 1) {
      // Stop autoplay
      clearInterval(inter);
      check = 0;
      // Change button text & color
      $('#toggleBtn')
        .text("Start Autoplay")
        .css("background-color", "green");
    } else {
      // Start autoplay
      inter = setInterval(autoPlay, 2000);
      check = 1;
      // Change button text & color
      $('#toggleBtn')
        .text("Stop Autoplay")
        .css("background-color", "red");
    }
    if ("vibrate" in navigator) {
      navigator.vibrate(200); // vibrates for 200ms
    }

    
    // 🔥 Flash animation on every click
    let btn = $('#toggleBtn');
    btn.addClass('flash');
    setTimeout(() => btn.removeClass('flash'), 400);
    btn.addClass('shake');
    setTimeout(() => btn.removeClass('shake'), 400);

    gameResult();
  });

  $('#win-result-main-menu').click(function () {
    $('#game-level').show();
    $('#main').hide();
    $('#game-page').hide();
    $('#start').hide();
  })
  $('#lose-result-main-menu').click(function () {
    $('#game-level').show();
    $('#main').hide();
    $('#game-page').hide();
    $('#start').hide();
  })

})
