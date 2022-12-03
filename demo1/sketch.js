//https://p5js.org/
function setup() {
  createCanvas(720, 400);
  stroke(255); // Hacer que el color de trazado sea blanco
  frameRate(30);
  y = 400;
}

function draw() {
  // put drawing code here
  background(0); // Hacer que el color del fondo sea negro
  if (y > 0) {
    y = y - 1;
  } else {
    y = 400;
  }
  line(0,y,720,y);
}

