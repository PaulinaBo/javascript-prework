{const playGame = function (playerInput){
  clearMessages();



  const randomNumber = Math.floor(Math.random() * 3 + 1);

  const getMoveName = function(moveName){
    if(moveName == 1){
      return 'kamień';
    } else if(moveName == 2) {
      return 'papier';
    } else {
      return 'nożyce';
    }
  }

  const displayResult = function (argComputerMove, argPlayerMove) {
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    }
    if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
      printMessage('Ty przegrywasz!');
    }
    if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
      printMessage('Ty przegrywasz!');
    }
    if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
      printMessage('Ty przegrywasz!');
    }
    if( argComputerMove == argPlayerMove ){
      printMessage('Remis');
    }
    if( argPlayerMove != 'nożyce' && argPlayerMove != 'kamień' && argPlayerMove != 'papier' ){
      printMessage('Nieznany ruch!');
    }
  }

  const computerMove = getMoveName(randomNumber);

  const playerMove = getMoveName(playerInput);

  displayResult(computerMove, playerMove);

}
document.getElementById('play-rock').addEventListener('click', function(){
  playGame('1');
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame('2');
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame('3');
});
}
