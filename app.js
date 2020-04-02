/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,dice;
init();
//roll btn work
document.querySelector('.btn-roll').addEventListener('click',function(){ //ananymous function
  
  //1.Random number
  dice=Math.floor(Math.random()*6)+1;
  
  //2.Display the result
  var diceDOM=document.querySelector('.dice');
  diceDOM.style.display='block';
  diceDOM.src='dice-'+dice+'.png';   //displaying the pic of dice with the random numbers
  
  //3.Upadate the round score if the rolled no is not 1
  if(dice !== 1){
      //add score
      roundScore += dice;
      document.querySelector('#current-'+activePlayer).textContent=roundScore;
      
  }
  else{
      nextPlayer();
  }    
});
//hold btn
document.querySelector('.btn-hold').addEventListener('click',function(){
    
  //add current score to global score
  scores[activePlayer] += roundScore;

  //update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  //check if player won the game
  if(scores[activePlayer] >= 100){
   document.querySelector('#name-'+activePlayer).textContent='WINNER YAY!';
   document.querySelector('.dice').style.display = 'none';
   document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
   document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('winner');
   
  }
 else{
  nextPlayer();
 }
});

function nextPlayer(){
 //next player
 activePlayer === 0 ? activePlayer = 1 :activePlayer = 0;
 roundScore = 0;

 document.getElementById('current-0').textContent='0';
 document.getElementById('current-1').textContent='0';

 
 //document.querySelector('.player-0-panel').classList.remove('active');  //add and remove the active status of player
 //document.querySelector('.player-1-panel').classList.add('active');

 document.querySelector('.player-0-panel').classList.toggle('active'); //can use toggle 
 document.querySelector('.player-1-panel').classList.toggle('active');
 
 document.querySelector('.dice').style.display='none'; //remove the display of dice after 1 is generated
  
}
//new game btn 
document.querySelector('.btn-new').addEventListener('click',init);

function init(){ //initialization function or new game function
  scores=[0,0];
  roundScore=0;
  activePlayer=0;
  
  document.querySelector('.dice').style.display='none';
  document.getElementById('score-0').textContent='0';
  document.getElementById('score-1').textContent='0';
  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';
  document.getElementById('name-0').textContent='Player 1';
  document.getElementById('name-1').textContent='Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}

//dice = Math.floor(Math.random()*6)+1;
//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';
//var x=document.querySelector('#score-0').textContent;


