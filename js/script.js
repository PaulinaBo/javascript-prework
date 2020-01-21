function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
  if (argMoveId == 2 & 3){
    return 'papier' & 'nożyce'
  }
}

function displayResult(argComputerMove, argPlayerMove){
  console.log('moves:', argComputerMove, argPlayerMove);
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }
  if( argComputerMove == 'papier' && argPlayerMove == ' nożyce'){
    printMessage('Ty wygrywasz!');
  }
  if( argComputerMove == 'nożyce' && argPlayerMove == ' kamień'){
    printMessage('Ty wygrywasz!');
  }
  if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
  }
  if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
  }
  if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
  }
  if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
  }
  if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Ty przegrywasz!');
  }
  if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
  }
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
*/
printMessage('Mój ruch to: ' + computerMove);

else if (playerInput == '2'){
	computerMove = 'papier'
}
else if (playerInput == '3'){
	computerMove = 'nożyce'
}
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);
/*
if(playerInput == '1'){
  playerMove = 'kamień';
}
*/
printMessage('Twój ruch to: ' + playerMove);

else if (playerInput == '2'){
	computerMove = 'papier'
}
else if (playerInput == '3'){
	computerMove = 'nożyce'
}
