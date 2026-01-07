let switched = 1
let operator = false
let minus = false

function answer(solve) {
  let result = eval(solve);
  return result
}
function switchSolve(a, b) {
  switched = switched === 1 ? 2 : 1;
  return switched
}

function quadraticformular(a, b, c) {
  let negative = -b
  let square = b * b
  let multiply = 4 * a * c
  let sqrt = Math.sqrt(square - multiply)
  let add = negative + sqrt
  let division = 2 * a
  let x1 = add / division

  let x2 = (negative - sqrt) / division
  let result = 'X1 =' + x1 + "<br>" + 'X2 =' + x2
  return result
}



$(document).ready(function () {
  $('.num').click(function () {
    let keys = parseInt($(this).val())
    let currentScreenValue = $('.display').val()
    $('.display').val(currentScreenValue + keys)
    operator = false
    minus = false
  })

  $('.operators').click(function () {
    let operators = $(this).val()
    let currentScreenValue = $('.display').val()
    if (currentScreenValue !== '' && !operator) {
      $('.display').val(currentScreenValue + operators)
      operator = true
      minus = false
    }
  })

  $('.minus').click(function () {
    let operators = $(this).val()
    let currentScreenValue = $('.display').val()
    if (!minus) {
      $('.display').val(currentScreenValue + operators)
      operator = true
      minus = true
    }
  })

  $('.clear').click(function () {
    $('.display').val("")
  });
  $('.delete').click(function () {
    let currentScreenValue = $('.display').val()
    $('.display').val(currentScreenValue.slice(0, -1))
  });

  $(".equalto").click(function () {
    let currentScreenValue = $('.display').val()
    if (switched === 1) {
      $('.display').val(answer(currentScreenValue))
    } else {
      let numA = parseInt($('#a').val());
      let numB = parseInt($('#b').val());
      let numC = parseInt($('#c').val());
      $('#eqin').html(quadraticformular(numA, numB, numC)).show()
      $('#eqinputs').fadeOut()
    }
  })

  $('#eqin').click(function () {
    $('#eqin').fadeOut()
    $('#eqinputs').fadeIn()
  })

  $('#footer').click(function () {
    $('.all').slideToggle();
    $('#input').slideToggle();
    switched = switchSolve()
  })
  $(".cal").click(function () {
    $('#calculator').show();
  })
  $('#minX').click(function () {
    $('#calculator').hide();
  })




  let totalMoney = 0;


  $("#start").click(function () {
    $("#welcomepage").hide();
    $('#all').show();
    $("#question1").show();
    $(".moneyBox").text(`$${totalMoney}`);

    let timeLeft = 120; // Timer duration in seconds

  // Start the timer
  const countdown = setInterval(function () {
    timeLeft--;
    $("#timer").text(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(countdown);
      $('#result').fadeIn();
      $("#question1").fadeOut();
      $("#question2").fadeOut();
      $("#question3").fadeOut();
      $("#question4").fadeOut();
      $("#question5").fadeOut();
      $("#question6").fadeOut();
      $("#question7").fadeOut();
      $("#question8").fadeOut();
      $("#question9").fadeOut();
      $("#question10").fadeOut();
      $('#timer').hide();
      $(".won").text(`$${totalMoney}`)
      // $("#answer, #submit").prop("disabled", true);
    }
  }, 1000);
  })
  $('#next1').click(function () {
    $('#question2').fadeIn();
    $('#question1').fadeOut();
  })
  $('#next2').click(function () {
    $('#question3').fadeIn();
    $('#question2').fadeOut();
  })
  $('#next3').click(function () {
    $('#question4').fadeIn();
    $('#question3').fadeOut();
  })
  $('#next4').click(function () {
    $('#question5').fadeIn();
    $('#question4').fadeOut();
  })
  $('#next5').click(function () {
    $('#question6').fadeIn();
    $('#question5').fadeOut();
  })
  $('#next6').click(function () {
    $('#question7').fadeIn();
    $('#question6').fadeOut();
  })
  $('#next7').click(function () {
    $('#question8').fadeIn();
    $('#question7').fadeOut();
  })
  $('#next8').click(function () {
    $('#question9').fadeIn();
    $('#question8').fadeOut();
  })
  $('#next9').click(function () {
    $('#question10').fadeIn();
    $('#question9').fadeOut();
  })

  

   // Variable to track total money earned

  // Handle click event for options
  $(".option").on("click", function () {
    const isCorrect = $(this).data("correct"); // Get the data-correct attribute
    let value = $(this).val()

    // Remove any existing highlights
    $(".option").removeClass("correct incorrect");

    // Highlight the selected option
    if (isCorrect) {
      $(this).addClass("correct"); // Highlight green for correct answer
    } else {
      $(this).addClass("incorrect"); // Highlight red for incorrect answer
    }
    
    if (isCorrect) {
      totalMoney += 100; // Add $100 for correct answers
      $(".moneyBox").text(`$${totalMoney}`); // Update the moneyBox
    } else {
      totalMoney -= 50;
      $(".moneyBox").text(`$${totalMoney}`); // Update the moneyBox
    }
    
      // Disable all options in the current question
      $(this).parent().find(".opt").css("pointer-events", "none");

      // Highlight the selected option
      $(this).css("background-color", "#d3d3d3");
    });

    $(".end").on("click", function () {
      console.log("ccc")
        if (totalMoney >= 1000) {
          $('#result2').fadeIn();
          $('#result').fadeOut();
          $('#question10').fadeOut();
          $('#timer').hide();
          $(".won").text(`$${totalMoney}`)
        } else if  (totalMoney <= 1000) {
          $('#result').fadeIn();
          $('#result2').fadeOut();
          $('#question10').fadeOut();
          $('#timer').hide();
          $(".won").text(`$${totalMoney}`)
        }
    
        }); 
});