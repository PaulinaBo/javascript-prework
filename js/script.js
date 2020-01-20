let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

printMessage('Mój ruch to: ' + computerMove);

else if (playerInput == '2'){
	computerMove = 'papier'
}
else if (playerInput == '3'){
	computerMove = 'nożyce'
}
