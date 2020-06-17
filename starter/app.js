/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer, winningScore, gamePlaying;

// used to reset the game
resetGame();



// used to roll dices
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying) {
        // Get the random dice number
        var dice = Math.floor(Math.random() * 6) + 1;

        // Display the dice
        document.querySelector('.dice').style.display = 'block';

        // Change the dice image
        var diceDOM = document.querySelector('.dice');
        diceDOM.src = 'dice-' + dice + '.png';

        // calculate the round score and toggle between the two players
        if (dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            togglePlayers();
        }
    }
});



// used to hold round scores
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // update the global score
        scores[activePlayer] += roundScore;
        // update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        // check for winner
        if (scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
        // toggle to next player
        togglePlayers();
        }
    }
});



// used to start a new game
document.querySelector('.btn-new').addEventListener('click', resetGame);



// Function to toggle between players
function togglePlayers(){
    var diceDOM = document.querySelector('.dice');

    // toggle to the second player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
    // Remove the dice image
    diceDOM.style.display = 'none';
    
    // set the round score to zero 
    roundScore = 0;

    // Change the current score or round score on the display
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    // toggle the active class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

// Function to reset game
function resetGame(){

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    winningScore = parseInt(prompt('Enter the winning score for this game'));
    gamePlaying = true;
    
    // Remove the dice image
    document.querySelector('.dice').style.display = 'none';
    
    // Set both the round and the total scores to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';   
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}