var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

 quizObj = new Quiz()
 quizObj.getState()
 quizObj.start()

}


function draw(){
  background("red")

  if(contestantCount == 2){
    quizObj.update(1)
  }

  if(gameState == 1){
    clear()
    quizObj.play()
  }
  
}
