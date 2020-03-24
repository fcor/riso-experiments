let blue, red;
let img;

let ditherType = 'atkinson';

function preload() {
  img = loadImage('morph2.png');
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height)
  blue = new Riso('blue');
  red = new Riso('red');
  noLoop();
}

function draw() {
  background(255);

  clearRiso();

  let reds = extractRGBChannel(img, "red");
  let blues = extractRGBChannel(img, "blue");

  blue.imageMode(CENTER);
  red.imageMode(CENTER);

  blue.image(blues, width / 2, height / 2);
  red.image(reds, width / 2, height / 2);


  let textGraphic = createGraphics(width, height);
  textGraphic.fill(0);
  textGraphic.textStyle(BOLD);
  textGraphic.textFont('Helvetica');
  textGraphic.textAlign(CENTER, CENTER);
  textGraphic.textSize(200);
  textGraphic.text('STRENGTH', width * 0.5, height * 0.5);

  // let textGraphic2 = createGraphics(width, height);
  // textGraphic2.fill(0);
  // textGraphic2.textStyle(BOLD);
  // textGraphic2.textFont('Helvetica');
  // textGraphic2.textAlign(CENTER, CENTER);
  // textGraphic2.textSize(85);
  // textGraphic2.text('STRENGTH BEYOND STRENGTH', width * 0.503, height * 0.503);

  blue.cutout(textGraphic);
  // red.cutout(textGraphic2);

  drawRiso();
}

// function mousePressed() {
//   exportRiso();
// }