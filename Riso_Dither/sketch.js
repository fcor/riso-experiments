let black;
let img;
let ditherType = 'atkinson';

function preload() {
  img = loadImage('morph2.png');
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);

  // black = new Riso('black');
  // MELON = new Riso('MELON');
  blue = new Riso('blue');
}

function draw() {
  background(200);

  let threshold = map(mouseX, 0, width, 0, 255);

  clearRiso();

  let dithered = ditherImage(img, ditherType, threshold);
  // MELON.image(dithered, 0, 0);
  blue.image(dithered, 0, 0);


  drawRiso();
}

function mouseClicked() {
  exportRiso();
}

function keyReleased() {
  if (key == 1) ditherType = 'atkinson';
  else if (key == 2) ditherType = 'floydsteinberg';
  else if (key == 3) ditherType = 'bayer';
  else if (key == 4) ditherType = 'none';
}
