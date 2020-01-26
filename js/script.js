function playGame(playerInput){
  function clearMessages(){

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  function getMoveName(moveName) {
    if(moveName == 1){
      return 'kamień';
    } else if(moveName == 2) {
      return 'papier';
    } else {
      return 'nożyce';
    }
  }

  function displayResult(argComputerMove, argPlayerMove) {
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

  let computerMove = getMoveName(randomNumber);

  var playerMove = prompt('Podaj ruch');

  displayResult(computerMove, playerMove);

  document.getElementById('play-rock').addEventListener('click', function(playerInput){
  printMessage('Wybrałeś kamień');
  });
  document.getElementById('play-paper').addEventListener('click', function(playerInput){
  printMessage('Wybrałeś papier');
  });
  document.getElementById('play-scissors').addEventListener('click', function(playerInput){
  printMessage('Wybrałeś nożyce');
  });

}
}
