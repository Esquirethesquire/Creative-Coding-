//Array Declaration
var circle = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create objects
  for (var i=0; i<100; i++) {
    circle.push(new Move());
  }
}
//Draw Function, continuously operates
function draw() {
  //makes background change every draw iteration, which causes it to flash
  background(random(0, 255), random(0, 255), random(200, 255));
  for (var i=0; i<circle.length; i++) {
   circle[i].move();
    circle[i].display();

  }

}

// Movement class
function Move() {
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.diameter = random(5, 35);
  this.speed = .5;
//Actually does the movement,
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}
