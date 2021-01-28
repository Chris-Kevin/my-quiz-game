var canvas;
var gameState = 0;
var contestantcount,database,quiz,question,contestant;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  
quiz = new Quiz();
quiz.getState();
quiz.start();
  
}


function draw(){
  background("pink");
  if(contestantcount === 1){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  if(gameState === 2){

quiz.end();
  }
}
