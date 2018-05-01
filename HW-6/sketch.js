//Setup Function, Creates canvas with variables windowHeight and windowWidth
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

//Variable Declaration
var backgroundChange = 5;
var circX1;
var circY1;
var circX2;
var circY2;
var circDelta;
var redVal;
var greenVal;
var blueVal;


//Draw function, draws everything, executes continuosly
function draw() {
  // setting background color
	background(redVal,greenVal,blueVal);
  fill('black');
  stroke(0);
  //Making circle with coordinates circX1, circY1, circX2, circY2.
  ellipse(circX1, circY1, circX2, circY2);

  //Assignment of circle coordinates
  circX1 = windowWidth/2;
  circY1 = windowHeight/2;
  circX2 = windowWidth/2;
  circY2 = windowHeight/2;

  //setting values of RGB values, constraining Red between 50 and 200
  redVal = mouseX % windowWidth;
  redVal = constrain(redVal,50,200);
  greenVal =floor(random(backgroundChange + 5, -backgroundChange - 10));
  blueVal = mouseY % windowHeight;
  //Circle resizing
  circDelta = mouseY/50;
  circY1 = circY1 - circDelta;
  circX2 = circX2 - circDelta*2;
  circY2 = circY2 + circDelta*2;

}
