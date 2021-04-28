/* global createCanvas, resizeCanvas */
let fruit = [];
let idx;

function preload () {
  window.setupMenuLogic()
  fruit = loadImage('/images/fruit.png');
  for (let i = 0; i < 5; i++) {
    fruit[i] = loadImage("fruit" + i + ".png");
  }
}

function setup () {
  createCanvas(window.innerWidth, window.innerHeight)
}

function draw () {
  const selected = window.settings.selectedBrush
  if (selected) {
    const brush = window.brushes[selected]
    brush.draw()
  }
}

function windowResized () {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
