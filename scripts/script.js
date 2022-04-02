/*

// random who's beginning the game
function wichOneBegins(){
  return Math.ceil(Math.random()*2);
}

/**----rolldice function ----- */
/*
function rollDice(){
  return Math.ceil(Math.random()*6);
}*/


// Create player's objects
/*
function Player (id,name, global,isActive){
  this.id=id;
  this.name=name;
  this.global=global;
  this.isActive=isActive;
};

const player1= new Player(1,'Joueur1',0,false);
const player2= new Player(2,'Joueur2',0,false);
console.log(player1, player2);
const players = [player1,player2];
console.log(players[1]);


//initianizing current score variable && current score function
let current = 0;
let currentScore = document.getElementById('current-score');
currentScore.innerText =current;
let newgame = document.getElementById('new-game');
let p1 = document.getElementById('player1');
let p2 = document.getElementById('player2');
rolldiceBtn.disabled=true;*/
/*---------- starting a new game -------------*/
/*
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
  let result = 4;
  rolldiceBtn.addEventListener('click', ()=>{
    result = rollDice();
  });
  rolldiceResult.innerText=result;
  console.log(result);
 console.log(rollDice());
}*/
/* ------ function that begins a new game */
/*
newgame.addEventListener('click', newGame);

/* ------ changing player functions --------------*/
/*
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
*/


/*function rollTheDice(){
    rolldiceBtn.addEventListener('click', ()=>{
    return rollDice();
  })
}



//trying interpolation to minimize function
function tryItNowInterpolation(){
  let hazard = Math.ceil(Math.random());
  console.log(hazard);
  console.log(players[hazard].id);
};
tryItNowInterpolation();
players[0].global=50;
console.log(players[0].global);
*/

// getting all the html elements in the document
let newGameBtn = document.getElementById('new-game');
let rollDiceBtn = document.getElementById('roll-dice-button');
let holBtn = document.getElementById('hold-button');
let rolldiceResult = document.getElementById('rolldice-result');
let currentScore = document.getElementById('current-score');
let scorePlayer1 = document.getElementById('score1');
let scorePlayer2 = document.getElementById('score2');
let p1 = document.getElementById('player1');
let p2 = document.getElementById('player2');
let result=null;
let current;

/**------------ creating players as Objects------------- */
function Player (id,name, global,isActive){
  this.id=id;
  this.name=name;
  this.global=global;
  this.isActive=isActive;
};

const player1= new Player(1,'Joueur1',0,false);
const player2= new Player(2,'Joueur2',0,false);
const players = [player1,player2];

/**-----------creating all the variables seen in the app------------- */




/**------------ function to know which player is gonna begin the 1st turn------ */

function wichOneBegins(){
  return Math.floor(Math.random()*2);
}

/**----rolldice function ----- */

function rollDice(){
  return Math.ceil(Math.random()*6);
}

/**--------------starting a new game----------- */
newGameBtn.addEventListener('click', ()=>{
  player1.global = 0;
  player2.global = 0;
  current=0;
  rolldiceResult.innerText=0;
  let oneOrTwo =wichOneBegins();
  whoIsActive(oneOrTwo);
  newTurn();
  rolldiceResult.innerText=result;

  console.log('and the winner is '+result);
})


//function determining whose player's active

function whoIsActive (oneOrTwo){
  if (oneOrTwo === 0){
    player1isActive();
  }else{
    player2isActive();
  }
}

//modifies player's css 
function player1isActive (){
  player1.isActive = "true";
  p1.classList.add('is-active');
  p2.classList.remove('is-active');
  player2.isActive = "false";
  console.log("player 1 " + player1.isActive);
}

function player2isActive (){
  p2.classList.add('is-active');
  p1.classList.remove('is-active');
  player2.isActive = "true";
  player1.isActive = "false";
  console.log("player 2 " + player2.isActive);
}

function newTurn(){
  rollDiceBtn.addEventListener('click',()=>{
      result= rollDice();
      rolldiceResult.innerText=result;
    

  }); 
}

