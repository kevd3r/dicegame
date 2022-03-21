// random who's beginning the game
function wichOneBegins(){
  return Math.ceil(Math.random()*2);
}

/**----rolldice function ----- */
function rollDice(){
  return Math.ceil(Math.random()*6);
}



// Create player's objects
function Player (name, turn, global,isActive){
  this.name=name;
  this.turn=turn;
  this.global=global;
  this.isActive=isActive;
};
const player1= new Player('Joueur1',1,0,false);
const player2= new Player('Joueur2',2,0,false);
console.log(player1, player2);


//initianizing current score variable && current score function
let current = 0;
let currentScore = document.getElementById('current-score');
currentScore.innerText =current;
let newgame = document.getElementById('new-game');
let p1 = document.getElementById('player1');
let p2 = document.getElementById('player2');
/*---------- starting a new game -------------*/
function newGame(){
  player1.global = 0;
  player2.global = 0;
  current = 0;
  currentScore.innerText = current;
  console.log(current);
  rolldiceBtn.disabled=false;
  let playerBegins = wichOneBegins();
  if (playerBegins ===1){
    player1isActive();
  }else{
    player2isActive();
  }
  rollTheDice();
  
}
/* ------ function that begins a new game */
newgame.addEventListener('click', newGame);

/* ------ changing player functions --------------*/
function player1isActive (){
  player1.isActive = "true";
  p1.classList.add('is-active');
  p2.classList.remove('is-active');
  player2.isActive = "false";
}

function player2isActive (){
  p2.classList.add('is-active');
  p1.classList.remove('is-active');
  player2.isActive = "true";
  player1.isActive = "false";
}

let rolldiceResult = document.getElementById('rolldice-result');
let rolldiceBtn = document.getElementById('roll-dice-button');
rolldiceBtn.disabled=true;


function rollTheDice(){
    rolldiceBtn.addEventListener('click', ()=>{
    return rolldiceResult.innerText = Math.ceil(Math.random()*6);
  })
}

