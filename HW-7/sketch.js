// Setting the variable 'ball', creating parameters for that ball
let ball = {};
ball.width = 100;
ball.x = 10;
ball.y = 10;
ball.delta_x = 2.5;
ball.delta_y = .5;
ball.scale_x = -5;
ball.scale_y = -15;
// Creating the canvas
function setup() {
    createCanvas(windowWidth, windowHeight);
    background('orange');
}
//Draw function, operates continuously
function draw() {

    ball.x += ball.delta_x * ball.scale_x;

    ball.y += ball.delta_y * ball.scale_y;

//Creating Ceiling for the X axis if ball.x is greater than width of canvas or <= 0, then changes the direction of the ball.
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
//Creating Ceiling for the X axis if ball.x is greater than width of canvas or <= 0
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
// creating the white circle that comprises the ball
    fill(200);
    ellipse(ball.x, ball.y, ball.width, ball.width);
}
