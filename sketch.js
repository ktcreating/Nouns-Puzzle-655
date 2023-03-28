let ans, bg;

function preload() {
  ans = loadImage("noun655num.png");
  bg = loadImage("noun655bg.png");
}
function setup() {
let canvas = createCanvas(600, 600);
  canvas.parent('sketch-container');
  noCursor();
  cursor("glasscur.png", 30, -10);
  image(ans, 0, 0);
  image(bg, 0, 0);
  
  input = createInput();
  input.position(0, 600);

  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  greeting = createElement('h2');
  textAlign(CENTER);
  textSize(50)

  
function greet() {
  const password = input.value(); 
   if (password == 2430) {
      greeting.html('Congratulations! Puzzle #Noun655  Solved');
      } else {
      greeting.html('Not Correct')
      textSize(50)}
  
    input.value('');
}}

function mouseDragged() {
  copy(ans, mouseX, mouseY, 50, 30, mouseX, mouseY, 50, 30);
}
