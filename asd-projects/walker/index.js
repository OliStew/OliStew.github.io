/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    ENTER: 13,
    LEFT: 37, 
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    A: 65,
    W: 87,
    D: 68,
    S: 83,

  };
  
  var walker = {
    positionX: 0,
    speedX: 0,
    positionY: 0,
    speedY: 0,
  }

  var runner = {
    positionX: 440,
    speedX: 0,
    positionY: 0,
    speedY: 0,
  }
  
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);  

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    //Controls Walker
    if(event.which === KEY.ENTER) {
      console.log(event.key + ' ' + event.which);
    }

    if(event.which === KEY.LEFT) {
      console.log(event.key + ' ' + event.which);
      walker.speedX = -5;
    }

    if(event.which === KEY.UP) {
      console.log(event.key + ' ' + event.which);
      walker.speedY = -5;
    }

    if(event.which === KEY.RIGHT) {
      console.log(event.key + ' ' + event.which);
      walker.speedX = 5;
    }

    if(event.which === KEY.DOWN) {
      console.log(event.key + ' ' + event.which);
      walker.speedY = 5;
    }

  // Controls runner

    if(event.which === KEY.A) {
      console.log(event.key + ' ' + event.which);
      runner.speedX = -7;
    }

    if(event.which === KEY.W) {
      console.log(event.key + ' ' + event.which);
      runner.speedY = -7;
    }

    if(event.which === KEY.D) {
      console.log(event.key + ' ' + event.which);
      runner.speedX = 7;
    }

    if(event.which === KEY.S) {
      console.log(event.key + ' ' + event.which);
      runner.speedY = 7;
    }
  }

  function handleKeyUp(event) {
if(event.which === KEY.LEFT || event.which === KEY.UP || event.which === KEY.RIGHT || event.which === KEY.DOWN) {
  walker.speedX = 0
  walker.speedY = 0
 } 
 if(event.which === KEY.A || event.which === KEY.W || event.which === KEY.D || event.which === KEY.S ) {
  runner.speedX = 0
  runner.speedY = 0
 } 
}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
function repositionGameItem () {
walker.positionX += walker.speedX
walker.positionY += walker.speedY

runner.positionX += runner.speedX
runner.positionY += runner.speedY
}

function redrawGameItem(){
$("#walker").css("left", walker.positionX); 
$("#walker").css("top", walker.positionY);
$("#runner").css("left", runner.positionX); 
$("#runner").css("top", runner.positionY);
}
  
function wallCollision() {
// For walker
var char1H = $("#walker").height()
var char1W = $("#walker").width()
var boardWidth = $("#board").width() - char1W
var boardHeight = $("#board").height() - char1H

//For walker
var char2H = $("#runner").height()
var char2W = $("#runner").width()
var boardWidth2 = $("#board").width() - char2W
var boardHeight2 = $("#board").height() - char2H

//This is for walker
if(walker.positionX < 0){
  walker.positionX = 0
}
if(walker.positionY < 0){
  walker.positionY = 0
}
if(walker.positionX > boardWidth){
  walker.positionX = boardWidth
}
if(walker.positionY > boardHeight){
  walker.positionY = boardHeight
}
//This is for runner

if(runner.positionX < 0){
  runner.positionX = 0
}
if(runner.positionY < 0){
  runner.positionY = 0
}
if(runner.positionX > boardWidth2){
  runner.positionX = boardWidth2
}
if(runner.positionY > boardHeight2){
  runner.positionY = boardHeight2
}
}
}
