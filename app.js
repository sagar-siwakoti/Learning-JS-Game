/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activePlayer,dice;
scores= [0,0];
roundScore=0;
activePlayer=0;

//dice = Math.floor(Math.random()*6)+1;
//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';
//var x=document.querySelector('#score-0').textContent;

document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';


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
      //next player
      activePlayer === 0 ? activePlayer = 1 :activePlayer = 0;
      roundScore = 0;

      document.getElementById('current-0').textContent='0';
      document.getElementById('current-1').textContent='0';

      
      //document.querySelector('.player-0-panel').classList.remove('active');  //add and remove the active status of player
      //document.querySelector('.player-1-panel').classList.add('active');

      document.querySelector('.player-0-panel').classList.toggle('active'); //can use toggle 
      document.querySelector('.player-1-panel').classList.toggle('active');
      
  } 
});


