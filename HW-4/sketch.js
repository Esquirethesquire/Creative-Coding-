function setup() {
  // create a canvas
createCanvas(500, 800);
}
function draw() {
  //set background color
  background('rgb(237,67,55)');
//Create a sandbox for the whole character
push();
//Translate graph to center
translate(250, 400);
//hair
push();
noStroke();
strokeWeight(100);
stroke(0);
line(0, -130, 0, 0);
strokeWeight(85);
stroke(0);
line(0, -130, 0, 0);
pop();
//head
fill('rgb(0,128,0)');
rect(-40, -155, 80, 80, 10);
//eyes
fill(255);
strokeWeight(1);
ellipse(-20, -130, 25, 20);
ellipse(20, -130, 25, 20);
fill('rgb(0,128,0)');
ellipse(-20, -130, 10, 5);
ellipse(20, -130, 10, 5);
//eyebrows
push();
stroke(0);
strokeWeight(6);
line(-30, -150, -6, -147);
line(6, -147, 30, -150);
pop();
//Mole
push();
noStroke();
fill('rgb(139,69,19)');
ellipse(-15.5, -97.5, 6, 6);
pop();
// hat
fill(20);
stroke(0);
ellipse(0, -162.5, 200, 20);
triangle(0, -300, 35, -162.5, -35, -162.5);
//body
fill(40);
noStroke();
rect(-50, -75, 100, 100, 15);
quad(-50, 0, 50, 0, 100, 200, -100, 200);
//arms
fill(40);
quad(50, -65, 150, 25, 100, 70, 50, -25);
quad(-50, -65, -50, -25, -100, 70, -150, 25);
//hands
fill('rgb(0, 128, 0)');
stroke('rgb(0, 128, 0)');
strokeWeight(17);
line(140, 42.5, 140, 45);
line(-140, 42.5, -140, 45);
//feet
stroke('rgb(0, 0, 0)');
strokeWeight(30);
line(18, 210, 50, 210);
line(-18, 210, -50, 210);
//mouth
stroke(0);
strokeWeight(3);
line(-8, -110, 8, -110);
pop();
}