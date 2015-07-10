$(document).ready (function(){

$('#checking_deposit').on('click', function() {
    var deposit =  parseInt($('#checking_input').val());
    var checking = parseInt($('#cBalance').text().replace('$', ''));
    var balance = '$' + (deposit + checking)


    $('#cBalance').text(balance);
    $('#checking_input').val('');

})


$('#checking_withdraw').on('click', function(){

  var withdraw =  parseInt($('#checking_input').val());
  var checking = parseInt($('#cBalance').text().replace('$', ''));
  var savings =  parseInt($('#sBalance').text().replace('$', ''));
  var balance = '$' + (checking - withdraw);
  var totalBalance = checking + savings

  if( checking - withdraw > 0) {
    $('#cBalance').text(balance);
  }

  else if (totalBalance - withdraw > 0){
    var overDraft = withdraw - checking
    $('#cBalance').text('$0')
    $('#cBalance').addClass('zero');
    var newSavings = '$' + (savings-overDraft);
    $('#sBalance').text(newSavings);
  }

})

$('#savings_deposit').on('click', function() {
    sInput =  $('#savings_input');
    sBalance = $('.balance').eq(1)

    newSavings = parseFloat(sBalance.html().substr(1)) + parseInt(sInput.val())

    sBalance.html('$' + newSavings)
    currentSavings = sBalance.html();
    $(sBalance).removeClass('zero')
    sInput.val('')
})

$('#savings_withdraw').on('click', function() {
    sInput =  $('#savings_input');
    sBalance = $('.balance').eq(1)


    newSavings = parseFloat(sBalance.html().substr(1)) - parseInt(sInput.val())
  if(newSavings > 0){
    sBalance.html('$' + newSavings)
    currentSavings = sBalance.html();
    sInput.val('')
  }
  if (newSavings === 0){
    sBalance.html('$' + newSavings)
    sBalance.addClass('zero')
    sInput.val('');
  }
  })
})
