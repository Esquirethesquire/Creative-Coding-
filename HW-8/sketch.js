var treecolor = [255, 255, 255]; //color of tree is green



function setup() //initialization of program.

{

createCanvas(800, 600); //canvas size is set, creates a canvas explicitly using x and y values



noLoop();

stroke(248);

angleMode(DEGREES);

}

function draw() //executed continuously

{
 background('rgb(0,0,0)');

	translate(200, 200);


translate(width/4, height/6);

rotate(30/4);

branchComponent(98, 8, 60);

}

function branch(length, a, g) {

line(0, 0, 0, -length);

translate(0, -length);

length *= 0.7;

if (length > 1) {

push();

rotate(a);

branch(length, a, g);

pop();

push();

rotate(-a);

branch(length, a, g);

pop();

}

}

function branchComponent(length, am, a) {

stroke.apply(null, treecolor);

var increment = 360/am

var rotAmount;

for (var i = 0; i < am; i++) {

push();

rotAmount = -180 + increment * i

rotate(random(rotAmount - 60, rotAmount));

branch(length, a, 1);

pop();

}

}
