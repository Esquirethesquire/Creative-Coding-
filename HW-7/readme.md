Derek Hickman, Group B

[Live Sketch Link](https://esquirethesquire.github.io/Creative-Coding-/HW-7/)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing
The original code is drawing an circle(ellipse) that is moving on the x/y axis. The sketch utilizes a ceiling around the edges of the canvas. This allows for the visual of the ball bouncing around the edges. The sketch also allows you to click the mouse, which increases the speed of the ball and changes the path slightly.

### What does each line do?
```
// Setting the variable 'ball', creating parameters for that ball
let ball = {};
ball.width = 60;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = -10;
ball.scale_y = -10;
// Creating the canvas
function setup() {
    createCanvas(windowWidth, 400);
    background(0);
}
//Draw function, operates continuously
function draw() {

    ball.x += ball.delta_x * ball.scale_x;

    ball.y += ball.delta_y * ball.scale_y;

//Creating Ceiling for the X axis if ball.x is greater than width of canvas or <= 0, then changes the direction of the ball.
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
//Creating Ceiling for the X axis if ball.y is greater than width of canvas or <= 0, then changes the direction of the ball.
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
// creating the white circle that comprises the ball
    fill(255);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}
// mouse press function
function mousePressed() {
//Changes direction of ball when mouse is clicked.
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
```
### How can you make the ball change direction?

The statement within the if statement changes the ball's direction.
```
if (ball.x >= width || ball.x <= 0) {
    ball.delta_x = -1 * ball.delta_x;
```
## How did you alter the sketch?
1. Changed the color of the background, changed the ball size and color.
2. Modified various variables, got rid of mouse clicking. I did so that the sketch would make a woven texture that looks as if it is a screensaver.
