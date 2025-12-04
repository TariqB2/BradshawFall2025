// Declare variables for the position and color of the circle

let circleX;
let circleY;
let circleColor;

let squareX;
let squareY;
let squareColor;
let shape;

let triangleX1;
let triangleY1;
let triangleX2;
let triangleY2;
let triangleX3;
let triangleY3;
let triangleColor;

function setup() {
  createCanvas(710, 400);
   background(10);

  // Set the initial position and color of the circle
  setPositionAndColor();

  describe(
    'Shapes whose position and color change randomly when the user clicks the canvas.'
  );
}

function setPositionAndColor() {
  // Set the position to a random value (within the canvas)
  circleX = random(0, width);
  circleY = random(0, height);
  squareX = random(0, width);
  squareY = random(0, height);
  triangleX1 = random(0, width);
  triangleY1 = random(0, height);
  triangleX2 = random(0, width);
  triangleY2 = random(0, height);
  triangleX3 = random(0, width);
  triangleY3 = random(0, height);

  // Set R, G, and B to random values in the range (100, 256)
  circleColor = color(random(100, 256), random(100, 256), random(100, 256));
  squareColor = color(random(100, 256), random(100, 256), random(100, 256));
  triangleColor = color(random(100, 256), random(100, 256), random(100, 256));
}

function draw() {
  if (shape===0){
    fill(circleColor);
  circle(circleX, circleY, 100);
  }
else if(shape===1){
  fill(squareColor);
  square(squareX, squareY, 100);
}
  else{
    fill(triangleColor);
  triangle(triangleX1, triangleY1,triangleX2, triangleY2,triangleX3, triangleY3);
  }

}

function mousePressed() {
  // On mouse press (re)set the position and color
  setPositionAndColor();
  shape=random([0,1,2]);
  
}